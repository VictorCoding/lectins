import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { ViewRecipe } from '../view-recipe/view-recipe'
import { recipes } from '../../assets/data/foods.store'

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html'
})
export class RecipePage {
  recipes = recipes;

  constructor(public navCtrl: NavController) {

  }

  viewRecipe(recipe) {
    this.navCtrl.push(ViewRecipe, { recipe });
  }
}
