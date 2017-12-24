import { Component } from '@angular/core';
import { NewImage } from '../interface/image.interface';
import { Utils } from '../../services/utils';

var IMAGES: NewImage[] = [
    { "title": "Productos frescos", "url": "/dist/images/gallery/original/1-gallery.jpg" },
    { "title": "Nuestra Tienda", "url": "/dist/images/gallery/original/2-gallery.jpg" },
    { "title": "La mejor Atención", "url": "/dist/images/gallery/original/3-gallery.jpg" },
    { "title": "La mejor Atención", "url": "/dist/images/gallery/original/4-gallery.jpg" },
    { "title": "La mejor Atención", "url": "/dist/images/gallery/original/5-gallery.jpg" }
];

var IMAGES_M: NewImage[] = [
    { "title": "Productos frescos", "url": "/dist/images/gallery/1-gallerym.jpg" },
    { "title": "Nuestra Tienda", "url": "/dist/images/gallery/2-gallerym.jpg" },
    { "title": "La mejor Atención", "url": "/dist/images/gallery/3-gallerym.jpg" },
    { "title": "Servicio a Domicilio", "url": "/dist/images/gallery/4-gallerym.jpg" },
    { "title": "Servicio a Domicilio", "url": "/dist/images/gallery/5-gallerym.jpg" }
];

@Component({
    selector: 'css-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CSSCarouselComponent {
    public images : any;
    constructor() {
        this.images = IMAGES;

        /*if (Utils.esMobil()) {
            this.images = IMAGES_M;
        } else {
            this.images = IMAGES;
        }*/
        
    }
}
