import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { SearchUserPipe } from './search-user.pipe';
import { BoolDisplayPipe } from './bool-display.pipe';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { SearchVendorPipe } from './search-vendor.pipe';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    SearchUserPipe,
    BoolDisplayPipe,
    UserLoginComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    SearchVendorPipe,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
