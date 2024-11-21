function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('active');
}

// --
// Function to open the login modal
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Function to close the login modal
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
// ---
function toggleTranslate() {
    const translateElement = document.getElementById('googleTranslateElement');
    if (translateElement.style.display === 'none') {
        translateElement.style.display = 'block';
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'googleTranslateElement');
    } else {
        translateElement.style.display = 'none';
    }
}
// ---button
// Show only the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active'); // Hide all sections
        if (section.id === sectionId) {
            section.classList.add('active'); // Show the selected section
        }
    });
}
// weapon card
document.addEventListener("DOMContentLoaded", function () {
    // Fetch weapon data from the JSON file
    fetch('weapons.json')
        .then(response => response.json())
        .then(data => displayWeapons(data))
        .catch(error => console.error("Error loading weapons:", error));
});

function displayWeapons(weapons) {
    const weaponContainer = document.getElementById("weapon-cards");
    weaponContainer.innerHTML = ''; // Clear previous content

    weapons.forEach(weapon => {
        const weaponCard = document.createElement("div");
        weaponCard.classList.add("weapon-card");

        weaponCard.innerHTML = `
            <img src="${weapon.image}" alt="${weapon.name}" class="weapon-image">
            <div class="weapon-info">
                <h3 class="weapon-name">${weapon.name}</h3>
                <p class="weapon-type"><strong>Type:</strong> ${weapon.type}</p>
                <p class="weapon-range"><strong>Range:</strong> ${weapon.range}</p>
                <p class="weapon-damage"><strong>Damage:</strong> ${weapon.damage}</p>
                <p class="weapon-description">${weapon.description}</p>
            </div>
        `;
        
        weaponContainer.appendChild(weaponCard);
    });
}
// record
document.addEventListener("DOMContentLoaded", function () {
    // Fetch record data from the JSON file
    fetch('records.json')
        .then(response => response.json())
        .then(data => displayRecords(data))
        .catch(error => console.error("Error loading records:", error));
});

function displayRecords(data) {
    const recordContainer = document.getElementById("record-cards");
    recordContainer.innerHTML = ''; // Clear any previous content

    data.forEach(category => {
        const categoryTitle = document.createElement("h3");
        categoryTitle.classList.add("category-title");
        categoryTitle.textContent = category.category;
        recordContainer.appendChild(categoryTitle);

        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category-container");

        category.records.forEach(record => {
            const recordCard = document.createElement("div");
            recordCard.classList.add("record-card");

            recordCard.innerHTML = `
                <img src="${record.image}" alt="${record.name}" class="record-image">
                <div class="record-info">
                    <h4 class="record-name">${record.name}</h4>
                    <p class="record-type"><strong>Type:</strong> ${record.type}</p>
                    <p class="record-speed"><strong>Speed:</strong> ${record.speed}</p>
                    <p class="record-range"><strong>Range:</strong> ${record.range}</p>
                    <p class="record-description">${record.description}</p>
                </div>
            `;

            categoryContainer.appendChild(recordCard);
        });

        recordContainer.appendChild(categoryContainer);
    });
}
// history
document.addEventListener("DOMContentLoaded", function () {
    // Fetch history data from the JSON file
    fetch('history.json')
        .then(response => response.json())
        .then(data => displayHistory(data))
        .catch(error => console.error("Error loading history:", error));
});

function displayHistory(historyData) {
    const historyContainer = document.getElementById("history-content");
    historyContainer.innerHTML = ''; // Clear previous content

    historyData.forEach(item => {
        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");

        historyItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="history-image">
            <div class="history-info">
                <h3 class="history-title">${item.title}</h3>
                <p class="history-description">${item.description}</p>
                <div class="history-links">
                    <a href="${item.youtubeLink}" target="_blank" class="history-link youtube-link">Watch on YouTube</a>
                    <a href="${item.wikipediaLink}" target="_blank" class="history-link wikipedia-link">Read on Wikipedia</a>
                </div>
            </div>
        `;

        historyContainer.appendChild(historyItem);
    });
}
// document

document.addEventListener("DOMContentLoaded", function () {
    fetch('documents.json')
        .then(response => response.json())
        .then(data => displayDocuments(data))
        .catch(error => console.error("Error loading documents:", error));
});

function displayDocuments(docData) {
    const documentContainer = document.getElementById("document-content");
    documentContainer.innerHTML = ''; // Clear previous content

    docData.forEach(item => {
        const docItem = document.createElement("div");
        docItem.classList.add("doc-item");

        docItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="doc-image">
            <div class="doc-info">
                <h3 class="doc-title">${item.title}</h3>
                <p class="doc-description">${item.description}</p>
                <div class="doc-links">
                    <a href="${item.youtubeLink}" target="_blank" class="doc-link youtube-link">Watch on YouTube</a>
                    <a href="${item.wikipediaLink}" target="_blank" class="doc-link wikipedia-link">Read on Wikipedia</a>
                    <a href="${item.additionalLink}" target="_blank" class="doc-link additional-link">Learn More</a>
                </div>
            </div>
        `;

        documentContainer.appendChild(docItem);
    });
}
// hide home content
window.onload = () => {
    showSection('home');
};
// /left to right
document.addEventListener("scroll", function() {
    const appearElement = document.querySelector(".appear");
    const rect = appearElement.getBoundingClientRect();

    // Check if the element has reached 60% of the viewport
    if (rect.top <= window.innerHeight * 0.6) {
        appearElement.classList.add("active");
    }
});
// --right ot left
document.addEventListener("scroll", function() {
    const overlayContent = document.querySelector(".overlay-content.right");
    const rect = overlayContent.getBoundingClientRect();

    // Check if the element is in view (you can adjust the threshold as needed)
    if (rect.top <= window.innerHeight * 0.8) {
        overlayContent.classList.add("active");
    }
});
// video pause
document.addEventListener("scroll", function() {
    const video = document.getElementById("backgroundVideo");
    const videoRect = video.getBoundingClientRect();
    const inViewport = (videoRect.top >= 0 && videoRect.bottom <= window.innerHeight);

    if (inViewport) {
        video.play();
    } else {
        video.pause();
    }
});