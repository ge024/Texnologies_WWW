document.addEventListener("DOMContentLoaded", function () {
    fetchLinksData();
    fetchGalleryData();
});

// Main and Sidebar
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

function showPaintingSection(containerID) {
    const containers = document.querySelectorAll(".hiddenContainer");
    containers.forEach((container) => container.classList.remove("paintingsContainer"));
    const targetContainer = document.getElementById(containerID);
    if (targetContainer) {
        targetContainer.classList.add("paintingsContainer");
    }
}

// Biograhphy Section
fetch("data/biography.json")
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
// Galleries
function fetchGalleryData() {
    fetch("data/galleries.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            loadGalleries(data.galleries);
        })
        .catch((error) => {
            console.error("Error", error);
        });
}
function loadGalleries(galleries) {
    const galsTableBody = document.getElementById("galsTableBody");
    galsTableBody.innerHTML = "";

    galleries.forEach((gallery) => {
        const row = document.createElement("tr");
        let linkHtml = `<a href="${gallery.url}" target="_blank">Click me</a>`;

        row.innerHTML = `
            <td>${gallery.title}</td>
            <td>${linkHtml}</td>
        `;
        galsTableBody.appendChild(row);
    });
}
function showGalleriesSection(sectionID) {
    const sections = document.querySelectorAll(".hidden");
    sections.forEach((section) => {
        section.style.display = "none";
    });
    const targetSection = document.getElementById(sectionID);
    if (targetSection) {
        targetSection.style.display = "block";
    }
}

// Links
function fetchLinksData() {
    fetch("data/links.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            loadLinks(data.links);
        })
        .catch((error) => {
            console.error("Error", error);
        });
}
function loadLinks(links) {
    const linksTableBody = document.getElementById("linksTableBody");
    linksTableBody.innerHTML = "";
    links.forEach((link) => {
        const row = document.createElement("tr");
        const linkHtml = `<a href="${link.url}" target="_blank">Click me</a>`;
        row.innerHTML = `
        <td>${link.title}</td>
        <td>${linkHtml}</td>
      `;
        linksTableBody.appendChild(row);
    });
}
function showLinksSection(sectionID) {
    const sections = document.querySelectorAll(".hidden");
    sections.forEach((section) => {
        section.style.display = "none";
    });
    const targetSection = document.getElementById(sectionID);
    if (targetSection) {
        targetSection.style.display = "block";
    }
}
