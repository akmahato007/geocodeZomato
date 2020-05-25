

$(document).ready(function() {

  $('#someid').on('click', function() {

    let latitude = null;
    let longitude = null;
      let options = {
        enableHighAccuracy: true,
        timeout: 1000000,
        maximumAge: 0
      };
      
      function success(pos) {
        var crd = pos.coords;
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        latitude = `${crd.latitude}`;
        longitude = `${crd.longitude}`;
        console.log(latitude);
        console.log(longitude);
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    
      function geolocation(success, error, options){
        navigator.geolocation.getCurrentPosition(success, error, options);
        x =1 ;
        console.log(x);
        return x;
      }
    
      if (geolocation(success, error, options)== 1){
        let autodetect = () => {
      
          let url1= "https://developers.zomato.com/api/v2.1/geocode";
        
          let full_url =`${url1}?lat=${latitude}&lon=${longitude}`;
          console.log(full_url);
        
          $.ajax({
              url : full_url,
              type: "get", //send it through get method
              headers: { 
                "user-key" : "949248f347bc088f93d633d9d84c3341",
              },
              success: function(response) {
                //Do Something
                console.log(response)
              },
              error: function(xhr) {
                //Do Something to handle error
              }
        
            });
        
        
          }
        
      }
    });


}); // end document.ready function

