import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderModule } from './slider';

@NgModule({
  imports: [
    CommonModule,
    SliderModule
  ],
  declarations: [],
  exports: [
    SliderModule
  ]
})
export class ChaiModule { }
