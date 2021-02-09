/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Feature
 */
export interface Feature {
    /**
     * 
     * @type {string}
     * @memberof Feature
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Feature
     */
    description: string;
}

export function FeatureFromJSON(json: any): Feature {
    return FeatureFromJSONTyped(json, false);
}

export function FeatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): Feature {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
    };
}

export function FeatureToJSON(value?: Feature | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
    };
}

