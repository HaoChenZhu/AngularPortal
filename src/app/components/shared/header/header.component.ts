import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  homePages = [{ title: '', description: '',name:'',url: '' }];
  titleHome: string='';
  literals: any;
  constructor(private _commonService: CommonService,private router: Router) { 

  this.router.events.subscribe((event: any) => {
    if (event?.url) {
      this.literals= this._commonService.getLiterals();
      let button1 = document.getElementById('button1') as HTMLElement;
    let button2 = document.getElementById('button2') as HTMLElement;
    let button3 = document.getElementById('button3') as HTMLElement;
    
    if (event?.url === '/home') {
      button1.style.visibility = 'hidden';
      button2.style.visibility = 'hidden';
      button3.style.visibility = 'hidden';
    } else {
      button1.style.visibility = 'visible';
      button2.style.visibility = 'visible';
      button3.style.visibility = 'visible';
    }
    }
    
  });
  }


  ngOnInit(): void {
    this.literals= this._commonService.getLiterals();
  }
  toggleSidebar() {
    let sidebar = document.getElementById('sidebar') as HTMLElement;
    if (sidebar) {
      if (sidebar.style.visibility !== 'visible') {
        sidebar.style.visibility = 'visible';
      } else {
        sidebar.style.visibility = 'hidden';
      }
    }
  }

}
