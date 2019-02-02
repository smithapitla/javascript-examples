//Modern networking API, built on Promises. It is a "Living Standard". It is available on window and worker.

/*
Request
---------
URL, Method, Headers, Body, Context, Referrer, ReferrerPolicy, Mode, Credentials, Redirect, Integrity, Cache

Response
---------
URL, Headers, Body, Status, StatusText, Ok, Type, Redirected, UseFinalUrl

Headers
-------
append(), set(), delete(), get(), getAll(), has(), entries(), keys(), values()

Body
----
arrayBuffer(), blob(), formData(), json(), text(), // can be called only once on Body
bodyUsed, Request.clone(), Response.clone()

Useful websites
-----------------
http://httpbin.org/

*/

fetch('http://google.com/search?q=smitha pitla')
.then(response => {
  if(response.ok)
    return response;
  throw new Error('There was an error');
})
.then(response => response.json())
.then(response => console.dir(response) || response)
.catch(console.error)
