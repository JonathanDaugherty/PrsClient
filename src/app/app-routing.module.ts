import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserCreateComponent} from './user/user-create/user-create.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import { AboutComponent } from './about/about.component';
import {HomeComponent} from './home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import {VendorListComponent} from './vendor/vendor-list/vendor-list.component';
import {VendorCreateComponent} from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {RequestListComponent} from './request/request-list/request-list.component';
import {RequestDetailComponent} from './request/request-detail/request-detail.component';
import {RequestCreateComponent} from './request/request-create/request-create.component';
import {RequestEditComponent} from './request/request-edit/request-edit.component';
import {RequestLinesComponent} from './request/request-lines/request-lines.component';
import {RequestlinesEditComponent} from './requestlines/requestlines-edit/requestlines-edit.component';
import {RequestlinesCreateComponent} from './requestlines/requestlines-create/requestlines-create.component';
import {ReviewComponent} from './request/review/review.component';
import { FinalreviewComponent } from './request/finalreview/finalreview.component';



const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  
  {path: 'users/create', component: UserCreateComponent},
  {path: 'users/list', component: UserListComponent},
  {path: 'users/detail/:id', component: UserDetailComponent},
  {path: 'users/edit/:id', component: UserEditComponent},
  {path: 'login', component: UserLoginComponent},

  {path: 'vendors/list', component: VendorListComponent},
  {path: 'vendors/create', component: VendorCreateComponent},
  {path: 'vendors/detail/:id', component: VendorDetailComponent},
  {path: 'vendors/edit/:id', component: VendorEditComponent},

  {path: 'products/list', component:ProductListComponent},
  {path: 'products/detail/:id', component:ProductDetailComponent},
  {path: 'products/create', component:ProductCreateComponent},
  {path: 'products/edit/:id', component:ProductEditComponent},

  {path: 'requests/list', component:RequestListComponent},
  {path: 'requests/detail/:id', component:RequestDetailComponent},
  {path: 'requests/create', component:RequestCreateComponent},
  {path: 'requests/edit/:id', component:RequestEditComponent},
  {path: 'requests/requestlines/:id', component:RequestLinesComponent},
  {path: 'requests/review/:id', component:ReviewComponent},
  {path: 'requests/finalreview/:id', component:FinalreviewComponent},

  {path: 'requestlines/edit/:id', component:RequestlinesEditComponent},
  {path: 'requestlines/create/:id', component:RequestlinesCreateComponent},


  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
