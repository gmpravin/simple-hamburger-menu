if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", afterLoaded);
} else {
  afterLoaded();
}

function afterLoaded() {
  var navBtn = document.getElementById("navBtn");
  var closeBtn = document.getElementById("close-btn");
  var nav = document.getElementById("navBar");
  navBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
