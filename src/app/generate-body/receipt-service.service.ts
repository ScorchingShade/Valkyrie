import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Receipt } from './recipt-body/recipt-body.component';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceiptServiceService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      //'Access-Control-Allow-Credentials': 'true',
      //'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      //'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      //'Authorization': 'my-auth-token'
    })
  };

  

  httpOptionsget = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      //'Accept': 'text/plain',
      //'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      //'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      //'Authorization': 'my-auth-token'
     // 'transfer-encoding':'chunked'
    })
  };

  receipt={_id:"",id:"",name:"",address:"",amount:"",payment_type:"",date:"",receiver:""};

  private messageSource = new BehaviorSubject(this.receipt);
  receiptData = this.messageSource.asObservable();

  constructor(private _http: HttpClient) { }

  public setReceipt(receipt){
    this.messageSource.next(receipt);
  }

  //Methods for rest API call to TAPI API©  

  fetchData(fetchID){
    console.log(fetchID)
    return this._http.get("https://aws.ankushtest.cloudns.cl/stores/fetchData/"+fetchID.id).pipe(map(result => result));
    
  }

  generateData(postData){

    console.log("postData  "+postData)
    return this._http.post("https://aws.ankushtest.cloudns.cl/stores/generate/", postData ,this.httpOptions).pipe(map(result => result));
    
  }

  deleteData(deleteId){
    
    return this._http.get("https://aws.ankushtest.cloudns.cl/stores/deleteData/"+deleteId.id).pipe(map(result => result));
    
  }

  fetchAll(){
    return this._http.get("https://aws.ankushtest.cloudns.cl/stores/fetchAll").pipe(map(result => result));
  }

}
