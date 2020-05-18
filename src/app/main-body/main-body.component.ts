import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }

  generateBody():void{
    this._router.navigate(['/generate']);    
  }

  viewBody():void{
    this._router.navigate(['/view']);    
  }
}
