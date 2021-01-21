import { apiClient } from './apiClient';

export function getProperties() {
    return apiClient.get(`/properties`);
}

export function addProperty(property) {
    return apiClient.post(`/property`, { property });
}