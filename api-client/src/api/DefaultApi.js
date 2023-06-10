/**
 * Paraphraser API
 * API for a paraphraser application
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ParaphrasePost200Response from '../model/ParaphrasePost200Response';
import ParaphrasePostRequest from '../model/ParaphrasePostRequest';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the paraphrasePost operation.
     * @callback module:api/DefaultApi~paraphrasePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParaphrasePost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Paraphrase text
     * @param {module:model/ParaphrasePostRequest} paraphrasePostRequest 
     * @param {module:api/DefaultApi~paraphrasePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParaphrasePost200Response}
     */
    paraphrasePost(paraphrasePostRequest, callback) {
      let postBody = paraphrasePostRequest;
      // verify the required parameter 'paraphrasePostRequest' is set
      if (paraphrasePostRequest === undefined || paraphrasePostRequest === null) {
        throw new Error("Missing the required parameter 'paraphrasePostRequest' when calling paraphrasePost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ParaphrasePost200Response;
      return this.apiClient.callApi(
        '/paraphrase', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
