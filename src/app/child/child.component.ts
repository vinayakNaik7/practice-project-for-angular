import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() item:any = 0;
  ngOnInit(): void {
  }

  @Input() items: { name: string, email: string } = {name:'',email:''}
}
