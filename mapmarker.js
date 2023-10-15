function initMap() {
  
  //Map option
  var options = {
    center: {lat: 33.7756, lng: -84.3963},
    zoom: 16
  }
  //new map
  map = new google.maps.Map(document.getElementById("map"), options)
/*
  //Marker
  const marker = new google.maps.Marker({
    position:{lat: 33.7756, lng: -84.3963},
    map:map
  });

  //Info Window
  const detailWindow = new google.maps.InfoWindow({
    content: `<h2>Tech Green</h2>`
  });

  marker.addListener("mouseover", () =>{
    detailWindow.open(map, marker);
  })
*/

  //Add Marker
  function addMarker(property){
    const marker = new google.maps.Marker({
      position:property.location,
      map:map
    });
    const detailWindow = new google.maps.InfoWindow({
      content:property.content
    });
  }

}


