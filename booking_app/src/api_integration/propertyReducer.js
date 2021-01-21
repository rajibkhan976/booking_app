import { combineReducers } from 'redux';

const initialState = {
    properties: []
};

const propertyReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'GET_PROPERTIES':

        return { ...state, properties: action.data };

        case 'ADD_PROPERTY':

        return { 
            ...state,
            property: action.data.property,
            message: action.data.message
        }

        default:

        return state;
    }
}

export default combineReducers({ propertyReducer });