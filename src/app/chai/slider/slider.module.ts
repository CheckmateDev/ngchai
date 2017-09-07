import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderComponent } from './slider/slider.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SliderComponent,
    SlideComponent
  ],
  exports: [
    SliderComponent,
    SlideComponent
  ]
})
export class SliderModule { }
