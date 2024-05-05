// Get the dropdown content and dropdown icon
const dropdownContent = document.getElementById("dropdown-content");
const dropdownIcon = document.getElementById("dropdown-icon");

// Show dropdown content when hovering over the dropdown icon
dropdownIcon.addEventListener("mouseenter", function() {
    dropdownContent.style.display = "block";
});

// Hide dropdown content when mouse leaves the dropdown area
dropdownContent.addEventListener("mouseleave", function() {
    dropdownContent.style.display = "none";
});
document.getElementById("searchIcon").addEventListener("click", function() {
    var searchBox = document.getElementById("searchBox");
    if (searchBox.style.display === "none") {
        searchBox.style.display = "block";
    } else {
        searchBox.style.display = "none";
    }
});
