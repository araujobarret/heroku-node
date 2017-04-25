import { Component, Input } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-menu-header',
  templateUrl: 'menu-header.html',
  inputs: ['titleBar']
})

export class MenuHeader {

  @Input() titleBar;

  constructor(private menu: MenuController) {
    this.menu.enable(true);
  }

}
