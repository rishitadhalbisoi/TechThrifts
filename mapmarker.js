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
    marker.addListener("mouseover", () =>{
      detailWindow.open(map, marker);
    })
  }

  addMarker({location: {lat: 33.7756, lng: -84.3963}, content: `<h2>Tech Green: Every Wednesday from 10am to 2pm</h2>`});
  addMarker({location: {lat: 33.77974245201469, lng: -84.40470499398494}, content: `<h2>West Village: October 22nd from 3pm to 5pm</h2>`});
  addMarker({location: {lat: 33.77728776563519, lng: -84.39582582126907}, content: `<h2>Klaus: December 8th from 1pm to 4pm</h2>`});
}