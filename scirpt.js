function showSidebarSection(sidebarIndex) {
    const sections = document.querySelectorAll(".sideBarSection");
    sections.forEach((section) => (section.style.display = "none"));
    sections[sidebarIndex].style.display = "block";
}
function showMainSection(sectionID) {
    const sections = document.querySelectorAll(".mainSection");
    sections.forEach((section) => {
        section.style.display = "none";
    });
    const targetSection = document.getElementById(sectionID);
    if (targetSection) {
        targetSection.style.display = "block";
    }
}
function showBioSection(paragraphID) {
    const paragraphs = document.querySelectorAll("#biographySection p");
    paragraphs.forEach((paragraph) => {
        paragraph.style.display = "none";
    });
    const targetParagraph = document.getElementById(paragraphID);
    if (targetParagraph) {
        targetParagraph.style.display = "block";
    }
}

fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        data.biographySections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                element.textContent = section.content;
            }
        });
    })
    .catch((error) => console.error("Error loading content", error));
