import { HomeComponent } from '../components/home/home.component';
import { IndexComponent } from '../components/index/index.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from '../components/dashboard/dashboard.component';
import { SpecialComponent } from '../components/especiales/special.component';
import { SearchComponent } from '../components/search/search.component';
import { DetalleProductoComponent } from '../components/model/detalleProducto.component';
const rutas: Routes = [
    {
        path: 'index',
        component: IndexComponent
    },
    {
        // declaración de la ruta Busqueda
        path: 'busqueda',
        component: SearchComponent
    },
    {
        path: 'whatsapp',
        component: DashBoardComponent
    },
    {
        path: 'especiales',
        component: SpecialComponent
    },
    {
        path: 'detalle/:id',
        component: DetalleProductoComponent
    },
    {
        path: 'categoria/:id',
        component: DetalleProductoComponent
    },
    {
        path: 'categoria/:id/:titulo',
        component: DetalleProductoComponent
    },
    {
        path: 'categoria/all',
        component: DetalleProductoComponent
    },
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full',
    }
];

export const routing: ModuleWithProviders =  RouterModule.forRoot(rutas);
