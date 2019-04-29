function theFunction(){
    var xx = document.getElementById("text1").value;

    var first = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
    var last = '&location_type=ROOFTOP&result_type=street_address&key=AIzaSyAVoWGj-5xiBoCXyDcxmgr-2RESzzJSlTY';
    var url2 = first + xx + last ; 

    $.getJSON(url2,function (data){
        console.log(data);

        var city = data.results[0].address_components[3].long_name;
        var c = data.results[0].address_components[4].long_name;
        var s = data.results[0].address_components[5].long_name;
        var cc = data.results[0].address_components[6].long_name;
    

        $(".C").append(city);
        $(".state").append(s);
        $(".country").append(cc); 
        $(".county").append(c);
        
    }
    );

}
