/*
    Componentes @angular
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

/*
    Servicios
*/
import { DataService } from './services/data.service';
import { ProductoService } from './services/producto.service';
/*
    Componentes del esqueleto web
*/
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { FeaturesComponent } from './components/shared/features/features.component';
import { MainComponent } from './components/shared/main/main.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CSSCarouselComponent } from './components/carousel/carousel.component';
import { DetalleProductoComponent } from './components/model/detalleProducto.component';
import { DashBoardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { IndexComponent } from './components/index/index.component';
import { SpecialComponent } from './components/especiales/special.component';
import { ModalWhatsappComponent } from './components/modalw/modalw.component';
import { ProductoContadorComponent } from './components/contadorprod/contadorprod.component';

/*
    Componentes de prueba - tests
*/
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

/*
    Otros elementos y NGX
*/
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { routing } from './services/rutas';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Ng2CompleterModule } from "ng2-completer";
//import { ModalModule } from 'ngx-modialog';
//import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        BannerComponent,
        FeaturesComponent,
        MainComponent,
        FooterComponent,
        CSSCarouselComponent,
        DetalleProductoComponent,
        DashBoardComponent,
        SpecialComponent,
        SearchComponent,
        IndexComponent,
        ModalWhatsappComponent,
        ProductoContadorComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        routing,
        BrowserModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        Ng2CompleterModule,
        Ng2DeviceDetectorModule.forRoot()
    ],
    providers: [DataService,ProductoService],
    bootstrap: [AppComponent]
})
export class AppModuleShared {
}
