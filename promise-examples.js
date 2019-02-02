function getCurrentPositionWithPromise(){
return new Promise(function(fulfill, reject) {
navigator.geolocation.getCurrentPosition(fulfill, reject);
});
}

getCurrentPositionWithPromise()
.then(r => console.log(r.coords.latitude) || r)
.catch(r => console.error(r.message))
