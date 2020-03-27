import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {UpdateblockComponent} from './components/updateblock/updateblock.component';
import {TableblockComponent} from './components/tableblock/tableblock.component';
import {MapComponent} from './components/map/map.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {mapReducer} from './reducers/map.reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {MapEffects} from './effects/map.effects';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    UpdateblockComponent,
    TableblockComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {map: mapReducer}
    ),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([MapEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
