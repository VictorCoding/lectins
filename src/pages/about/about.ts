import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewRecipe } from '../view-recipe/view-recipe';
import { recipes } from '../../assets/data/foods.store';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  recipes = recipes;

  constructor(public navCtrl: NavController) {

  }

  viewRecipe(recipe) {
    this.navCtrl.push(ViewRecipe, { recipe });
  }
}
