document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); 
});

function flipCard(element) {
    element.classList.toggle('flipped');
}

function toggleReferenceModal() {
    const modal = document.getElementById("referenceModal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    const modal = document.getElementById("referenceModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('menu-active');
}

document.addEventListener('click', function(event) {
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger-menu');

    if (!nav.contains(event.target)) {
        nav.classList.remove('menu-active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const clearButton = document.getElementById('clearButton');
    const tableRows = document.querySelectorAll('.table tbody tr');
    
    // Function to perform search
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        
        tableRows.forEach(row => {
            let rowText = '';
            // Get all cell content from the row
            const cells = row.querySelectorAll('td');
            cells.forEach(cell => {
                rowText += cell.textContent.toLowerCase() + ' ';
            });
            
            // Show/hide row based on search match
            if (rowText.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }
    
    // Event listeners
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission
        performSearch();
    });
    
    searchInput.addEventListener('input', function() {
        if (this.value === '') {
            // Show all rows if search is empty
            tableRows.forEach(row => {
                row.style.display = '';
            });
        } else {
            performSearch();
        }
    });
});

function initGallery(id) {
      var el = document.getElementById(id);
      if (el) {
        lightGallery(el, { plugins: [lgZoom], speed: 500 });
      }
    }
    initGallery('gallery1');
    initGallery('gallery2');
    initGallery('gallery3');
    initGallery('gallery4');
    initGallery('gallery5');