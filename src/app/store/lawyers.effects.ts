import * as fromLawyers from "./lawyers.reducers";
import * as LawyersActions from "./lawyers.actions";

import { State } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, switchMap } from "rxjs/operators";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class LawyersEffects {
    CITIES_URL: string = "https://roundlaw.com/api/v1/places/cities";
    COMPETENCIES_URL: string = "https://roundlaw.com/api/v1/competencies";
    LAWYERS_URL: string = "https://roundlaw.com/api/v1/users/filter";

    @Effect()
    fetchCities = this.actions$
        .ofType(LawyersActions.FETCH_CITIES)
        .pipe(
            switchMap(
                () => {
                    return this.httpClient.get<fromLawyers.City[]>(this.CITIES_URL);
                }
            ),
            map(
                (cities) => {
                    return {
                        type: LawyersActions.ADD_CITIES,
                        payload: cities
                    }
                }
            )
        );

        @Effect()
        fetchCompetencies = this.actions$
            .ofType(LawyersActions.FETCH_COMPETENCIES)
            .pipe(
                switchMap(
                    () => {
                        return this.httpClient.get<fromLawyers.Competency[]>(this.COMPETENCIES_URL);
                    }
                ),
                map(
                    (competencies) => {
                        return {
                            type: LawyersActions.ADD_COMPETENCIES,
                            payload: competencies
                        }
                    }
                )
            );
        
            @Effect()
            fetchLawyers = this.actions$
                .ofType(LawyersActions.FETCH_LAWYERS)
                .pipe(
                    map(
                        (action: LawyersActions.FetchLawyers) => {
                            return action.payload;
                        }
                    ),
                    switchMap(
                        (searchData: {city: string, competency: string}) => {
                            return this.httpClient.get(this.LAWYERS_URL, 
                                {
                                    params: new HttpParams()
                                        .set("competency_id", searchData.competency)
                                        .set("city_id", searchData.city)
                                });
                        }
                    ),
                    map(
                        (lawyers) => {
                            console.log(lawyers);
                            return {
                                type: LawyersActions.ADD_LAWYERS,
                                payload: lawyers
                            }
                        }
                    )
                );

    constructor(private store: State<fromLawyers.State>,
                private httpClient: HttpClient,
                private actions$: Actions){}
}