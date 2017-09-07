import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'chai-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate("2s ease-in-out", style({
          opacity: 1
        }))
      ]),
      transition('* => void', [
        style({
          display: 'none'
        })
      ])
    ])
  ]
})
export class SlideComponent implements OnInit {
  private _active: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit() {
  }

  get active(): Observable<boolean> {
    return this._active.asObservable();
  }

  public setActive(active: boolean): void {
    this._active.next(active);
  }
}
