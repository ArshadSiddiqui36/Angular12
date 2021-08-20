import { Component } from '@angular/core';

// for lazy loading component...
// import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

// import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  // template: ` <h1>Hello World</h1> `,
  // styles: [` h1 { color: orange; }`],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';

  // usersService: any;
  // constructor(private userdata: UserdataService) {
  //   console.warn('userdata', userdata.users());
  //   this.usersService = this.userdata.users()
  // }



  // lazy loading component...
  // constructor(private viewContainer:ViewContainerRef,
  //   private cfr:ComponentFactoryResolver){}

  //   async loadAdmin() {
  //     this.viewContainer.clear();
  //     const {AdminlistComponent} = await import('./LazyLoading/adminlist/adminlist.component');
  //     this.viewContainer.createComponent(
  //       this.cfr.resolveComponentFactory(AdminlistComponent)
  //     )
  //   }

  //   async loadUser() {
  //     this.viewContainer.clear();
  //     const {UserlistComponent} = await import('./LazyLoading/userlist/userlist.component');
  //     this.viewContainer.createComponent(
  //       this.cfr.resolveComponentFactory(UserlistComponent)
  //     )
  //   }
}
