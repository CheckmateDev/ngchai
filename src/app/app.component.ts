import { Component, ViewChild } from '@angular/core';

import { SliderComponent } from './chai/slider';

@Component({
  selector: 'chai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(SliderComponent) slider: SliderComponent;
  public title: string = 'ngchai';

  public slideBack(): void {
    this.slider.back()
  }

  public slideNext(): void {
    this.slider.next()
  }
}
