import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  collapsed = true;

  @Output() toggleTab = new EventEmitter<string>();


  onToggle(tab: string) {
    this.toggleTab.emit(tab)
  }
}
