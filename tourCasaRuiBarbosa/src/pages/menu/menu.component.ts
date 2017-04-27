import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {Tour} from "../tour/tour";

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(private nav: NavController) {
  }

  enterTour(mode: string){
    this.nav.push(Tour, {type: mode}, {animate: false});
  }

}
