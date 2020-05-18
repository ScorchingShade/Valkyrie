import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatTable } from '@angular/material';
import { ReceiptServiceService } from '../generate-body/receipt-service.service';

export interface TableData{
  id:any;
  date:any;
}

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css']
})
export class ViewDashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['RID', 'Date','Delete'];
  
  tableData:TableData[]=[];

  dataSource: MatTableDataSource<TableData>;

  @ViewChild(MatTable,{static: true}) table: MatTable<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _tapiService: ReceiptServiceService) { 

    this.dataSource = new MatTableDataSource(this.tableData);

  }

  ngOnInit() {

    let remains=this._tapiService.fetchAll().subscribe(data=>{
      
      let stringedData = "{\"Dl\":" + JSON.stringify(data) + "}";

      let jsonData = JSON.parse(stringedData);

      
      for (var i = 0; i < jsonData.Dl.length; i++) {
        var jsonIndex = jsonData.Dl[i];

        this.tableData.push({
          id: jsonIndex.id,
          date: jsonIndex.date,
        })

    
      }

      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    

    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete(element:any){

   let deleteIdArr=[element];
   let deleteJson ={id:[element]};
  
   let index:any="";

   for(let i=0;i<this.tableData.length;i++){
     if(element==this.tableData[i].id){
       index=i;
     }
   }

      
   this.table.renderRows()

   this._tapiService.deleteData(deleteJson).subscribe(data=>{
    let jsonString=JSON.stringify(data);
    let jsonParse=JSON.parse(jsonString); 

    if(jsonParse.status=="success"){
      alert("data is deleted")
      this.tableData.splice(index,1);
      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    
   })


  }

}
