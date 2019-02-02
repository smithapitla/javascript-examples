var request = new XMLHttpRequest();

request.onreadystatechange = function(){
  if(request.readystate === 4){
    if(request.status >=200 && request.status<=299){
      console.dir(JSON.parse(request.responseText));
    }else{
      console.error('There was an error');
    }
  }
}

request.open(GET, 'http://Goggl.com/search?q=smitha pitla', true);
request.send();
