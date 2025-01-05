function showSidebarSection(index) {
    const sections = document.querySelectorAll(".side-bar-section");
    sections.forEach((section) => (section.style.display = "none"));
    sections[index].style.display = "block";
}
