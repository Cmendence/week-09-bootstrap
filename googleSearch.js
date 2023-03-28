function searchGoogle() {
    var query = document.getElementById("searchQuery").value;
    var url = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.open(url, "_blank");
    document.getElementById("searchQuery").value = "";
  }