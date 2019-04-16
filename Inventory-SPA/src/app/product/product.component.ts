import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ControlPanelService } from '../control-panel/control-panel.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private controlPanelService: ControlPanelService) { }

  ngOnInit() {
    const component = this.route.routeConfig.component.name;
    if (component === 'ProductComponent') {
      this.controlPanelService.title.next('Products');
    }
  }

}
