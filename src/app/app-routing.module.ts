import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBodyComponent } from './main-body/main-body.component';
import { GenerateBodyComponent } from './generate-body/generate-body.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { ReciptViewComponent } from './generate-body/recipt-view/recipt-view.component';
import { ReceiptShowViewComponent } from './receipt-show-view/receipt-show-view.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'generate', component: GenerateBodyComponent },
  { path: 'index', component: MainBodyComponent },
  { path: 'view', component: ViewDashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'receipt/:id', component: ReceiptShowViewComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ GenerateBodyComponent]
