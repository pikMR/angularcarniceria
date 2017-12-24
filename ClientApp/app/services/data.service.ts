import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ProductoContadorComponent } from '../components/contadorprod/contadorprod.component'

@Injectable()
export class DataService {
    //private user: BehaviorSubject<string>;
    private info: BehaviorSubject<any[]>;
    public cast: Observable<any[]>;
    public castFav: Observable<any[]>;
    private favInfo: BehaviorSubject<any[]>;
    private mapFav: any[];
    //private mapFav: Map<number, any>; ECMASCRIPT6
    //private favInfo: BehaviorSubject<IterableIterator<any>>;
    //public castFav: Observable<IterableIterator<any>>;

    constructor() {
        if (this.info == null && this.cast == null) {
            this.mapFav = [];
            this.info = new BehaviorSubject<any[]>(["", 0]);
            this.cast = this.info.asObservable();
            this.favInfo = new BehaviorSubject<any[]>(this.mapFav);
            this.castFav = this.favInfo.asObservable();
        }
    }

    editInfo(newInfo: any[]) {
        this.info.next(newInfo);
    }

    /*
        -- FAVORITOS
    */

    setFav(cmp: any) {
        var eq = false;

        this.mapFav.map(
            function buscaIndice(obj) {
                if (obj != "undefined" && (obj.id == cmp.id)) {
                    obj.nombre = cmp.nombre;
                    obj.precio = cmp.precio;
                    obj.cantidad = cmp.cantidad;
                    obj.fav = cmp.fav;
                    eq = true;
                    return;
                }
            }
        );

        if (!eq) {
            console.log("PUSH");
            this.mapFav.push({ id: cmp.id, nombre: cmp.nombre, precio: cmp.precio, cantidad: cmp.cantidad, fav: cmp.fav });
        }

        this.enviarDatosFav();
    }

    updateFav(cmp: any) {
        let eq = false;
        // comprueba si es fav, si no es fav no actualiza
        this.mapFav.map(
            function buscaIndice(obj) {
                if (obj != "undefined" && (obj.id == cmp.id)) {
                    obj.nombre = cmp.nombre;
                    obj.precio = cmp.precio;
                    obj.cantidad = cmp.cantidad;
                    obj.fav = cmp.fav;
                    eq = true;
                    return;
                }
            }
        );
        if (eq) {
            this.enviarDatosFav();
        }
    }

    enviarDatosFav() {
        this.favInfo.next(this.mapFav);
    }
}
