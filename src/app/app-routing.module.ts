import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { ContactUsComponent } from './components/contact-us-area/contact-us/contact-us.component';
import { GiftShopComponent } from './components/gift-shop-area/gift-shop/gift-shop.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { SellersComponent } from './components/sellers-area/sellers/sellers.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { EditProductComponent } from './components/products-area/edit-product/edit-product.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/details/:productId', component: ProductDetailsComponent },
                                                                    //blocks specific routes
  { path: 'products/new', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'products/edit/:productId', component: EditProductComponent },
  { path: 'gift-shop', component: GiftShopComponent },
  // if user go to path route then go to server and gives it
//   { path: 'sellers', loadChildren: () => import()},
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
