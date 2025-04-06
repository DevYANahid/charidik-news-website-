document.getElementById("searchButton").addEventListener("click", function () {
    var input = document.getElementById("searchInput");
    if (input.classList.contains("search-active")) {
      input.classList.remove("search-active");
      input.value = ""; // সার্চ ফিল্ড খালি করা
    } else {
      input.classList.add("search-active");
      input.focus();
    }
  });