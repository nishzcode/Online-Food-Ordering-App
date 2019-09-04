import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'test', 
    loadChildren: './test/test.module#TestPageModule' },
  { 
    path: 'test2', 
    loadChildren: './test2/test2.module#Test2PageModule' },
  { 
    path: 'restaurants', 
    loadChildren: './restaurants/restaurants.module#RestaurantsPageModule' },
  { 
    path: 'menu', 
    loadChildren: './menu/menu.module#MenuPageModule' },
  { 
    path: 'order', 
    loadChildren: './order/order.module#OrderPageModule' },
  { 
    path: 'aboutus', 
    loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
  { 
    path: 'privacypolicy', 
    loadChildren: './privacypolicy/privacypolicy.module#PrivacypolicyPageModule' },
  { 
    path: 'terms', 
    loadChildren: './terms/terms.module#TermsPageModule' },
  { 
    path: 'feedback', 
    loadChildren: './feedback/feedback.module#FeedbackPageModule' },
  { 
    path: 'specificitem', 
    loadChildren: './specificitem/specificitem.module#SpecificitemPageModule' },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule' },
  { path: 'passwordreset', loadChildren: './passwordreset/passwordreset.module#PasswordresetPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'requestadmin', loadChildren: './requestadmin/requestadmin.module#RequestadminPageModule' },
  { path: 'manager', loadChildren: './manager/manager.module#ManagerPageModule' },
  { path: 'addcashier', loadChildren: './addcashier/addcashier.module#AddcashierPageModule' },
  { path: 'viewrequests', loadChildren: './viewrequests/viewrequests.module#ViewrequestsPageModule' },
  { path: 'viewmanagers', loadChildren: './viewmanagers/viewmanagers.module#ViewmanagersPageModule' },
  { path: 'addoffer', loadChildren: './addoffer/addoffer.module#AddofferPageModule' },
  { path: 'additem', loadChildren: './additem/additem.module#AdditemPageModule' },
  { path: 'offers', loadChildren: './offers/offers.module#OffersPageModule' },  { path: 'addmanager', loadChildren: './addmanager/addmanager.module#AddmanagerPageModule' },
  { path: 'viewmanager', loadChildren: './viewmanager/viewmanager.module#ViewmanagerPageModule' },
  { path: 'viewcashier', loadChildren: './viewcashier/viewcashier.module#ViewcashierPageModule' },
  { path: 'test3', loadChildren: './test3/test3.module#Test3PageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
