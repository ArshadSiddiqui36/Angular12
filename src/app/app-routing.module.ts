import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from './components/demo.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { UserComponent } from './components/user/user.component';
import { NoPageComponent } from './components/no-page/no-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';

const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'me', component: AboutMeComponent},
      { path: 'company', component: AboutCompanyComponent}
    ]
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'user/:id',
    component: UserComponent
  },

  {
    path: 'admin', loadChildren:()=> import('./components/admin/admin.module')
    .then(mod=>mod.AdminModule)
  },

  {
    path: 'users', loadChildren:()=> import('./components/user/user.module')
    .then(mod=>mod.UserModule)
  },

    {
      path: '**',
      component: NoPageComponent

    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
