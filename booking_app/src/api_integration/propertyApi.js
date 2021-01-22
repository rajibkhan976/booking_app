import { apiClient } from './apiClient';

export function getProperties() {
    return apiClient.get(`/properties`);
}

export function addProperty(property) {
    return apiClient.post(`/property`, property);
}

export function uploadPropertyImages(propertyImages) {
    return apiClient.post(`/images`, propertyImages);
}

export function uploadPropertyAvatar(propertyAvatar) {
    return apiClient.post(`/avatar`, propertyAvatar);
}