function availability() {
  var anthta = parseFloat(document.getElementById("antheighta").value);
  var anthtb = parseFloat(document.getElementById("antheightb").value);
  var min_antht = Math.min(anthta, anthtb);
  var linkdist = parseFloat(document.getElementById("linkDistance").value);
  var path_inclination = Math.abs((anthta - anthtb) / linkdist);
  var operating_frequency = 71.125;
  var flat_fade_margin = parseFloat(
    document.getElementById("fademarginA").value
  );
  var geoclimatic_factor = 0.00003647539;
  var fading_occurance_factor =
    (geoclimatic_factor *
      linkdist ** 3.1 *
      (1 + path_inclination) ** -1.29 *
      operating_frequency ** 0.8 *
      10 ** (-0.00089 * min_antht - flat_fade_margin / 10)) /
    100;
  var fade_depth = 25 + 1.2 * Math.log10(fading_occurance_factor);
  var flat_fade_exceeded_in_WM = 1 - (1 - 2 * fading_occurance_factor);
  var link_availability_due_to_multipath = 1 - flat_fade_exceeded_in_WM;

  // To be deleted
  console.log(path_inclination);
  console.log(flat_fade_margin);
  console.log(fading_occurance_factor);
  console.log(fade_depth);
  console.log(flat_fade_exceeded_in_WM);
  console.log(link_availability_due_to_multipath);

  //  populating the link availability column with the value calculated
  document.getElementById("popavailability").value =
    link_availability_due_to_multipath;
}
