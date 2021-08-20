import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserdataService } from '.././services/userdata.service';

import { UsersApiService } from '../services/users-api.service';

 // Model & Interface
//  interface modelDataType {
//   name: string,
//   id: number,
//   indian: boolean,
//   address: any
//  }



@Component({
  selector: 'app-test',
  template: `
    <div>

      <div class="header-nav">
        <mat-toolbar class="bg-color">
          <span><a routerLink="/">MyApp</a></span>

          <nav>
            <a routerLink="/"><button mat-button>Home</button></a>
            <a routerLink="about"><button mat-button>About</button></a>
            <a href="https://skillsrouting.blogspot.com" target="_blank"><button mat-button>Blog</button></a>
            <a routerLink="contact"><button mat-button>Contact</button></a>
          </nav>
        </mat-toolbar>
      </div>
      <router-outlet></router-outlet>




      <div class="bodyContent">
        <h3>{{ username === "" ? 'Click below to see your name here...' : username }}</h3>
        <button (click)="getName('Arsad')">Click</button>

        <br/><br/><hr/><br/>
        <h1>{{title}}</h1>
        <button (click)="getData('Hello')">Call Function</button>
        <button (click)="getData('')">Clear Result</button>
        <h2 class="result">{{data}}</h2>
        <!-- <br/><br/> -->

        <input type="text" #box (keyup)="getData(box.value)" placeholder="Event KeyUp"/>
        <br/><br/>

        <input type="text" #box1 (keydown)="getData(box1.value)" placeholder="Event KeyDown"/>
        <br/><br/>

        <input type="text" #box2 (blur)="getData(box2.value)" placeholder="Event Blur"/>
        <br/><br/>

        <input type="text" #box3 (input)="getData(box3.value)" placeholder="Event Input"/>
        <br/><br/>

        <span class="event_btn" (mouseover)="getData('Mouse Over')">Hover Event</span>
        <span class="event_btn" (mouseleave)="getData('Mouse Leave')">Hover Leave</span>
        <br/><br/>

        <hr><br/>
        <h1>Get Input Box Value</h1>
        <input type="text" #box4 id="username" placeholder="Enter Name" name="username"/>
        <button (click)="getValue(box4.value)">Input Value</button>
        <button (click)="getValue(box4.name)">Name Value</button>
        <button (click)="getValue(box4.id)">ID Value</button>
        <button (click)="getValue(box4.placeholder)">Placeholder Value</button>
        <p>Input Box Value : {{displayValue}}</p>

        <hr><br/>
        <h1>Counter</h1>
        <span class="spanBox">{{count}}</span>
        <button class="spanBox" (click)="counter('inc')">++</button>
        <button class="spanBox" (click)="counter('dec')">--</button>

        <br/><br/><hr><br/>
        <h1>Interpolation & Property Binding</h1>
        <p>Boolean value does not work inside <strong>Interpolation</strong>, Because it takes value as a string</p>
        <!-- Interpolation -->
        <input type="text" name="username" value={{disable}} disabled={{disable}}/>
        <!-- Property Binding -->
        <input type="text" name="username" value={{disable}} [disabled]=disable />
        <button (click)="enableBox()">Enable</button>
        <button (click)="disableBox()">Disable</button>

        <br/><br/><hr><br/>
        <h1>If, If Else & Else If Condition</h1>

        <span *ngIf="showVal" class="spanBox">If Condition</span>
        <button (click)="show('true')">Hide</button>
        <button (click)="show('false')">Show</button>
        <br><br>

        <!-- <span *ngIf="ifBlock else elseBlock" class="spanBox">If Condition</span>
        <ng-template #elseBlock>
          <span class="spanBox">Else Condition</span>
        </ng-template>
        <button (click)="showBlock('true')">Else</button>
        <button (click)="showBlock('false')">If</button>
        <br><br> -->

        <a *ngIf="ifElseBlock; then ifBlock else elseBlock" class="spanBox"></a>
        <ng-template #ifBlock>
          <span class="spanBox">If Block Condition</span>
        </ng-template>
        <ng-template #elseBlock>
          <span class="spanBox">Else Block Condition</span>
        </ng-template>
        <button (click)="ifElseShowBlock('true')">Else</button>
        <button (click)="ifElseShowBlock('false')">If</button>
        <br><br>

        <!-- <a *ngIf="ifElseBlock=='yes'; then ifBlock else elseBlock" class="spanBox"></a>
        <ng-template #ifBlock>
          <span class="spanBox">If Block Condition</span>
        </ng-template>
        <ng-template #elseBlock>
          <span class="spanBox">Else Block Condition</span>
        </ng-template>
        <button (click)="ifElseShowBlock('true')">Else</button>
        <button (click)="ifElseShowBlock('false')">If</button>
        <br><br> -->


        <ng-template [ngIf]="color==='red'">
          <span style="color: red;" class="spanBox">Red Color</span>
        </ng-template>
        <ng-template [ngIf]="color==='green'">
          <span style="color: green;" class="spanBox">Green Color</span>
        </ng-template>
        <ng-template [ngIf]="color==='blue'">
          <span style="color: blue;" class="spanBox">Blue Color</span>
        </ng-template>
        <button (click)="changeColor('green')">Green</button>
        <button (click)="changeColor('blue')">Blue</button>
        <button (click)="changeColor('red')">Red</button>
        <br><br>


        <h1>Switch Case</h1>
        <div [ngSwitch]="colors">
          <span *ngSwitchCase="'red'" style="color: red;" class="spanBox">Red Color</span>
          <span *ngSwitchCase="'green'" style="color: green;" class="spanBox">Green Color</span>
          <span *ngSwitchCase="'blue'" style="color: blue;" class="spanBox">Blue Color</span>
          <span *ngSwitchCase="'orange'" style="color: orange;" class="spanBox">Orange Color</span>
          <span *ngSwitchCase="'yellow'" style="color: yellow;" class="spanBox">Yellow Color</span>
          <span *ngSwitchDefault class="spanBox">Black Color (Default)</span>

          <select (change)="selectOption($event)">
            <option value="black">Black Color (Default)</option>
            <option value="red">Red Color</option>
            <option value="green">Green Color</option>
            <option value="blue">Blue Color</option>
            <option value="orange">Orange Color</option>
            <option value="yellow">Yellow Color</option>
          </select>
        </div>
        <br/><br/><hr><br/>


        <h1>For Loop</h1>
        <p *ngFor="let item of users"> Name : <strong>{{item}}</strong> </p><br>
        <p *ngFor="let item of userDetails">
          Name : <strong>{{item.name}}</strong> |
          Email : <strong>{{item.email}}</strong> |
          Phone : <strong>{{item.phone}}</strong>
        </p>

        <br/><br/>
        <h1>Nested For Loop</h1>
        <ul *ngFor="let user of usersDetails">
          <li>Name : <strong>{{user.name}}</strong></li>
          <li>Email : <strong>{{user.email}}</strong></li>
          <li>Phone : <strong>{{user.phone}}</strong></li>
          <li>Social Accounts : </li>
          <ul *ngFor="let account of user.socialAccounts">
            <li><strong>{{account}}</strong></li>
          </ul><br>
        </ul>
        <br/><br/><hr><br/>


        <h1>Style Binding</h1>
        <!-- <span [style.color]="'green'">Style Binding Used Here</span> -->
        <p [style.color]="styleColor" [style.backgroundColor]="styleBgColor" class="spanBox">Style Binding Used Here</p>
        <button (click)="updateColor('dark')">Dark Theme</button>
        <button (click)="updateColor('light')">Light Theme</button>
        <br/><br/><hr><br/>

        <!-- Basic Form -->
        <h1>Basic Form</h1>
        <form #basicForm="ngForm" (ngSubmit)="getFormData(basicForm.value)">
          <input type="text" ngModel name="username" placeholder="Enter Name" /> <br>
          <input type="email" ngModel name="email" placeholder="Enter Email" /> <br>
          <input type="password" ngModel name="password" placeholder="Enter Password" /> <br>
          <button>Register</button>
        </form>
        <br>
        <div>
          <p>Name : <strong>{{userData.username}}</strong></p>
          <p>Email : <strong>{{userData.email}}</strong></p>
          <p>Password : <strong>{{userData.password}}</strong></p>
        </div>
        <br/><br/><hr><br/>




        <!-- Basic Form -->
        <h1>Toggle Element</h1>
        <button (click)="toggle()">{{state}}</button><br/><br/>
        <div *ngIf="display" style="border: 2px solid rgba(0,0,0,0.4); padding: 10px 5px 0 10px; border-radius: 5px;">
          <p class="spanBox"> Toggle Content </p>
          <p class="spanBox"> Toggle Content </p>
          <p class="spanBox"> Toggle Content </p>
          <p class="spanBox"> Toggle Content </p>
          <p class="spanBox"> Toggle Content </p>
        </div>
        <br/><br/><hr><br/>



        <!-- Angular Material UI -->
        <h1>Angular Material UI - Slider</h1>
        <mat-slider aria-label="unit(s)"></mat-slider><br/>
        <mat-slider min="1" max="5" step="0.5" value="1.5"></mat-slider><br/>
        <mat-slider vertical></mat-slider><br/>
        <mat-slider invert></mat-slider><br/>
        <mat-slider thumbLabel tickInterval="1"></mat-slider><br/>
        <mat-slider step="4" tickInterval="3"></mat-slider><br/>
        <mat-slider tickInterval="auto"></mat-slider><br/>
        <br/><br/><hr><br/>


        <!-- Todo List -->
        <h1>Todo List</h1>
        <input type="text" placeholder="Enter New Task" #task/>
        <button (click)="addTask(task.value)">Add Task</button><br/><br/>
        <ul *ngFor="let item of list">
          <li class="spanBox" style="display: flex; justify-content: space-between; align-items: center;"> {{item.name}} <button (click)="removeTask(item.id)" style="color: red;">x</button> </li>
        </ul>
        <br/><br/><hr><br/>


        <!-- Child <==> Component (Data) -->
        <!-- Parent Data To Child -->
        <h1>Child <==> Component Data</h1>
        <!-- <ul *ngFor="let user of userDetails">
          <app-child [item]="user"></app-child>
        </ul> -->

        <br><br>
        <!-- Child Data To Parrent -->
        <app-child (updateDataEvent)="updateData($event)"></app-child>
        <p class="spanBox">Data : {{childData}}</p>
        <br/><br/><hr><br/>


        <!-- Tow-Way Binding -->
        <h1>Tow-Way Binding</h1>
        <input type="text" [(ngModel)]="twoWayBinding" placeholder="Enter something..."/>
        <input type="text" [(ngModel)]="twoWayBinding" placeholder="Enter something..."/>
        <p class="spanBox">Display & Update : <strong>{{twoWayBinding}}</strong></p>
        <br/><br/><hr><br/>


        <!-- Template Reference -->
        <h1>Template Reference Variable</h1>
        <input type="" name="username" placeholder="Enter Username" #inputBox/>
        <!-- <button (click)="getVal(inputBox.value)">Click</button> -->
        <!-- <button (click)="getVal(inputBox.name)">Click</button> -->
        <button (click)="getVal(inputBox)">Click</button>
        <p class="spanBox">Value : <strong>{{inputBox.value}}</strong></p>
        <br/><br/><hr><br/>


        <!-- Pipes -->
        <h1>Pipes</h1>
        <p class="spanBox">{{'arshad siddiqui' | titlecase }}</p>
        <p class="spanBox">{{'Arshad' | uppercase }}</p>
        <p class="spanBox">{{'Arshad' | lowercase }}</p>
        <p class="spanBox">{{ today }}</p>
        <p class="spanBox">{{ today | date }}</p>
        <p class="spanBox">{{ today | date: 'fullDate' }}</p>

        <!-- Advance Pipes -->
        <p class="spanBox">{{ 'Angular Pipes' | slice: 3 }}</p>
        <p class="spanBox">{{ 'Angular Pipes' | slice: 3:6 }}</p>
        <p class="spanBox">{{ 'Angular Pipes' | slice: 3:6 | uppercase }}</p>
        <p class="spanBox">{{ pipesUser | json }}</p>
        <p class="spanBox">{{ pipesUser | json | uppercase }}</p>
        <p class="spanBox">{{ 2000.3000 | number: '2.2-3' }}</p>
        <p class="spanBox">{{ 2.3 | number: '3.3-5' }}</p>
        <p class="spanBox">{{ 20 | currency: 'INR' }}</p>
        <p class="spanBox">{{ 20 | currency: 'USD' }}</p>
        <p class="spanBox">{{ 20 | currency: 'GBP' }}</p>

        <!-- Custom Pipes -->
        <p class="spanBox">{{ 20 | usdInr }}</p>
        <p class="spanBox">{{ 20 | usdInr: 72 }}</p>
        <br/><br/><hr><br/>


        <!-- Advance Forms -->
        <app-form></app-form>
        <br/><br/><hr><br/>


        <!-- Directive -->
        <h1>Directive</h1>
        <p appRedElement class="spanBox">Directive Example</p>
        <br/><br/><hr><br/>


        <!-- Dynamic & Child Routing -->
        <h1>Dynamic & Child Routing</h1>
        <a routerLink="about">About</a><br />
        <a routerLink="contact">Contact</a><br />
        <a routerLink="user/10">Arshad</a><br />
        <a routerLink="user/20">Arif</a><br />
        <a routerLink="user/30">Atif</a><br />
        <router-outlet></router-outlet>
        <br/><br/><hr><br/>




         <!-- Services -->
        <h1>Service</h1>
          <ul>
            <li *ngFor="let users of usersService">
              {{users.name}} : {{users.age}} <br/>
              {{users.email}}
            </li>
          </ul>
          <!-- Commented... -->
        <br/><br/><hr><br/>



        <!-- API & HTTP -->
        <h1>API & HTTP Client Service Module</h1>
        <p class="spanBox">
          {{usersApiData.continent}}
        </p>
        <p class="spanBox">
          {{usersApiData.country}}
        </p>
        <p class="spanBox">
          {{usersApiData.country}}
        </p>
        <p class="spanBox">
          Country Flag : <br/>
          <img src={{usersApiData.country_flag}} alt="country_flag" width="100%"/>
        </p>
        <br/><br/><hr><br/>


        <!-- Model & Interface -->
        <!-- <h1>Model & Interface</h1>
        <br/><br/><hr><br/> -->


        <!-- Lazy Loading -->
        <h1>Lazy Loading</h1>
        <h2>Admin Links</h2>
        <ul>
          <li>
            <a routerLink="admin/login">Login</a>
          </li>
          <li>
            <a routerLink="admin/list">List</a>
          </li>
        </ul>

        <h2>User Links</h2>
        <ul>
          <li>
            <a routerLink="users/login">Login</a>
          </li>
          <li>
            <a routerLink="users/list">List</a>
          </li>
        </ul>
        <router-outlet></router-outlet>
        <br/><br/><hr><br/>








        <!-- Next Topic -->
        <h1>Next Topic</h1>
        <br/><br/><hr><br/>










        <br/><br/><hr><br/>




      </div>


    </div>

  `,
// .........................................................
  styles: [`
    .header-nav {
      position: relative;
      box-shadow: 10px 0 15px 2px rgba(0,0,0,0.4);
    }
    .header-nav .bg-color {
      background: #274554;
      /* background: #1d3658; */
    }
    .header-nav a {
      text-decoration: none;
      /* color: #20272F; */
      color: #e0e0e0;
      margin-left: 20px;
    }

    .header-nav nav {
      position: absolute;
      top: auto;
      right: 0;
      margin-right: 20px;
    }

    .header-nav nav a {
      text-decoration: none;
      /* color: #20272F; */
      color: #e0e0e0;
    }

    .bodyContent {
      padding: 5%;
    }

    button, input {
      padding: 5px 10px;
    }

    .result {
      margin-top: 5px;
      padding: 20px;
      border: 2px solid grey;
      border-radius: 5px;
    }

    .event_btn, select {
      border: 1px solid grey;
      padding: 5px;
      margin-right: 5px;
    }

    .spanBox {
      border: 1px solid grey;
      padding: 5px 10px;
      margin-right: 5px;
      border-radius: 5px;
    }


    mat-slider {
      width: 300px;
    }



  `]
})




