import * as LawyersActionsBundle from "./lawyers.actions";


export interface City {
    id: number,
    name: string,
    country: string,
}

export interface Competency {
    id: number,
    name: string
}

export interface Lawyer {
    lname: string,
    fname: string,
    competencies_name: string,
    avatar_preview_file: string,
    law_firm: string,
    phone: string,
    email: string
}

export interface State {
    cities: City[],
    competencies: Competency[],
    lawyers: Lawyer[]
}

const initialState: State = {
    cities: [],
    competencies: [],
    lawyers: []
};

export function lawyersReducer(state = initialState, action: LawyersActionsBundle.LawyersActions){
    switch(action.type){
        case LawyersActionsBundle.ADD_CITIES: {
            return {
                ...state,
                cities: [...action.payload]
            }
        }
        case LawyersActionsBundle.ADD_COMPETENCIES: {
            return {
                ...state,
                competencies: [...action.payload]
            }
        }
        case LawyersActionsBundle.ADD_LAWYERS: {
            return {
                ...state,
                lawyers: [...action.payload]
            }
        }
        default: {
            return state;
        }
    }
}