import { Component, ChangeDetectorRef, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../model/categoria/categoria';
import { Utils } from '../../services/utils';
import { ProductoService } from '../../services/producto.service'; // no usado pero se usara
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    mostrarModal: boolean; // #modal por defecto false
    esMovil = false; // transición entre movil y desktop
    buscaSelected: CompleterItem;
    public icategoria: Categoria[] = [];
    public dataService: CompleterData;

    public items2: string[] = ['Pechuga Pollo','Cabeza de Cordero', 'Costillar'];

    public items3: string[] = ['3',
        '4', '5'];

    constructor(private router: Router, private cdRef: ChangeDetectorRef, private completerService: CompleterService, private productoService: ProductoService) {
        if (this.icategoria.length == 0) {
            this.icategoria = productoService.getCategorias("ico");
        }
    }

    abreModalWhatsapp() {
        // cambiamos variable, y en plantilla modificamos la del hijo (visible - modalw.component.ts)
        this.mostrarModal = true;
    }   

    /*
        Efecto dropdown desplegable menu.
    */

    public onHidden(): void {
        console.log('Dropdown is hidden');
    }
    public onShown(): void {
        console.log('Dropdown is shown');
    }
    public isOpenChange(): void {
        console.log('Dropdown state is changed');
    }

    /*
        Efecto hamburguer collapsed.
    */

    public isCollapsed: boolean = false;

    public collapsed(event: any): void {
        console.log(event);
    }

    public expanded(event: any): void {
        console.log(event);
    }

    // busqueda de etiquetas #

    public findPos(obj : any): any {
        var curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return [curtop];
        }
    }

    /*
      routing
    */

    moveToBuscador() {
        this.router.navigate(['/busqueda']);
    }

    selectCategoria = (item: Categoria) => {
        this.router.navigate(['/categoria/' + item.id_categoria]);
    }

    moveToIndex() {
        this.router.navigate(['/index']);
    }

    goContact() {
        var obj = document.getElementById("content");
        if (obj == null) {
            obj = document.getElementById("footer-wrapper");
            if (obj != null) {
                this.scrollTo(obj);
            } else {
                window.location.href = "/index#content";
            }
        } else {
            this.scrollTo(obj);
        } 
    }

    scrollTo(obj: any) {
        var curtop = 0; 
        do {
            curtop += obj.offsetTop;
        } while (obj == obj.offsetParent);
        window.scroll(0, curtop);
    }

    moveToNuestros() {
        this.router.navigate(['/categoria/all']);
    }

    /*
      Buscador
    */

    public cargarBuscador(event : any) {
        if (this.dataService == null) {
            this.dataService = this.completerService.local(this.productoService.getProductosNames(), 'Nombre', 'Nombre');
        }
    }

    moveToProducto(selected: CompleterItem) {
        if (selected) {
            this.buscaSelected = selected;
        }
        this.router.navigate(['/detalle/' + this.buscaSelected.originalObject["Id"]]);
    }

    /*
    -- copiar al clipboard
    copy() {
        var copyText = document.getElementById("numcopy");
        copyText[0].select();
        document.execCommand("Copy");
    }*/
}
