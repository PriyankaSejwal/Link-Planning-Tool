// Function to populate the options into the frequency select query.
function populatefreq(s1, s2) {
  document.getElementById("eirpvalue").value = "";
  var s1 = document.getElementById("bandWidth");
  var s2 = document.getElementById("channelfrequency");
  s2.innerHTML = "";
  if (s1.value == "20") {
    var optionarr = [
      "|Channel frequency",
      "5160 | 5160",
      "5180 | 5180",
      "5200 | 5200",
      "5220 | 5220",
      "5240 | 5240",
      "5735 | 5735",
      "5755 | 5755",
      "5775 | 5775",
      "5795 | 5795",
      "5815 | 5815",
      "5835 | 5835",
      "5855 | 5855",
    ];
  } else if (s1.value == "40") {
    var optionarr = [
      "|Channel frequency",
      "5170 | 5170",
      "5210 | 5210",
      "5745 | 5745",
      "5785 | 5785",
      "5825 | 5825",
    ];
  } else if (s1.value == "80") {
    var optionarr = ["|Channel frequency", "5190 | 5190", "5765 | 5765"];
  }
  for (var option in optionarr) {
    var pair = optionarr[option].split("|");
    var newoption = document.createElement("option");
    newoption.value = pair[0];
    newoption.innerHTML = pair[1];
    s2.options.add(newoption);
  }
}

// Function to calculate the eirp using the eirp referecne table
function calculateeirp() {
  var bndwdth = parseFloat(document.getElementById("bandWidth").value);
  var freq = parseFloat(document.getElementById("channelfrequency").value);

  if (bndwdth == 20) {
    var eirptable = document.getElementById("eirp20MHz");
    var length = eirptable.rows.length;
    for (var i = 1; i < length; i++) {
      var cf = eirptable.rows[i].cells.item(0).innerHTML;
      var eirpval = eirptable.rows[i].cells.item(2).innerHTML;
      if (cf == freq) {
        document.getElementById("eirpvalue").value = eirpval;
        break;
      } else {
        continue;
      }
    }
  }
  if (bndwdth == 40) {
    var eirptable = document.getElementById("eirp40MHz");
    var length = eirptable.rows.length;
    for (var i = 1; i < length; i++) {
      var cf = eirptable.rows[i].cells.item(0).innerHTML;
      var eirpval = eirptable.rows[i].cells.item(2).innerHTML;
      if (cf == freq) {
        document.getElementById("eirpvalue").value = eirpval;
        break;
      } else {
        continue;
      }
    }
  }
  if (bndwdth == 80) {
    var eirptable = document.getElementById("eirp80MHz");
    var length = eirptable.rows.length;
    for (var i = 1; i < length; i++) {
      var cf = eirptable.rows[i].cells.item(0).innerHTML;
      var eirpval = eirptable.rows[i].cells.item(2).innerHTML;
      if (cf == freq) {
        document.getElementById("eirpvalue").value = eirpval;
        break;
      } else {
        continue;
      }
    }
  }
}

function fresnelzone() {
  // Calculating fresnel zone radius
  var frequency = document.getElementById("channelfrequency").value;
  var distance = document.getElementById("linkDistance").value;
  var fres =
    Math.round(17.32 * Math.sqrt(distance / ((4 * frequency) / 1000)) * 100) /
    100;

  document.getElementById("fresnelRadius").value = fres;
}
