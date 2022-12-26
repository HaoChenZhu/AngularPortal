import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _commonService: CommonService) { }
  companyName:string="";
  ngOnInit(): void {
    let literals= this._commonService.getLiterals();
    this.companyName=literals.companyName;
  }

}
