let icon = document.getElementById("burgicon");
let navlinks = document.querySelector("#navlinks");
icon.addEventListener("click", () => {
    let NavDiv = document.getElementById("NavDiv");
    if (NavDiv.style.display != "none") {
      NavDiv.style.display = "none";
      navlinks.style.opacity = 1;

    }
    else {
      NavDiv.style.display = "flex";

      navlinks.style.opacity = 0;
    }
 

  });
