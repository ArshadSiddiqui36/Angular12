// import { Component, Input } from '@angular/core';
// for lazy loading component...
import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-demo',
  template: `

    <div>
      <!-- <img src="https://picsum.photos/536/354"/><br/> -->

      <app-test></app-test>

      <!-- lazy loading component... -->
      <h1>Lazy Loading Component</h1>
      <button (click)="loadAdmin()">Load Admin List</button>
      <button (click)="loadUser()">Load User List</button>

    </div>

  `,
  styles: [``]
})

export class DemoComponent {

  // lazy loading component...
  constructor(private viewContainer:ViewContainerRef,
    private cfr:ComponentFactoryResolver){}

    async loadAdmin() {
      this.viewContainer.clear();
      const {AdminlistComponent} = await import('../LazyLoading/adminlist/adminlist.component');
      this.viewContainer.createComponent(
        this.cfr.resolveComponentFactory(AdminlistComponent)
      )
    }

    async loadUser() {
      this.viewContainer.clear();
      const {UserlistComponent} = await import('../LazyLoading/userlist/userlist.component');
      this.viewContainer.createComponent(
        this.cfr.resolveComponentFactory(UserlistComponent)
      )
    }

}

