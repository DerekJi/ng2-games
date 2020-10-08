import { Component, OnInit } from '@angular/core';
import { IShapeOptions } from '@tetris-shared/models/shape-options.interface';
import { Observable, of } from 'rxjs';

import { ActiveLayerService } from './active-layer.service';

@Component({
  selector: 'app-active-layer',
  templateUrl: './active-layer.component.html',
  styleUrls: ['./active-layer.component.scss']
})
export class ActiveLayerComponent implements OnInit {

  options$: Observable<IShapeOptions> = this.service.options$;

  constructor(
    protected service: ActiveLayerService,
  ) { }

  ngOnInit(): void {
  }

}
