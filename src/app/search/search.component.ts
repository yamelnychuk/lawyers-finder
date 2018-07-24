import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

import * as fromLawyers from "../store/lawyers.reducers";
import * as LawyersActions from "../store/lawyers.actions";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  lawyersState: Observable<fromLawyers.State>;

  constructor(private store: Store<fromLawyers.State>) { }

  ngOnInit() {
    this.lawyersState = this.store.select('lawyersList');
  }

  onSubmit(form: NgForm){
    this.store.dispatch(new LawyersActions.FetchLawyers(
      {
        city: form.value.city,
        competency: form.value.competency
      }))
  }
}
