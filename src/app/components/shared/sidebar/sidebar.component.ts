import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  homePages = [{ title: '', description: '', url: '' }];

  urlHover = '';
  urlActive = '';
  constructor(private _commonService: CommonService, private router: Router) {
    //Detects route change
    this.router.events.subscribe((event: any) => {
      if (event?.url) {
        this.urlActive = '/' + event.url.split('/')[1];
        this.urlHover = '/' + event.url.split('/')[1];

        let menuIcon = document.getElementById('menu-icon') as HTMLElement;
        if (event?.url === '/home') {
          menuIcon.style.visibility = 'hidden';
        } else {
          menuIcon.style.visibility = 'visible';
        }
      }
    });
  }
  ngOnInit(): void {
    let literals = this._commonService.getLiterals();
    this.homePages = literals.homePages;

    setTimeout(() => {
      this.urlHover = '/' + this.router.url.split('/')[1];
      this.urlActive = '/' + this.router.url.split('/')[1];
    });
  }

  closeSidebar(url?: string) {
    let sidebar = document.getElementById('sidebar') as HTMLElement;
    if (sidebar) {
      if (sidebar.style.visibility === 'visible') {
        sidebar.style.visibility = 'hidden';
      }
    }
    url ? (this.urlHover = url) : this.router.url;
    this.urlActive = this.router.url.split('/')[1];
  }

}
