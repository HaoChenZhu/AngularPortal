import { Component, OnInit } from "@angular/core";
import { CommonService } from '../../services/common.service';
import { HttpClient } from '@angular/common/http';
import { ShopService } from "src/app/services/shop.service";
import { Shop, ShopProduct } from 'src/app/models/shop.interface';
import { Product } from "src/app/models/product.interface";
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
  shops:Shop[]=[];

  constructor(private _commonService: CommonService, private _shopService:ShopService) {}

  ngOnInit(): void {
    let literals= this._commonService.getLiterals();
    this.getListShops();
    this.homePages = literals.homePages;
    this.titleHome = literals.titleHome;
    this.descriptionHome = literals.descriptionHome;
  }

  getListShops(){
    this._shopService.getShops().subscribe((s:Shop[]) => {
      this.shops = s
   });
  }

  
}
