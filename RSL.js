// Function resets the values whihc are based on the radio specifications.
function resetTable() {
  //   document.getElementById("rslA").value = "";
  //   document.getElementById("rslB").value = "";
  document.getElementById("mcsA").value = "";
  document.getElementById("mcsB").value = "";
  document.getElementById("modulationA").value = "";
  document.getElementById("modulationB").value = "";
  document.getElementById("fecA").value = "";
  document.getElementById("fecB").value = "";
  document.getElementById("linkrateA").value = "";
  document.getElementById("linkrateB").value = "";
  document.getElementById("dlthroughputA").value = "";
  document.getElementById("dlthroughputB").value = "";
  document.getElementById("linkThroughput").value = "";
}

// function to check the factor depending on the link distance
function disfactor() {
  var distance = parseFloat(document.getElementById("linkDistance").value);
  if (distance <= 2) {
    var distfac = 4;
  } else if (distance <= 3) {
    var distfac = 5;
  } else if (distance <= 5) {
    var distfac = 6;
  } else if (distance <= 8) {
    var distfac = 6;
  } else {
    var distfac = 8;
  }
  return parseFloat(distfac);
}

// A function which returns tx power and rx power based on the channel bandwidth

// A function to calculate RSL based on the radio selected by the user

function sitea(form, dist) {
  //   form.bandWidth.value = "";
  resetTable();
  var bandwidth = parseFloat(document.getElementById("bandWidth").value);
  var freq = parseFloat(document.getElementById("channelfrequency").value);
  var loss = parseInt(document.getElementById("cableloss").value);
  var eirp = parseInt(document.getElementById("eirpvalue").value);
  var rada = document.getElementById("radioA");
  var va = rada.options[rada.selectedIndex].value;
  var rsl_a;
  var distfactor = disfactor();
  console.log(distfactor);
  if (va == "ion4le") {
    var txgaina = 23;
    var txgainb = 23;
    var antgaina = 0;
    var antgainb = 0;
  } else if (va == "ion4l1") {
    var txgaina = 23;
    var txgainb = 23;
    var antgaina = 11;
    var antgainb = 11;
  } else if (va == "ion4l2") {
    var txgaina = 23;
    var txgainb = 23;
    var antgaina = 19;
    var antgainb = 19;
  } else if (va == "ion4l3") {
    var antgaina = 25;
    var antgainb = 25;
    var txgaina = eirp - antgaina + loss;
    var txgainb = eirp - antgainb + loss;
    if (txgaina > 27) {
      txgaina = 27;
      txgainb = 27;
    } else {
    }
  } else if (va == "ion4l3j") {
    var antgaina = 25;
    var antgainb = 25;
    var txgaina = eirp - antgaina + loss;
    var txgainb = eirp - antgainb + loss;
    if (txgaina > 27) {
      txgaina = 27;
      txgainb = 27;
    } else {
    }
  }

  if (bandwidth == 20) {
    var additional_loss = 0;
  } else if (bandwidth == 40) {
    var additional_loss = 2;
  } else if (bandwidth == 80) {
    var additional_loss = 3;
  }
  rsl_a =
    Math.round(
      (txgainb -
        additional_loss +
        antgaina +
        antgainb -
        loss * 2 -
        distfactor -
        (20 * Math.log10(dist) + 20 * Math.log10(freq / 1000) + 92.45)) *
        100
    ) / 100;
  form.rslA.value = rsl_a;
  form.txa.value = txgaina;
  form.txb.value = txgainb;
  form.rxa.value = antgaina;
  form.rxb.value = antgainb;
}

function siteb(form, dist) {
  resetTable();
  var bandwidth = parseFloat(document.getElementById("bandWidth").value);
  var freq = parseFloat(document.getElementById("channelfrequency").value);
  var loss = parseInt(document.getElementById("cableloss").value);
  var eirp = parseInt(document.getElementById("eirpvalue").value);
  var radb = document.getElementById("radioB");
  var vb = radb.options[radb.selectedIndex].value;
  var rsl_b;
  var txgaina;
  var txgainb;
  var antgaina;
  var antgainb;
  var distfactor = disfactor();
  if (vb == "ion4le") {
    txgaina = 23;
    txgainb = 23;
    antgaina = 0;
    antgainb = 0;
  } else if (vb == "ion4l1") {
    txgaina = 23;
    txgainb = 23;
    antgaina = 11;
    antgainb = 11;
  } else if (vb == "ion4l2") {
    txgaina = 23;
    txgainb = 23;
    antgaina = 19;
    antgainb = 19;
  } else if (vb == "ion4l3") {
    antgaina = 25;
    antgainb = 25;
    var txgaina = eirp - antgaina + loss;
    var txgainb = eirp - antgainb + loss;
    if (txgaina > 27) {
      txgaina = 27;
      txgainb = 27;
    } else {
    }
  } else if (vb == "ion4l3j") {
    antgaina = 25;
    antgainb = 25;
    var txgaina = eirp - antgaina + loss;
    var txgainb = eirp - antgainb + loss;
    if (txgaina > 27) {
      txgaina = 27;
      txgainb = 27;
    } else {
    }
  }
  if (bandwidth == 20) {
    var additional_loss = 0;
  } else if (bandwidth == 40) {
    var additional_loss = 2;
  } else if (bandwidth == 80) {
    var additional_loss = 3;
  }
  rsl_b =
    Math.round(
      (txgaina -
        additional_loss +
        antgaina +
        antgainb -
        loss * 2 -
        distfactor -
        (20 * Math.log10(dist) + 20 * Math.log10(freq / 1000) + 92.45)) *
        100
    ) / 100;
  form.rslB.value = rsl_b;
  // form.txa.value = txgaina;
  form.txb.value = txgainb;
  // form.rxa.value = antgaina;
  form.rxb.value = antgainb;

  selectTable(form, form.rslA.value, form.rslB.value);
}
