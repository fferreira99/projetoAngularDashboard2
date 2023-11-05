import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent {
  activeTab: string = 'tab1';

  openTab(tabName: string) {
    this.activeTab = tabName;
  }

  isTabActive(tabName: string): boolean {
    return this.activeTab === tabName;
  }
}
