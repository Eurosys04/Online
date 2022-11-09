import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NewsComponent } from './components/staticComponents/news/news.component';
import { ProductsComponent } from './components/staticComponents/products/products.component';
import { ContactComponent } from './components/staticComponents/contact/contact.component';
import { PriceComponent } from './components/staticComponents/price/price.component';
import { TeamComponent } from './components/staticComponents/team/team.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'price', component: PriceComponent },
  { path: 'team', component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
