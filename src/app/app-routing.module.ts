import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LightBoxUiComponent } from './light-box-ui/light-box-ui.component';
import { title, version } from 'process';
import { SwiperComponent } from './swiper/swiper.component';
import { FancyBoxComponent } from './fancy-box/fancy-box.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { AtroposComponent } from './atropos/atropos.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lightbox',
    pathMatch: 'full'
  },
  {
    path: 'lightbox',
    component: LightBoxUiComponent,
    data: { title: 'Lightbox Preview', version: '2.0.0', referenceUrl: 'https://www.npmjs.com/package/ngx-lightbox' }
  },
  {
    path: 'swiper',
    component: SwiperComponent,
    data: { title: 'Swiper Preview', version: '6.8.4', referenceUrl: 'https://v8.swiperjs.com/' }
  },
  {
    path: 'atropos',
    component: AtroposComponent,
    data: { title: 'Atropos Preview', version: null, referenceUrl: 'https://atroposjs.com/' }
  },
  {
    path: 'fancybox',
    component: FancyBoxComponent,
    data: { title: 'Fancybox Preview', version: '5.0.36', referenceUrl: 'https://fancyapps.com/fancybox/' }
  },
  {
    path: 'sw-alert',
    component: SweetAlertComponent,
    data: { title: 'Sweet Alert Preview', version: '11.17.2', referenceUrl: 'https://sweetalert2.github.io/' }
  },
  {
    path: 'accordion',
    component: AccordionComponent,
    data: { title: 'Accordion Preview', version: '12.2.13', referenceUrl: 'https://material.angular.dev/cdk/accordion/' }
  },
  {
    path: 'tab-panel',
    component: TabPanelComponent,
    data: { title: 'Tab-Panel Preview', version: null , referenceUrl: 'https://material.angular.dev/components/tabs/' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
