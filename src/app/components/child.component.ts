import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `

    <!-- Parent Data To Child -->
    <!-- <div class="spanBox">
      <li>{{item.name}}</li>
      <li>{{item.email}}</li>
      <li>{{item.phone}}</li>
    </div> -->

    <!-- Child Data To Parrent -->
    <input type="text" #box placeholder="Enter some data..."/>
    <button (click)="updateDataEvent.emit(box.value)">Update Data</button>

  `,
  styles: [`

    .spanBox {
      border: 1px solid grey;
      padding: 5px 10px;
      margin: 5px;
      border-radius: 5px;
    }
    li {
      list-style: none;
    }

  `]
})

export class ChildComponent {

  // Parent Data To Child
  @Input() item:{name:string, email:string, phone:string} = {name:'', email:'', phone:''}

  // Child Data To Parrent
  @Output() updateDataEvent = new EventEmitter<string>();

}

