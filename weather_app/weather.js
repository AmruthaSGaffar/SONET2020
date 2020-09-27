function change(){
    var x =document.getElementById("city");
    var y =x.options[x.selectedIndex].value;
    var baseurl="http://api.openweathermap.org/data/2.5/weather?q="+y+"&units=metric&appid=b739d23c5b442dc2f494c8a0c78af77f";
    console.log(y);
var request = new XMLHttpRequest();
request.open('GET',baseurl,true)
request.onload = function(){
   if(request.status >=200 && request.status<400){
       //succcess
       var data = JSON.parse(request.responseText);
       console.log(data);
       
       document.getElementById("temp").innerHTML = data.main.temp ;
       document.getElementById("page-content");
       document.getElementById("loc").innerHTML= data.name;
       document.getElementById("lat").innerHTML= data.coord.lat;
       document.getElementById("long").innerHTML= data.coord.lon;
       document.getElementById("humidity").innerHTML= data.main.humidity + "%";
       document.getElementById("pressure").innerHTML= data.main.pressure + "pa";
       document.getElementById("wind").innerHTML= data.wind.speed + "km/h";
       document.getElementById("description").innerHTML= data.weather[0].description;
       var imgurl= "url(pictures/"+y+".jpg)";
       if(y=="New York")
       {
           imgurl ="url(pictures/NewYork.jpg";
       }
       if(y=="Hong Kong")
       {
        imgurl ="url(pictures/HongKong.jpg";
       }
       document.body.style.backgroundImage = imgurl;
       
       
       
     
   }
   else
   console.log("error");
};
request.send();
}

