// function to convert the co-ordinates from degree to radian

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// function to convert radian tp degree
// Converts from radians to degrees.
function rad2deg(rad) {
  return (rad * 180) / Math.PI;
}

// function to calculate link distance, azimuth angle
function calculate(form, latA, longA, latB, longB) {
  var R = 6371; //Radius of the earth in km
  var deglat = deg2rad(latB - latA);
  var deglong = deg2rad(longB - longA);
  var deglat1 = deg2rad(latA);
  var deglat2 = deg2rad(latB);
  var deglong1 = deg2rad(longA);
  var deglong2 = deg2rad(longB);

  // Calculating hop distance
  var a =
    Math.sin(deglat / 2) * Math.sin(deglat / 2) +
    Math.sin(deglong / 2) *
      Math.sin(deglong / 2) *
      Math.cos(deglat1) *
      Math.cos(deglat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = Math.round(R * c * 100) / 100; // Distance in km

  // Calculating azimuth angle
  var y = Math.sin(deglong2 - deglong1) * Math.cos(deglat2);
  var x =
    Math.cos(deglat1) * Math.sin(deglat2) -
    Math.sin(deglat1) * Math.cos(deglat2) * Math.cos(deglong2 - deglong1);
  var brng = Math.atan2(y, x);
  brng = rad2deg(brng);
  var anglea = Math.round((brng + 360) % 360);
  var angleb = Math.round((anglea - 180 + 360) % 360);

  form.linkDistance.value = distance;
  form.azimuthA.value = anglea;
  form.azimuthB.value = angleb;
}

// updatea();
// updateb();
