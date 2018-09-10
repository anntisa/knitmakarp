import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations'; // can disable animations
import { MyCustomMaterialModule } from './my-custom-material/my-custom-material.module';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MessageListComponent } from './message-list/message-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDetailComponent,
    MessageListComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, // import all angular material modules AFTER BrowserModule
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule, // can disable animations
    MyCustomMaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
