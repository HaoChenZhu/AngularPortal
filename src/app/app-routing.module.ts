import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { SupermarketComponent } from './components/supermarket/supermarket.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'clothing',component:ClothingComponent},
  {path:'supermarket',component:SupermarketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
