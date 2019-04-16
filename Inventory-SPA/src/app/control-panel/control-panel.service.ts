import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlPanelService {
  title = new Subject<string>();

  constructor() { }

}
