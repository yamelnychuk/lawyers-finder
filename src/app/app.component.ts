import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromLawyers from "./store/lawyers.reducers";
import * as LawyersActions from "./store/lawyers.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private store: Store<fromLawyers.State>){}

  ngOnInit(){
    this.store.dispatch(new LawyersActions.FetchCities);
    this.store.dispatch(new LawyersActions.FetchCompetencies);
  }
}
