import { Component, OnInit } from '@angular/core';
import { ControlPanelService } from './control-panel.service';


@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  title: string;

  constructor(private controlPanelService: ControlPanelService) { }

  ngOnInit() {
    this.controlPanelService.title.subscribe(title => this.title = title);
  }

}
