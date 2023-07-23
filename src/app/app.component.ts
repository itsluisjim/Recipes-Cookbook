import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isRecipesOpen = true;
  isListOpen = false;

  switchTabs(tab: string) {
    if(tab == 'recipe'){
      this.isRecipesOpen = true;
      this.isListOpen = false;
    } else {
      this.isRecipesOpen = false;
      this.isListOpen = true;
    }
  }
}
