# ParaphraserApi.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paraphrasePost**](DefaultApi.md#paraphrasePost) | **POST** /paraphrase | Paraphrase text



## paraphrasePost

> ParaphrasePost200Response paraphrasePost(paraphrasePostRequest)

Paraphrase text

### Example

```javascript
import ParaphraserApi from 'paraphraser_api';

let apiInstance = new ParaphraserApi.DefaultApi();
let paraphrasePostRequest = new ParaphraserApi.ParaphrasePostRequest(); // ParaphrasePostRequest | 
apiInstance.paraphrasePost(paraphrasePostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paraphrasePostRequest** | [**ParaphrasePostRequest**](ParaphrasePostRequest.md)|  | 

### Return type

[**ParaphrasePost200Response**](ParaphrasePost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

