$(document).ready(function () {
  const AutoDropdowns = $(".AutoDropdown");

  AutoDropdowns.mouseover(function () {
    $(this).find(".dropdown-menu").addClass("show");
  });

  AutoDropdowns.mouseout(function () {
    $(this).find(".dropdown-menu").removeClass("show");
  });
});

function filterItems(category) {
  document.querySelectorAll("#food").forEach((item) => {
    item.classList.remove("clicked");
  });

  if (category === "all") {
    document.querySelectorAll("#food").forEach((item) => {
      item.classList.remove("hidden");
    });
  } else {
    document.querySelectorAll("#food").forEach((item) => {
      item.classList.add("hidden");
    });

    document.querySelectorAll("." + category).forEach((item) => {
      item.classList.remove("hidden");
    });
  }
}

function changeBackground(item) {
  $(item).toggleClass("clicked");
}

function toggleDetails(id) {
  var content = document.getElementById(id);

  if (content.style.display == "none" || content.style.display == "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
