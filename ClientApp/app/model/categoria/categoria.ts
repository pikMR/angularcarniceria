import { NewImage } from '../../components/interface/image.interface';
export class Categoria {
    id_categoria: number;
    nombre: string;
    descripcion: string;
    imagen: NewImage;
    ico: NewImage;
    constructor(id: number, n: string, desc: string, img: NewImage, ico: NewImage) {
        this.id_categoria = id;
        this.nombre = n;
        this.descripcion = desc;
        this.imagen = img;
        this.ico = ico;
    }
}
