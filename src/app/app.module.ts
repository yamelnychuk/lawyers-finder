import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LawyersListComponent } from './lawyers-list/lawyers-list.component';
import { lawyersReducer } from './store/lawyers.reducers';
import { LawyersEffects } from './store/lawyers.effects';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LawyersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({lawyersList: lawyersReducer}),
    EffectsModule.forRoot([LawyersEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