// .........................................................
export class TestComponent {

  title = "MyTitle"
  username = "";

  // => Function
  getName(name:any) {
    this.username = "Arshad Siddiqui";
    alert(name);
  }

  // => Function
  data="";
  getData(val:string){
    this.data = val;
    console.log(val);
  }

  // => Event function
  displayValue:string = "";
  getValue(val:string) {
    this.displayValue = val;
    console.warn(val);
  }

  // => Counter using Increment & Decrement
  count = 0;
  counter(type:string) {
    type==='inc' ? this.count++ : this.count--;
  }

  // => Interpolation & Property Binding
  disable:boolean = true;
  enableBox() {
    this.disable = false;
  }
  disableBox() {
    this.disable = true;
  }

    // => IF
  showVal:boolean = true;
  show(type:string) {
    type==='true' ? this.showVal = false : this.showVal = true;
  }

  // => IF-Else
  // ifBlock:boolean = true;
  // showBlock(type:string) {
  //   type==='true' ? this.ifBlock = false : this.ifBlock = true;
  // }

  // => IF-Else
  ifElseBlock:boolean = true;
  ifElseShowBlock(type:string) {
    type==='true' ? this.ifElseBlock = false : this.ifElseBlock = true;
  }

  // => IF-Else
  // ifElseBlock:string = 'yes';
  // ifElseShowBlock(type:string) {
  //   type==='true' ? this.ifElseBlock = 'no' : this.ifElseBlock = 'yes';
  // }

