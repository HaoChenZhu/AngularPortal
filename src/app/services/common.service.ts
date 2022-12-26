import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import literals from '../../config/literals.json'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private router:Router) { }

  getLiterals():any{
    let title:string ="";
    let desc:string= "";
    let name:string='';

    literals.homePages.forEach((page:any) => {
      if(page.url === this.router.url){
        console.log("DEsde service"+this.router.url)
        title = page.title;
        desc = page.description;
        name = page.name
      }
    });
    return {title,desc,name,...literals}
    }
}
