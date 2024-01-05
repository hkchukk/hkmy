var foodItemId = null;

$(document).ready(function () {
  const AutoDropdowns = $(".AutoDropdown");

  AutoDropdowns.mouseover(function () {
    $(this).find(".dropdown-menu").addClass("show");
  });

  AutoDropdowns.mouseout(function () {
    $(this).find(".dropdown-menu").removeClass("show");
  });

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
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

  foodItemId = null;
}

function changeBackground(item) {
  if (foodItemId != item)
  {
    $(item).toggleClass("clicked");

    if (foodItemId)
    {
      $(foodItemId).toggleClass("clicked");
    }

    foodItemId = item;
  }
  else
  {
    $(foodItemId).toggleClass("clicked");
    foodItemId = null;
  }
}

function toggleDetails(id) {
  var content = document.getElementById(id);

  if (content.style.display == "none" || content.style.display == "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
