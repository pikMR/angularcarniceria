import { Component,ElementRef,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from './../../services/data.service';
import 'rxjs/Rx';

@Component({
    selector: 'contador-producto',
    templateUrl: './contadorprod.component.html',
    styleUrls: ['./contadorprod.component.css']
})

export class ProductoContadorComponent implements OnInit {
    @Input() precio: any; // recogiendo datos del component patern. (precio)
    @Input() id: any;
    @Input() nombre: any; // recogiendo datos del component patern. (nombre)
    private info: any[]=["",0];
    private editInfo: any[] = ["",0];
    private precio_total: number; // precio final total sumado
    private cnt_final: number; // contador final
    private _fav: boolean;
    private _dec: any;
    private _inc: any;
    private _cnt: any;
    private _total: any

    constructor(private el: ElementRef, private userService: DataService) {
    }

    ngOnInit(): void {
        this.userService.cast.subscribe(info => this.info = info);
        var elementoNativo = this.el.nativeElement;
        this._dec = elementoNativo.children[2];
        this._inc = elementoNativo.children[3];
        this._cnt = elementoNativo.children[1];
        this._total = elementoNativo.children[4];

        if (this._inc != null && this._dec != null) {
            var incrementClick$ = Observable.fromEvent(this._inc, 'click');
            var decrementClick$ = Observable.fromEvent(this._dec, 'click');
            var clicks$ = Observable.merge(incrementClick$, decrementClick$)
                .map((event: any) => parseInt(event.target.value, 10));
            var total$ = clicks$.scan((total, value) => (total+value >= 0) ? (total+value) : total , 0);
            total$.subscribe(
                total =>
            {
                this.cnt_final = total;
                this._cnt.innerText = total.toString().concat(".uds");
                this.precio_total = this.getTotal(total, this.precio);
                this._total.innerText = this.precio_total.toFixed(2).concat("/€");
                if (this._fav === true) {
                    this.userService.updateFav({ id: this.id, nombre: this.nombre, precio: this.precio, cantidad: this.cnt_final, fav: this._fav });
                }
                //this.userService.setFav({ id: this.id, nombre: this.nombre, precio: this.precio, cantidad: this.cnt_final }); AUTO-CALCULAR
                /*  Renllenamos ticket */
            }
            );
        }
    }

    clickFav(evento: any) {
        var _target = evento.target;
        var _target2 = _target;
        if (_target.localName == "button") {
            _target2 = _target.children[0];
        }
        if (_target2.className == "fa fa-star-o") {
            _target2.className = "fa fa-star";
            this._fav = true;
        } else {
            _target2.className = "fa fa-star-o";
            this._fav = false;
        }
        this.userService.setFav({ id: this.id, nombre: this.nombre, precio: this.precio, cantidad: this.cnt_final, fav: this._fav });
    }

    getTotal(multiplo: number, precio: number): number {
        return (multiplo * precio);
    }
}
