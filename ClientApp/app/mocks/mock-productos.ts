import { Producto } from '../model/producto/producto';
import { NewImage } from '../components/interface/image.interface';

let ipsu = 'As this PRODUCTO is a book excerpt, browser renderings of attributes and input types may have altered since the screenshots were taken. Additionally';

var IMAGES_PRODUCTOS: NewImage[] = [
    { "title": "carne de cerdo", "url": "/dist/images/categoria/cerdo/ico/pig-32.ico" },
    { "title": "carne de ternera", "url": "/dist/images/categoria/ternera/ico/cow-32.ico" },
    { "title": "carne de cordero y cabrito", "url": "/dist/images/categoria/cordero/ico/sheep-32.ico" },
    { "title": "carne de pollo y pavo", "url": "/dist/images/categoria/ave/ico/chicken-32.ico" },
    { "title": "carne de conejo", "url": "/dist/images/categoria/conejo/ico/rabbit-2-32.ico" },
    { "title": "elaborados", "url": "/dist/images/categoria/embutido/ico/cheese-32.ico" },
    { "title": "otros", "url": "/dist/images/categoria/elaborado/ico/soda-bottle-32.ico" }
];

var IMAGES_PRODUCTOS_DETALLE: NewImage[] = [
    { "title": "As this image", "url": "/dist/images/categoria/cerdo/pig-256.png" },
    { "title": "As this image", "url": "/dist/images/categoria/ternera/cow-256.png" },
    { "title": "As this image", "url": "/dist/images/categoria/cordero/sheep-256.png" },
    { "title": "As this image", "url": "/dist/images/categoria/ave/chicken-256.png" },
    { "title": "As this image", "url": "/dist/images/categoria/conejo/rabbit-2-256.png" },
    { "title": "As this image", "url": "/dist/images/categoria/embutido/cheese-256.png" },
    { "title": "As this image", "url": "/dist/images/categoria/elaborado/soda-bottle-256.png" }
];

export const ARRAY_PRODUCTOS: Producto[] = [
    { Id: '2', Nombre: 'Cerdo', descripcion: 'cerdo', Precio: '100', CategoriaPrincipal: '1', imagen: IMAGES_PRODUCTOS[0], UnidadesStock:'1000' },
    { Id: '7', Nombre: 'Ternera', descripcion: 'terneras', Precio: '100', CategoriaPrincipal: '1', imagen: IMAGES_PRODUCTOS[1], UnidadesStock: '1000' },
    { Id: '4', Nombre: 'Cordero y Cabrito', descripcion: 'cordero', Precio: '100', CategoriaPrincipal: '1', imagen: IMAGES_PRODUCTOS[2], UnidadesStock: '1000' },
    { Id: '1', Nombre: 'Pollo y Pavo', descripcion: 'pollo,pavo,gallo,gallina', Precio: '100', CategoriaPrincipal: '1', imagen: IMAGES_PRODUCTOS[3], UnidadesStock: '1000' },
    { Id: '3', Nombre: 'Conejo', descripcion: 'conejo', Precio: '100', CategoriaPrincipal: '1', imagen: IMAGES_PRODUCTOS[4], UnidadesStock: '1000' },
    { Id: '6', Nombre: 'Elaborados', descripcion: 'todo el embutido: salchicha,mortadela,queso,jamón', Precio: '100', CategoriaPrincipal: '1', imagen: IMAGES_PRODUCTOS[5], UnidadesStock: '1000' }
];

export const PRODUCTOS_DETALLE: Producto[] = [
    { Id: '2', Nombre: 'Cerdo', descripcion: ipsu, Precio: '100', CategoriaPrincipal: '1', imagen: IMAGES_PRODUCTOS_DETALLE[0], UnidadesStock: '1000' },
    { Id: '7', Nombre: 'Ternera', descripcion: ipsu, Precio: '100', CategoriaPrincipal: '1', imagen: IMAGES_PRODUCTOS_DETALLE[1], UnidadesStock: '1000' },
    { Id: '4', Nombre: 'Cordero y Cabrito', descripcion: ipsu, Precio: '100', CategoriaPrincipal: '1', imagen: IMAGES_PRODUCTOS_DETALLE[2], UnidadesStock: '1000' },
    { Id: '1', Nombre: 'Pollo y Pavo', descripcion: ipsu, Precio: '100', CategoriaPrincipal: '1', imagen: IMAGES_PRODUCTOS_DETALLE[3], UnidadesStock: '1000' },
    { Id: '3', Nombre: 'Conejo', descripcion: ipsu, Precio: '100', CategoriaPrincipal: '1', imagen: IMAGES_PRODUCTOS_DETALLE[4], UnidadesStock: '1000' },
    { Id: '6', Nombre: 'Elaborados', descripcion: ipsu, Precio: '100', CategoriaPrincipal: '1', imagen: IMAGES_PRODUCTOS_DETALLE[5], UnidadesStock: '1000' }
];
