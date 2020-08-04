import { Component, OnInit } from '@angular/core';
import { Receipt } from '../recipt-body/recipt-body.component';
import { ReceiptServiceService } from '../receipt-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipt-view',
  templateUrl: './recipt-view.component.html',
  styleUrls: ['./recipt-view.component.css']
})
export class ReciptViewComponent implements OnInit {
  
  showbutton:any;


 receipt={_id:"",id:"",name:"",address:"",amount:"",payment_type:"",date:"",receiver:""};

  total:any="";

  constructor(private _genService:ReceiptServiceService,private route: ActivatedRoute,
    private router: Router) {
    
    
      let remainingData=this._genService.receiptData.subscribe(data=>{
        this.receipt=data
        console.log("data s s s"+JSON.stringify(data))
        this.total=(parseFloat(this.receipt.amount)*0.38)+parseFloat(this.receipt.amount);

      });  

   }

   title = 'app';
   elementType = 'url';
   value = 'someurlofbusiness';


  ngOnInit() {

  

    this.receipt.id =this.route.snapshot.paramMap.get('id');
    console.log("id    "+JSON.stringify(this.receipt.id));

    let fetchJson=[this.receipt.id];
    let fetchdata ={id:[this.receipt.id]};

    this._genService.fetchData(fetchdata).subscribe(data=>{
      

    

      let jsonData=JSON.stringify(data);
      console.log("receiptData"+jsonData);
      let jsonIndex=JSON.parse(jsonData);
      
      // for(let i=0;i<jsonIndex.length;i++){
      //   console.log(jsonIndex[i].id);
      //   this.receipt=jsonIndex[i];
      //   this.total=(parseFloat(this.receipt.amount)*0.38)+parseFloat(this.receipt.amount);
      // }

        console.log(jsonIndex.id);
        this.receipt=jsonIndex;
        this.total=(parseFloat(this.receipt.amount)*0.38)+parseFloat(this.receipt.amount);
      
      
    })
    
   
  }

  printReceipt(){
    var printContents = document.getElementById("printableArea").innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
     location.reload();
  }

}
