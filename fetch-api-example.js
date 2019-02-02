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

fetch('https://google.com')
.then(response => {
  if(response.ok)
    return response;
  throw new Error('There was an error');
})
.then(response => response.json())
.then(response => console.dir(response) || response)
.catch(console.error)

// Working example
// Fetch Get Example
fetch('https://httpbin.org/html')
.then(r => {
  if(r.ok)
      return r;
  throw new Error('There was an error');
})
.then(r => {
  console.info(r.type)
  for(var pair of r.headers.entries()){
    console.log(pair[0] +":"+pair[1]);
  }
  return r;
})
.then(r => r.text())
//.then(r => console.log(r) || r)
.catch(console.error)


// Fetch POST example
var data = new FormData();
data.append('foo', 'bar')
data.append('a', '1')

fetch('https://httpbin.org/post', {
  method: 'POST',
  body: data
})
.then(r => {
  if(r.ok)
      return r;
  throw new Error('There was an error');
})
.then(r => {
  console.info(r.type)
  for(var pair of r.headers.entries()){
    console.log(pair[0] +":"+pair[1]);
  }
  return r;
})
.then(r => r.json())
.then(r => console.log(r) || r)
.catch(console.error)
