// A function to calculate the link throughtput based on the bandwidth selected by the user

function selectTable(form, rsl_a, rsl_b) {
  if (parseFloat(rsl_a) == parseFloat(rsl_b)) {
    var bw = document.getElementById("bandWidth");
    var val = bw.value;

    if (val == 20) {
      document.getElementById("snrA").value =
        Math.round((parseFloat(form.rslA.value) + 92) * 100) / 100;
      document.getElementById("snrB").value =
        Math.round((parseFloat(form.rslB.value) + 92) * 100) / 100;

      var snr = parseFloat(document.getElementById("snrA").value);
      var refertable = document.getElementById("throughput20MHz");

      document.getElementById("fademarginA").value =
        Math.round(
          (parseFloat(form.snrA.value) -
            parseInt(refertable.rows[1].cells.item(0).innerHTML)) *
            100
        ) / 100;
      document.getElementById("fademarginB").value =
        Math.round(
          (parseFloat(form.snrB.value) -
            parseInt(refertable.rows[1].cells.item(0).innerHTML)) *
            100
        ) / 100;
      var rowlength = refertable.rows.length;
      for (i = 1; i <= rowlength; i++) {
        var min = refertable.rows[i].cells.item(0).innerHTML;
        var max = refertable.rows[i].cells.item(1).innerHTML;
        if (snr >= min && snr <= max) {
          form.mcsA.value = refertable.rows[i].cells.item(2).innerHTML;
          form.mcsB.value = refertable.rows[i].cells.item(2).innerHTML;
          form.modulationA.value = refertable.rows[i].cells.item(3).innerHTML;
          form.modulationB.value = refertable.rows[i].cells.item(3).innerHTML;
          form.fecA.value = refertable.rows[i].cells.item(4).innerHTML;
          form.fecB.value = refertable.rows[i].cells.item(4).innerHTML;
          form.linkrateA.value = refertable.rows[i].cells.item(5).innerHTML;
          form.linkrateB.value = refertable.rows[i].cells.item(5).innerHTML;
          form.dlthroughputA.value =
            refertable.rows[i].cells.item(6).innerHTML / 2;
          form.dlthroughputB.value =
            refertable.rows[i].cells.item(6).innerHTML / 2;
          form.linkThroughput.value =
            refertable.rows[i].cells.item(6).innerHTML;

          break;
        } else if (snr < min) {
          break;
        } else if (snr < min) {
          break;
        } else {
          continue;
        }
      }
    } else if (val == 40) {
      document.getElementById("snrA").value =
        Math.round((parseFloat(form.rslA.value) + 90) * 100) / 100;
      document.getElementById("snrB").value =
        Math.round((parseFloat(form.rslB.value) + 90) * 100) / 100;

      var refertable = document.getElementById("throughput40MHz");
      var snr = parseFloat(document.getElementById("snrA").value);

      document.getElementById("fademarginA").value =
        Math.round(
          (parseFloat(form.snrA.value) -
            parseInt(refertable.rows[1].cells.item(0).innerHTML)) *
            100
        ) / 100;
      document.getElementById("fademarginB").value =
        Math.round(
          (parseFloat(form.snrB.value) -
            parseInt(refertable.rows[1].cells.item(0).innerHTML)) *
            100
        ) / 100;
      var rowlength = refertable.rows.length;
      for (var i = 1; i <= rowlength; i++) {
        var min = refertable.rows[i].cells.item(0).innerHTML;
        var max = refertable.rows[i].cells.item(1).innerHTML;
        if (snr >= min && snr <= max) {
          form.mcsA.value = refertable.rows[i].cells.item(2).innerHTML;
          form.mcsB.value = refertable.rows[i].cells.item(2).innerHTML;
          form.modulationA.value = refertable.rows[i].cells.item(3).innerHTML;
          form.modulationB.value = refertable.rows[i].cells.item(3).innerHTML;
          form.fecA.value = refertable.rows[i].cells.item(4).innerHTML;
          form.fecB.value = refertable.rows[i].cells.item(4).innerHTML;
          form.linkrateA.value = refertable.rows[i].cells.item(5).innerHTML;
          form.linkrateB.value = refertable.rows[i].cells.item(5).innerHTML;
          form.dlthroughputA.value =
            refertable.rows[i].cells.item(6).innerHTML / 2;
          form.dlthroughputB.value =
            refertable.rows[i].cells.item(6).innerHTML / 2;
          form.linkThroughput.value =
            refertable.rows[i].cells.item(6).innerHTML;

          break;
        } else if (snr < min) {
          break;
        } else {
          continue;
        }
      }
    } else if (val == 80) {
      document.getElementById("snrA").value =
        Math.round((parseFloat(form.rslA.value) + 90) * 100) / 100;
      document.getElementById("snrB").value =
        Math.round((parseFloat(form.rslB.value) + 90) * 100) / 100;

      var refertable = document.getElementById("throughput80MHz");

      var snr = parseFloat(document.getElementById("snrA").value);
      document.getElementById("fademarginA").value =
        Math.round(
          (parseFloat(form.snrA.value) -
            parseInt(refertable.rows[1].cells.item(0).innerHTML)) *
            100
        ) / 100;
      document.getElementById("fademarginB").value =
        Math.round(
          (parseFloat(form.snrB.value) -
            parseInt(refertable.rows[1].cells.item(0).innerHTML)) *
            100
        ) / 100;
      var rowlength = refertable.rows.length;
      for (i = 1; i <= rowlength; i++) {
        var min = refertable.rows[i].cells.item(0).innerHTML;
        var max = refertable.rows[i].cells.item(1).innerHTML;
        if (snr >= min && snr <= max) {
          form.mcsA.value = refertable.rows[i].cells.item(2).innerHTML;
          form.mcsB.value = refertable.rows[i].cells.item(2).innerHTML;
          form.modulationA.value = refertable.rows[i].cells.item(3).innerHTML;
          form.modulationB.value = refertable.rows[i].cells.item(3).innerHTML;
          form.fecA.value = refertable.rows[i].cells.item(4).innerHTML;
          form.fecB.value = refertable.rows[i].cells.item(4).innerHTML;
          form.linkrateA.value = refertable.rows[i].cells.item(5).innerHTML;
          form.linkrateB.value = refertable.rows[i].cells.item(5).innerHTML;
          form.dlthroughputA.value =
            refertable.rows[i].cells.item(6).innerHTML / 2;
          form.dlthroughputB.value =
            refertable.rows[i].cells.item(6).innerHTML / 2;
          form.linkThroughput.value =
            refertable.rows[i].cells.item(6).innerHTML;
          break;
        } else if (snr < min) {
          break;
        } else {
          continue;
        }
      }
    }
  } else {
  }
}
