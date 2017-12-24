import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Location } from '@angular/common';
import { ProductoService } from '../../services/producto.service';
import { Utils } from '../../services/utils';

@Component({
    selector: 'detalle-producto',
    templateUrl: './../views/detalleProducto.component.html',
    styleUrls: ['./../views/detalleProducto.component.css']
})
export class DetalleProductoComponent implements OnInit{
    user: string;
    editUser: string;
    modelproducto: any; modelindividual: any; modelcategoria: any; modelcategorias: any;
    @Input('titulo') titulo: string;
    @Input() random: number;

    constructor(private productoService: ProductoService,
                private route: ActivatedRoute,
                private location: Location,
                private _activatedRoute: ActivatedRoute,
                private router: Router){ }

    ngOnInit(): void {

        /*
          Selecciona desde las categorias.
          distinguimos por url.
        */
        let pathroot = this.route.pathFromRoot;
        let arr : string[] = [];
        pathroot.forEach(
            path => path.url.subscribe(
                url => { url.forEach(e => arr.push(e.path)); }
            )
        );

        this.route.params.forEach(
            (params: Params) => {
                console.dir(params);
                if (arr.find(v => v == "detalle")) {
                    console.dir(params);
                    console.log(" DETALLE -");
                    let id = +params['id'];
                    
                        this.productoService.getProductoPorId(id).subscribe(
                            (response) => {
                                this.modelindividual = response;
                                console.dir(this.modelindividual)
                                this.productoService.getCategoria(this.modelindividual["CategoriaPrincipal"]).then(
                                    (cats) => { this.modelcategoria = cats }
                                );
                            }
                        );

                } else {
                    if (params['titulo']==null && params['id'] != "all") {
                        let paramId = +params['id'];

                        /*
                          Categoría concreta - no es el producto seleccionado...
                        */

                        this.productoService.getCategoria(paramId).then(
                            (response) => { this.modelcategoria = response; }

                        );
                        this.productoService.getProductosPorCategoria(paramId).subscribe((response) =>
                        { this.modelproducto = response; }
                        );

                        //this.userService.cast.subscribe(user => this.user = user);

                    } else if (params['id'] != "all") {
                        /*
                          Todas las categorias (responsive)
                        */
                        this.productoService.getCategoria(params['id']).then(
                            (response) => { this.modelcategoria = response; }
                        );
                        this.productoService.getProductosPorCategoria(params['id']).subscribe((response) =>
                        { this.modelproducto = response; }
                        );
                    } else {
                        // all
                        this.modelcategorias = this.productoService.getCategorias();
                        this.random = Utils.getRandomInt(1, 8);
                    }
                }     
            }
        );
    }

    /*editTheUser() {
        this.userService.editUser(this.editUser);
    }*/

    setProducto(idprod: number) {
        console.dir(this.modelproducto);
        var arr_pr = this.modelproducto.filter(
            function (prod:any) { return prod.Id == idprod}
        );
        arr_pr[0]["Precio"] = 0.00;
        /*console.log(arr_pr[0]["Precio" ]);
        console.dir(arr_pr);*/
    }

    isAtras() {
        this.location.back();
    }

    moveToCategoria() {
        this.router.navigate(['/categoria/' + this.modelcategoria["id_categoria"]]);
    }
}
