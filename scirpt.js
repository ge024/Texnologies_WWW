function showSidebarSection(sidebarIndex) {
    const sections = document.querySelectorAll(".side-bar-section");
    sections.forEach((section) => (section.style.display = "none"));
    sections[sidebarIndex].style.display = "block";
}

function showBioSection(paragraphID) {
    const paragraphs = document.querySelectorAll(".biography-main p");
    paragraphs.forEach((paragraph) => {
        paragraph.style.display = "none";
    });

    console.log(paragraphID);

    const targerParagraph = document.getElementById(paragraphID);
    if (targerParagraph) {
        targerParagraph.style.display = "block";
    }
}