  // => Else-If
  color:string = "red";
  changeColor(type:string) {
    if(type==='green') {
      this.color = "green";
    }else if(type==='blue') {
      this.color = "blue";
    }else {
      this.color = "red";
    }
  }

  // => Switch Case
  colors:string = "";
  selectOption(event:any) {
    this.colors = event.target.value;
  }


    // => For Loop
    // Array...
    users = [
      'Anil', 'Bhaskar', 'Arsad', 'Arvind', 'Arif'
    ];

    // Object...
    userDetails = [
      {
        name: 'Anil', email: 'anil@gmail.com', phone: '9876543210'
      },
      {
        name: 'Bhaskar', email: 'bhaskar@gmail.com', phone: '9876543210'
      },
      {
        name: 'Arsad', email: 'arsad@gmail.com', phone: '9876543210'
      },
      {
        name: 'Arif', email: 'arif@gmail.com', phone: '9876543210'
      },
    ];

    // Nested Array | Multidimentional Array
    usersDetails = [
         {
        name: 'Anil', email: 'anil@gmail.com', phone: '9876543210',
        socialAccounts: ['Facebook', 'Instagram', 'LinkedIn']
      },
      {
        name: 'Bhaskar', email: 'bhaskar@gmail.com', phone: '9876543210',
        socialAccounts: ['Facebook', 'Instagram', 'LinkedIn']
      },
      {
        name: 'Arsad', email: 'arsad@gmail.com', phone: '9876543210',
        socialAccounts: ['Facebook', 'Instagram', 'LinkedIn']
      },
      {
        name: 'Arif', email: 'arif@gmail.com', phone: '9876543210',
        socialAccounts: ['Facebook', 'Instagram', 'LinkedIn']
      },
    ];





