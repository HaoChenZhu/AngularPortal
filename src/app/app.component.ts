import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal-shop';
  toggleSidebar() {
    let sidebar = document.getElementById('sidebar') as HTMLElement;
    if (sidebar) {
      if (sidebar.style.visibility === 'visible') {
        sidebar.style.visibility = 'hidden';
      }
    }
  }
}
