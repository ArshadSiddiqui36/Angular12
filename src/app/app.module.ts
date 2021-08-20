import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { BodyComponent } from './MyComponents/body/body.component';
import { DemoComponent } from './components/demo.component';
import { TestComponent } from './components/test.component';
import { ChildComponent } from './components/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { UsdInrPipe } from './components/pipes/usd-inr.pipe';
import { FormComponent } from './components/form/form.component';
import { RedElementDirective } from './components/red-element.directive';
import { UserComponent } from './components/user/user.component';
import { NoPageComponent } from './components/no-page/no-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { UserlistComponent } from './LazyLoading/userlist/userlist.component';
import { AdminlistComponent } from './LazyLoading/adminlist/adminlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    BodyComponent,
    DemoComponent,
    TestComponent,
    ChildComponent,
    UsdInrPipe,
    FormComponent,
    RedElementDirective,
    UserComponent,
    NoPageComponent,
    AboutMeComponent,
    AboutCompanyComponent,
    UserlistComponent,
    AdminlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
