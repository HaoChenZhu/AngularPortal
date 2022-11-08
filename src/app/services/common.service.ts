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
    let headers:string[]=[];

    literals.homePages.forEach((page:any) => {
      if(page.url === this.router.url){
       
        title = page.title;
        desc = page.description;
        headers = page.headers;
      }
    });
    return {title,desc,headers,...literals}
    }
}
