import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'shared-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css']
})

export class BannerComponent {
    modalContainer: string;
    constructor() {
    }

    moveToWhatsapp() {
        var idmodal = <HTMLElement>document.querySelector("#idmodal");
        idmodal.click();
    }

    clickInstrucciones() {
        var alerta = window.document.querySelector("#modalInstrucciones") as HTMLElement | null;
        if(alerta!=null)
            alerta.style.display = "block";
    }
}
