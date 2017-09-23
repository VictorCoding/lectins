import { Component } from '@angular/core'
import { HomePage } from '../home/home'
import { NotesPage } from '../notes/notes'
import { RecipePage } from '../recipe/recipe'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = NotesPage
  tab2Root = HomePage
  tab3Root = RecipePage

  constructor() {}
}
