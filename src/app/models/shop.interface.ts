import { Product } from "./product.interface"

export interface Shop {
    telephone: string,
    name: string,
    location: {
      address: string,
      city: string,
      code: string,
      country: string,
      province: string
    },
    shop_img: string,
  }

  export interface ShopProduct{
    name:string,
    list: Product[]
  }
  