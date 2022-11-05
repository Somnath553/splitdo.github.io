import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { AddmoneyComponent } from './components/addmoney/addmoney.component';
import { AddfriendsComponent } from './components/addfriends/addfriends.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { ExpencedetailComponent } from './components/expencedetail/expencedetail.component';
import { PaynowComponent } from './components/paynow/paynow.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddmoneyComponent,
    AddfriendsComponent,
    ExpencedetailComponent,
    PaynowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
