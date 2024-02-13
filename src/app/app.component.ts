import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  data = "By!";
  dinamicValue: any;

  getName(name: any) {
    alert(name);
  }

  yourname: string = ''

  getValue(name: string) {
    this.yourname = name;
  }

  count: number = 0;

  counter(text: string) {
    if (text == 'Add') {
      this.count++;
    }

    if (text == 'Minus') {
      this.count--;
    }
  }

  inputname = 'Peter';
  value: boolean = false;

  onClick() {
    alert('Hello!');
  }

  show: boolean = false;

  color: string = 'Yellow'

  users = ['Vinayak', 'Swapnil', 'shital', 'Omkar', 'Hemant', 'Rushikesh', 'Rakesh', 'Pratik'];

  usersDetails = [{name:'Vinayak',email:'vinayak@gmail.com',phone:'1234'},
                  {name:'Swapnil',email:'Swapnil@gmail.com',phone:'4321'},
                  {name:'Hemant', email:'Hemant@gmail.com',phone:'2468' }]

  usersInfos = [{ name: 'Vinayak', email: 'vinayak@gmail.com', phone: '1234', socialAcounts: ['Insta','WhatsApp','Facebook']},
    { name: 'Swapnil', email: 'Swapnil@gmail.com', phone: '4321', socialAcounts: ['Insta', 'WhatsApp', 'Facebook'] },
    { name: 'Hemant', email: 'Hemant@gmail.com', phone: '2468', socialAcounts: ['Insta', 'WhatsApp', 'Facebook'] }]

  dynamicColor = "red";

  changeColor() {
    this.dynamicColor = "Green";
  }

  userData: any = {};
  getData(data: NgForm) {
    console.warn(data)
    this.userData = data;
  }

  display:boolean = true;

  toggle() {
    this.display = !this.display;
  }

  data1: any = 10;

  updateChild() {
    this.data1 = Math.floor(Math.random() * 100 + 1)

    if (this.data1 == 100) {
    alert('Bingo! you got Number:'+this.data1)}
  }

  userDetails = [
    { name: 'Vinayak', email: 'vinayak@gmail.com' },
    { name: 'shital', email: 'shital@gmail.com' },
    { name: 'Rushikesh', email: 'rushikesh@gmail.com' },
    { name: 'Hemant', email: 'hemant@gmail.com' }
  ]

  childData: string = '';
  updateData(item: string) {
    this.childData = item;
  }

  twoWayBindingValue: any;
  pipeItem: number = 1;


  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)])
  })

  loginUser() {
    console.log(this.loginForm.value)
  }

  get user() {
    return this.loginForm.get('user')
  }

  get password() {
    return this.loginForm.get('password')
  }


  onClickDV() {
    debugger
    alert(this.dinamicValue);
    this.dinamicValue =Math.floor(Math.random() * 100);;
  }
}

