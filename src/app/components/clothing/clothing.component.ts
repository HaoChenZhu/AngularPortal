import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ShopProduct } from 'src/app/models/shop.interface';
import { CommonService } from 'src/app/services/common.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

  shopName:string=""
  listProduct:Product[]=[];
  constructor(private _commonService: CommonService, private _shopService:ShopService) {}

  ngOnInit(): void {
    let literals= this._commonService.getLiterals();
    this.getShopProducts(literals.name);
  }

  getShopProducts(name:string){
    this._shopService.getShopProduct(name).subscribe((s:ShopProduct)=>{
      this.listProduct=s.list;
      this.shopName=s.name;
    })
  }
  toggleSidebar() {
    let sidebar = document.getElementById('sidebar') as HTMLElement;
    if (sidebar) {
      console.log("asdsa");
      if (sidebar.style.visibility !== 'visible') {
        sidebar.style.visibility = 'visible';
      } else {
        sidebar.style.visibility = 'hidden';
      }
    }
  }

}
