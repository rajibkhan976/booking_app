import * as Api from './propertyApi';

export function getProperties() {
    return function(dispatch) {
        return Api.getProperties()
        .then((result) => {
            return dispatch({
                type: 'GET_PROPERTIES',
                data: result.data.properties
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'GET_PROPERTIES_FAILED',
                data: `Loading properties failed due to ${error}`
            });
        })
    }
}

export function addProperty(property) {
    return function(dispatch) {
        return Api.addProperty(property)
        .then((result) => {
            return dispatch({
                type: 'ADD_PROPERTY',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'ADD_PROPERTY_FAILED',
                data: `Adding property failed due to ${error}`
            });
        })
    }
}