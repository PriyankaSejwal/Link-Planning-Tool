// The button which will pup-up the link report
document.getElementById("popupbutton").addEventListener("click", function () {
  document.querySelector(".overlay").style.display = "flex";
  document.getElementById("popbw").value =
    document.querySelector("#bandWidth").value;
  document.getElementById("popmimo").value = "2*2";
  document.getElementById("popfres").value =
    document.querySelector("#fresnelRadius").value;
  document.getElementById("pophop").value =
    document.querySelector("#linkDistance").value;
  document.getElementById("poptx").value = document.querySelector("#txa").value;
  document.getElementById("poprx").value = document.querySelector("#rxa").value;
  document.getElementById("poprss").value =
    document.querySelector("#rslA").value;
  document.getElementById("popazimutha").value =
    document.querySelector("#azimuthA").value;
  document.getElementById("popazimuthb").value =
    document.querySelector("#azimuthB").value;
  document.getElementById("popmodulation").value =
    document.querySelector("#modulationA").value;
  document.getElementById("poplinkrate").value =
    document.querySelector("#linkrateA").value;
  document.getElementById("popthroughput").value =
    document.querySelector("#linkThroughput").value;
  document.getElementById("popmcs").value =
    document.querySelector("#mcsA").value;
  document.getElementById("popfade").value =
    document.querySelector("#fademarginA").value;
});

document.querySelector(".close-button").addEventListener("click", function () {
  document.querySelector(".overlay").style.display = "none";
});
