import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LightBoxUiComponent } from './light-box-ui/light-box-ui.component';
import { SwiperComponent } from './swiper/swiper.component';
import { LightboxModule } from 'ngx-lightbox';
import { FancyBoxComponent } from './fancy-box/fancy-box.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { AtroposComponent } from './atropos/atropos.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ScrollEleComponent } from './scroll-ele/scroll-ele.component';

@NgModule({
  declarations: [
    AppComponent,
    LightBoxUiComponent,
    SwiperComponent,
    FancyBoxComponent,
    SweetAlertComponent,
    AtroposComponent,
    TabPanelComponent,
    AccordionComponent,
    ScrollEleComponent,
  ],
  imports: [
    // BrowserAnimationsModule,
    // ToastrModule.forRoot({
    //   timeOut: 3000,
    //   positionClass: 'toast-top-right',
    //   preventDuplicates: true,
    // }),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
