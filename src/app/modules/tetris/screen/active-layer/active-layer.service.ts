import { Injectable } from '@angular/core';
import { DefaultTetrisConfigs } from '@tetris-shared/config';
import { IShapeOptions } from '@tetris-shared/models/shape-options.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveLayerService {

  private readonly defaultOptions: IShapeOptions = {
    colorId: 3,
    iconId: 0,
    typeId: 0,
    direction: 1,
    top: 0,
    left: 3,
    width: 0,
  };

  protected _options: IShapeOptions = Object.assign({}, this.defaultOptions);
  public options$: BehaviorSubject<IShapeOptions> = new BehaviorSubject(this._options);

  public setOptions(options: IShapeOptions) {
    this._options = options;
    this.options$.next(this._options);
  }

  public moveLeft() {
    if (this._options.left > 0) {
      this._options.left -= 1;
      this.setOptions(this._options);
    }
  }

  public moveRight() {
    if (this._options.left + 4 < DefaultTetrisConfigs.matrixCols) {
      this._options.left += 1;
      this.setOptions(this._options);
    }
  }

  public moveDown() {
    this._options.top += 1;
    this.setOptions(this._options);
  }

  constructor() { }

}
