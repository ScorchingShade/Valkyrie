import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { FooterComponent } from './footer/footer.component';
import { GenerateBodyComponent } from './generate-body/generate-body.component';
import { ReciptBodyComponent } from './generate-body/recipt-body/recipt-body.component';
import { ReciptViewComponent } from './generate-body/recipt-view/recipt-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material'
import { MatInputModule } from '@angular/material'
import {MatSelectModule} from '@angular/material'
import {MatDatepickerModule} from '@angular/material'
import {MatNativeDateModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatTooltipModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';
import {MatRippleModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatIconModule } from '@angular/material'
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ReceiptShowViewComponent } from './receipt-show-view/receipt-show-view.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainBodyComponent,
    FooterComponent,
    GenerateBodyComponent,
    ReciptBodyComponent,
    ReciptViewComponent,
    ViewDashboardComponent,
    ReceiptShowViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatRippleModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    NgxQRCodeModule    
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
