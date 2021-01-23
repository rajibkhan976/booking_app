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

export function uploadPropertyImages(propertyImages) {
    return function(dispatch) {
        return Api.uploadPropertyImages(propertyImages)
        .then((result) => {
            return dispatch({
                type: 'UPLOAD_PROPERTY_IMAGES',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'UPLOAD_PROPERTY_IMAGES_FAILED',
                data: `Uploading property images failed due to ${error}`
            });
        })
    }
}

export function uploadPropertyAvatar(propertyAvatar) {
    return function(dispatch) {
        return Api.uploadPropertyAvatar(propertyAvatar)
        .then((result) => {
            return dispatch({
                type: 'UPLOAD_PROPERTY_AVATAR',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'UPLOAD_PROPERTY_AVATAR_FAILED',
                data: `Uploading property avatar failed due to ${error}`
            });
        })
    }
}