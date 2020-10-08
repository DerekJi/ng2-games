import { Component, OnInit } from '@angular/core';
import { ActiveLayerService } from '@tetris/screen/active-layer/active-layer.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  moveLeft() { this.activeLayerService.moveLeft(); }
  moveRight() { this.activeLayerService.moveRight(); }
  moveDown() { this.activeLayerService.moveDown(); }

  constructor(
    protected activeLayerService: ActiveLayerService,
  ) { }

  ngOnInit(): void {
  }

}
