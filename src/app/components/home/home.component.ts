import { Component, OnInit } from "@angular/core";
import { CommonService } from '../../services/common.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  homePages = [
    { title: "", description: "", url: "" },
  ];
  titleHome:string="";
  descriptionHome:string="";

  constructor(private _commonSevice: CommonService) {}

  ngOnInit(): void {
    let literals= this._commonSevice.getLiterals();

    this.homePages = literals.homePages;
    this.titleHome = literals.titleHome;
    this.descriptionHome = literals.descriptionHome;
  }
}
