import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-active-layer',
  templateUrl: './active-layer.component.html',
  styleUrls: ['./active-layer.component.scss']
})
export class ActiveLayerComponent implements OnInit {

  get styles$(): Observable<any> {
    return of(this.getStyle());
  }

  getStyle() {
    return {
      'top': `${this.options.top}px`,
      'left': `${this.options.left}px`,
    };
  }

  options = {
    top: 0,
    left: 4 * 28,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
