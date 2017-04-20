import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {MenuPage} from "../menu/menu.component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private nav: NavController) {
  }

  enterMenu()
  {
    this.nav.push(MenuPage);
  }
}
