function myFunction(){
var x = document.getElementById("mytext").value;
//document.getElementById("demo").innerHTML = x;


var api_path = 'http://api.openweathermap.org/data/2.5/weather?q=';
//var city = 'Nashville';
var apikey =
var units = '&units=metric';
var url = api_path + x + apikey + units;

//$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&"apikey"&units=metric", 
//function (data) {
    //console.log(data); 

    $.getJSON(url,function (data){
    console.log(data);

    var icon ="https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    // console.log(icon); this code verifies that the icon is going to show up in the console webpage
   // what it does is that it calls it to show up. 
   
   
   // Math.floor is a function that will round up my number; so then it removes the decimals 
   // the capital M matters.  
   //The Math.floor() function returns the largest integer less than or equal to a given number
   var temp = Math.round(data.main.temp);
   var weather = data.weather[0].main;
   var maxtemp = Math.round(data.main.temp_max);
   var mintemp = Math.round(data.main.temp_min);

   var lat = data.coord.lat;
   var lon = data.coord.lon;

   var latt = lat.toString();
   var lonn = lon.toString(); 
  /* original function work
   $(".city").append(x);
   $(".icon").attr("src", icon);
   $(".weather").append(weather);
   $(".temp").append(temp + "C");
   $(".max").append(maxtemp + "C");
   $(".min").append(mintemp + "C");
   */
   //$(".symbol").innerHTML("&#8451;");
   $(".city").append(x);
   $(".icon").attr("src", icon);
   $(".weather").append(weather);
   
   var T = document.getElementById("symbol").innerHTML = temp + "&#8451;";
   $(".temp").append(T);
   
   var MT = document.getElementById("symbol").innerHTML = maxtemp + "&#8451;"
   $(".max").append(MT);
   
   var MNT = document.getElementById("symbol").innerHTML = mintemp + "&#8451;"
   $(".min").append(MNT);

   $(".latitude").append(lat);
   $(".longitude").append(lon);

   $(".lat").append(latt); 
   $(".lon").append(lonn); 

  /*
   $.getJSON("https://maps.googleapis.com/maps/api/js?key=AIzaSyAP9RAeG2ANQbml-SUR77sykzsaH930lvw&libraries=places", function (data){
       console.log(data);
   })
   */
   
//}
//);
}
);
}



