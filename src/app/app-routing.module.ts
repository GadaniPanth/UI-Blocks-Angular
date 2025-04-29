import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LightBoxUiComponent } from './light-box-ui/light-box-ui.component';
import { title } from 'process';
import { SwiperComponent } from './swiper/swiper.component';
import { FancyBoxComponent } from './fancy-box/fancy-box.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { AtroposComponent } from './atropos/atropos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lightbox',
    pathMatch: 'full'
  },
  {
    path: 'lightbox',
    component: LightBoxUiComponent,
    data: { title: 'lightbox', version: '2.0.0', referenceUrl: 'https://www.npmjs.com/package/ngx-lightbox' }
  },
  {
    path: 'swiper',
    component: SwiperComponent,
    data: { title: 'swiper', version: '6.8.4', referenceUrl: 'https://v8.swiperjs.com/' }
  },
  {
    path: 'atropos',
    component: AtroposComponent,
    data: { title: 'atropos', version: null, referenceUrl: 'https://atroposjs.com/' }
  },
  {
    path: 'fancybox',
    component: FancyBoxComponent,
    data: { title: 'fancybox', version: '5.0.36', referenceUrl: 'https://fancyapps.com/fancybox/' }
  },
  {
    path: 'sw-alert',
    component: SweetAlertComponent,
    data: { title: 'sw-alert', version: '11.17.2', referenceUrl: 'https://sweetalert2.github.io/' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
