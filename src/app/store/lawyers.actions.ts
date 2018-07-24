import { Action } from "@ngrx/store";
import { Lawyer, City, Competency } from "./lawyers.reducers";


export const ADD_LAWYERS = "ADD_LAWYERS";
export const FETCH_LAWYERS = "FETCH_LAWYERS";

export const ADD_CITIES = "ADD_CITIES";
export const FETCH_CITIES = "FETCH_CITIES";

export const ADD_COMPETENCIES = "ADD_COMPETENCIES";
export const FETCH_COMPETENCIES = "FETCH_COMPETENCIES";

export class AddLawyers implements Action {
    readonly type = ADD_LAWYERS;
    constructor(public payload: Lawyer[]){}
}

export class FetchLawyers implements Action {
    readonly type = FETCH_LAWYERS;
    constructor(public payload: {city: string, competency: string}){}
}

export class AddCities implements Action {
    readonly type = ADD_CITIES;
    constructor(public payload: City[]){}
}

export class FetchCities implements Action {
    readonly type = FETCH_CITIES;
}

export class AddCompetencies implements Action {
    readonly type = ADD_COMPETENCIES;
    constructor(public payload: Competency[]){}
}

export class FetchCompetencies implements Action {
    readonly type = FETCH_COMPETENCIES;
}

export type LawyersActions = 
    AddLawyers | AddCities | AddCompetencies |
    FetchLawyers | FetchCities | FetchCompetencies;
