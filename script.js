

function toggleChapters() {
    const box = document.getElementById("chapterBox");
    box.style.display = (box.style.display === "none") ? "block" : "none";
}

function openPDF(file) {
    window.open(file, '_blank');
}

}