    // Style Binding
    styleColor = "#1f1f1f";
    styleBgColor = "#f0f0f0";
    updateColor(type:string) {
      if (type === 'dark') {
        this.styleColor = "#f0f0f0";
        this.styleBgColor = "#1f1f1f";
      } else {
        this.styleColor = "#1f1f1f";
        this.styleBgColor = "#f0f0f0";
      }
    }



    // Basic Form
    userData:any = {};
    getFormData(data:NgForm) {
      console.log(data);
      this.userData = data;
    }


    // Toggle Element
    state = "Hide"
    display = true;
    toggle() {
      this.display = !this.display;

      if(this.state === "Hide") {
        this.state = "Show";
      } else {
        this.state = "Hide";
      }
    }


    // Todo List
    list:any[] = [];
    addTask(item:string) {
      this.list.push({id:this.list.length, name:item});
      console.log(this.list);
    }
    removeTask(id:number) {
      this.list = this.list.filter(item=>item.id!=id);
    }

    // Child <==> Parent (Data)
    // Data Called from child
    childData = "";
    updateData(item:string) {
      console.warn(item);
      this.childData = item;
    }


    // Two-Way Binding
    twoWayBinding = "";


    // Template Reference Variable
    getVal(item:HTMLInputElement) {
      console.warn(item);
    }


    // Pipes
    today = Date();

    pipesUser = {
      name: 'Arshad',
      age: 24
    }


    // Service
    // usersService: any;
    // constructor(private userdata: UserdataService) {
    //   console.warn('userdata', userdata.users());
    //   this.usersService = this.userdata.users()
    // }


    // API
    // usersApiData:any;
    // constructor(private usersData: UsersApiService) {
    //   usersData.usersApi().subscribe((data) => {
    //     this.usersApiData = data;
    //     // console.warn(this.usersApiData);
    //   });
    // }



    // Service & API inside single Constructor, Because we can not use multiple constructors
    usersService: any;
    usersApiData:any;
    constructor(private usersData: UsersApiService, private userdata: UserdataService) {
      usersData.usersApi().subscribe((data) => {
        this.usersApiData = data;
        // console.warn(this.usersApiData);
      });

      this.usersService = this.userdata.users()
    }



  // Model & Interface
    // getModelData() {
    //   const modelData:modelDataType = {
    //     name: 'Arshad Siddiqui',
    //     id: 100,
    //     indian: true,
    //     address: "Shiroli, Kolhapur"
    //   }
    //   return modelData;
    // }









}


// Material Slider
export class SliderOverviewExample {}
