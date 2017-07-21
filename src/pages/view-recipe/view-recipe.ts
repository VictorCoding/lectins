import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-view-recipe',
  templateUrl: 'view-recipe.html',
})
export class ViewRecipe {
  recipe = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.recipe = this.navParams.data.recipe;
  }

}
