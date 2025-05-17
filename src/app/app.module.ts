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
import { CalenderComponent } from './calender/calender.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ScrollingPageComponent } from './scrolling-page/scrolling-page.component';
import { ParallexComponent } from './parallex/parallex.component';
import { ScrollEleComponent } from './scroll-ele/scroll-ele.component';
import { ScrollRevealGridComponent } from './scroll-reveal-grid/scroll-reveal-grid.component';
import { ExtraComponent } from './extra/extra.component';
import { ScrollLocomotiveComponent } from './scroll-locomotive/scroll-locomotive.component';
import { GsapTrialsComponent } from './gsap-trials/gsap-trials.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotGitComponent } from './not-git/not-git.component';

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
    CalenderComponent,
    DatePickerComponent,
    ScrollingPageComponent,
    ParallexComponent,
    ScrollEleComponent,
    ScrollRevealGridComponent,
    ExtraComponent,
    ScrollLocomotiveComponent,
    GsapTrialsComponent,
    NotGitComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LightboxModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
