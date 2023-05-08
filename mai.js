// check if geolocation is supported by the browser
if ("geolocation" in navigator) {
  // get the user's current position
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);
      console.log("position:", position);
      setTimeout(() => {
        alert("Latitude:", latitude);
        alert("Longitude:", longitude);
        alert("position:", position);
      }, 5000);
    },

    function (error) {
      console.error("Error getting location:", error);
    }
  );
} else {
  console.error("Geolocation is not supported by this browser.");
}


