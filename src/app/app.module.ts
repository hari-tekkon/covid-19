import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {UpdateblockComponent} from './components/updateblock/updateblock.component';
import { TableblockComponent } from './components/tableblock/tableblock.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    UpdateblockComponent,
    TableblockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
