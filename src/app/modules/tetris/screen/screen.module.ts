import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenContainerComponent } from './screen-container/screen-container.component';
import { BaseLayerComponent } from './base-layer/base-layer.component';
import { ActiveLayerComponent } from './active-layer/active-layer.component';
import { TetrisSharedModule } from '@tetris-shared/tetris-shared.module';



@NgModule({
  declarations: [ScreenContainerComponent, BaseLayerComponent, ActiveLayerComponent],
  exports: [ScreenContainerComponent],
  imports: [
    CommonModule,
    TetrisSharedModule,
  ]
})
export class ScreenModule { }
