<!-- JavaScript for SwiftNote Landing Page -->

// Attach event listeners to buttons (make sure your HTML buttons have the correct IDs)
document.querySelectorAll("#get-started")?.forEach(btn => btn.addEventListener("click", trySwiftNote));
document.getElementById("watch-demo")?.addEventListener("click", watchDemo);
document.getElementsByClassName("search")?.[0]?.addEventListener("click", searchNotes);

// Function definitions for button actions
function trySwiftNote() {
    // Open the SwiftNote signup page in a new tab
    window.open("https://www.swiftnote.com/signup", "_blank");
}

function watchDemo() {
    // Open the demo video in a new tab
    window.open("https://www.youtube.com/watch?v=example", "_blank");

}

function searchNotes() {
    // Open the search page in a new tab
    window.open("https://www.swiftnote.com/search", "_blank");
}

