import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ShopProduct } from 'src/app/models/shop.interface';
import { CommonService } from 'src/app/services/common.service';
import { ShopService } from 'src/app/services/shop.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

  shopName:string=""
  listProduct:Product[]=[];
  constructor(private _commonService: CommonService, private _shopService:ShopService) {}

  form: NgForm | undefined;

  filters: any[] = [];
  literals:any;
  ngOnInit(): void {
    let literals = this._commonService.getLiterals();
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
  handleForm(form: NgForm) {
    this.form = form;

    this.filters = [];
    for (const value in form.value) {
      if (Object.prototype.hasOwnProperty.call(form.value, value)) {
        const element = form.value[value];
        if (element) {
          this.filters.push({ value, element });
        }
      }
    }
   
  }
  clearFilter(valueF: string) {
    this.filters = this.filters.filter((filter) => {
      return filter.value !== valueF;
    });

    this.filters.forEach((filter) => {
      console.log(this.form?.value);
      console.log(filter);
    });

    const obj = this.filters.reduce((obj, item) => {
      obj[item.value] = item.element;
      return obj;
    }, {});

    
  }
}
