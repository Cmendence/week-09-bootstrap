function searchGoogle() {
    let query = document.getElementById("searchQuery").value;
    let url = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.open(url, "_blank");
    document.getElementById("searchQuery").value = "";
  }