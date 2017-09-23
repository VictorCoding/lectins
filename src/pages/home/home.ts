import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { listOfNoFoods, listOfYesFoods } from '../../assets/data/foods.store'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  noFoods = listOfNoFoods
  yesFoods = listOfYesFoods
  foodType = 'yes'
  q = ''

  constructor() {}

  filterList({ target: { value } }) {
    this.q = value
  }
}
