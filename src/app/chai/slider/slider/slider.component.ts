import { Component, Input, Output, AfterContentInit, OnChanges, OnDestroy, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';

import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'chai-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterContentInit, OnChanges, OnDestroy {
  private _active: number;
  @Output() change: EventEmitter<number> = new EventEmitter();
  @Input()
  set duration(duration: number) {
    this._duration = duration;
  }
  private _duration: number;
  private _interval: Observable<number>;
  private _intervalSubscription: Subscription;
  @ContentChildren(SlideComponent) slides: QueryList<SlideComponent>;

  constructor() { }

  ngAfterContentInit() {
    if (this.slides.length > 0) {
      this._active = 0;
      this._activateSlide(this._active);
    }

    this._intervalSet();
  }

  ngOnChanges() {
    this._intervalClear();
    this._intervalSet();
  }

  ngOnDestroy() {
    this._intervalClear();
  }

  get active(): number {
    return this._active;
  }

  get count(): number {
    return this.slides.length;
  }

  private _activateSlide(index: number): void {
    this.slides.toArray()[index].setActive(true);
    this.change.emit(index);
  }

  public back(): void {
    this._deactivate(this._active);
    (this._active > 0) ? this._active-- : this._active = (this.slides.length - 1);
    this._activateSlide(this._active);
    this._intervalClear();
    this._intervalSet();
  }

  private _deactivate(index: number): void {
    this.slides.toArray()[index].setActive(false);
  }

  public goTo(slide: number): void {
    if (slide >= 0 && slide < this.slides.length) {
      this._deactivate(this._active);
      this._active = slide;
      this._activateSlide(this._active);
      this._intervalClear();
      this._intervalSet();
    }
  }

  private _intervalClear(): void {
    if (this._intervalSubscription) {
      this._intervalSubscription.unsubscribe();
    }
  }

  private _intervalSet(): void {
    if (this._duration > 0) {
      this._interval = Observable.timer(this._duration);
      this._intervalSubscription = this._interval.subscribe((time: number) => {
        this.next();
      });
    }
  }

  public next(): void {
    this._deactivate(this._active);
    (this._active < (this.slides.length - 1)) ? this._active++ : this._active = 0;
    this._activateSlide(this._active);
    this._intervalClear();
    this._intervalSet();
  }
}
