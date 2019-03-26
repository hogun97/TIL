# JQuery Asynchronous Interlocking

## Ajax?

Ajax is short for Asynchronous Javascript and XML.
Ajax is a method of sending and requesting data asynchronously.

```javascript
$.ajax()    // basic syntax for ajax

$.ajax({
    url: "action url",
    type: "get, post method",
    data: "data to be sent",
    dataType: "type of data requested",
    success: function(data) {
        "code to be executed when sending succeeds"  
    },
    error: function() {
        "code to be executed when sending fails"
    },
});
```
 
