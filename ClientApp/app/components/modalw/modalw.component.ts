import { Component, ChangeDetectorRef, OnInit, Input, Output, EventEmitter, SimpleChanges, AfterViewChecked } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component(
    {
        selector: 'modal-whatsapp',
        templateUrl: 'modalw.component.html',
        styleUrls: ['./modalw.component.css'],
    }
)

export class ModalWhatsappComponent implements OnInit {

    // input - visible será modificado desde el padre  (navmenu.component.html) mediante la variable mostrarModal
    @Input()
    visible: boolean;

    // output con el modificamos variable del parent
    @Output() setVisible = new EventEmitter<boolean>();

    data: any[];
    modalContainer: string;
    total: number;
    constructor(private infoService: DataService, private cd: ChangeDetectorRef) {
        this.total = 0;
    }
    // input podrá ser utilizado en el parent.
    ngOnInit() {
        this.infoService.castFav.subscribe(info => {
            this.data = info;
        }
        );
    }

    /**
     *  Cierra el modal, clickWhatsapp
     *  se se ha llamado a esta función, obligatoriamente el modal está abierto.
     *  por tanto la variable clickWhatsapp será true.
     */
    public cerrarModal() {
        this.setVisible.emit(false);
        this.total = 0;
    }

    calcularTotal() {
        let suma: number = 0;
        this.data.forEach(
            function (elemento) {
                if (elemento.fav === true) {
                    suma += elemento.precio * elemento.cantidad;
                }

            }
        );
        return suma;
    }

    addSum(cant: number, prec: number): string {
        return (cant * prec).toFixed(2);
    }

    checkData() {
        console.log("checkData()");
        var alerta = window.document.querySelector("#nodatos") as HTMLElement | null;

        if (alerta != null) {
            console.log(alerta.id);
            if (this.data.length > 0) {
                alerta.style.display = "block";
                this.modalContainer = `<h3>Listo!</h3>
        <p>La lista de productos se ha copiado al portapapeles</p>
        <p>Acceda a nuestro Whatsapp y envie un mensaje con esos datos.</p>`;
            } else {
                this.copy();
                alerta.style.display = "block";
                this.modalContainer = `<h3>Info</h3>
        <p>Para poder enviarnos un mensaje mediante Whatsapp con la lista de compra, primero tienes que seleccionar algún producto.</p>
        <p>Si tienes alguna duda, consulta el panel de Instrucciones.</p>`;
            }
        }
    }

    private copy() { }
}