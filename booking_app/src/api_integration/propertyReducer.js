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

        case 'UPLOAD_PROPERTY_IMAGES':

        return { 
            ...state, 
            message: action.data.message
        };

        case 'UPLOAD_PROPERTY_IMAGES_FAILED':

        return { 
            ...state,
            error: action.data.error
        };

        case 'UPLOAD_PROPERTY_AVATAR':

        return { 
            ...state, 
            message: action.data.message
        };

        case 'UPLOAD_PROPERTY_AVATAR_FAILED':

        return { 
            ...state,
            error: action.data.error
        };

        default:

        return state;
    }
}

export default combineReducers({ propertyReducer });