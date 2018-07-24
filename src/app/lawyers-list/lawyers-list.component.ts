import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromLawyers from "../store/lawyers.reducers";


@Component({
  selector: 'app-lawyers-list',
  templateUrl: './lawyers-list.component.html',
  styleUrls: ['./lawyers-list.component.css']
})
export class LawyersListComponent implements OnInit {
  lawyersState: Observable<fromLawyers.State>;

  constructor(private store: Store<fromLawyers.State>) { }

  ngOnInit() {
    this.lawyersState = this.store.select('lawyersList');
  }

}
