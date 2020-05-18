import { Component, OnInit } from '@angular/core';
import { ReceiptServiceService } from '../receipt-service.service';
import { MatSnackBar } from '@angular/material';

export interface Receipt {
  id: any;
  name: any;
  address: any;
  payment_type: any;
  amount: any;
  date: any;
  receiver: any;
}

@Component({
  selector: 'app-recipt-body',
  templateUrl: './recipt-body.component.html',
  styleUrls: ['./recipt-body.component.css']
})
export class ReciptBodyComponent implements OnInit {

  rippleColor="blue";

  payment_type: any[] = ['Cash', 'Card', 'Digital Wallet'];
  genShow: boolean = true;

  receipt: Receipt = { id: "", name: "", address: "", amount: "", payment_type: "", date: "", receiver: "" };

  tempReceipt: Receipt = { id: "", name: "", address: "", amount: "", payment_type: "", date: "", receiver: "" };

  constructor(private _genService:ReceiptServiceService,private _snackBar: MatSnackBar) { }



  ngOnInit() {
  }

  generateScript() {
    this.receipt.id = "RID00" + this.getRandomNumberBetween(100000, 999999);
    
    this.tempReceipt=this.receipt;   

    if(this.genShow){
      this.genShow=false;
    }

    console.log("here is receipt" + JSON.stringify(this.receipt))

    this._genService.generateData(JSON.stringify(this.tempReceipt)).subscribe(data=>{
      console.log("addded val "+JSON.stringify(data))
    });

    this.receipt={ id: "", name: "", address: "", amount: "", payment_type: "", date: "", receiver: "" };

    this._snackBar.open("Your receipt has been generated!", "OK", {
      duration: 2000,
    });

  }

  getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  holdReceipt(){
    this._genService.setReceipt(this.tempReceipt);
    this.genShow=true;
  }

}
