import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderModule } from './slider';
import { SidenavModule } from './sidenav';

@NgModule({
  imports: [
    CommonModule,
    SliderModule,
    SidenavModule
  ],
  declarations: [],
  exports: [
    SliderModule,
    SidenavModule
  ]
})
export class ChaiModule { }
