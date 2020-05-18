import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleEvent:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar(){
    if(this.toggleEvent==false){
      this.toggleEvent=true;
    }
    else{
      this.toggleEvent=false;
    }
  }

}
