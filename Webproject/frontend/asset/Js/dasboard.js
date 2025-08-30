document.addEventListener('DOMContentLoaded', () => {
    
    // --- Section References ---
    const sections = {
        'buy-crops-btn': document.getElementById('buy-crops-section'),
        'rent-equipment-btn': document.getElementById('rent-equipment-section'),
        'book-transport-btn': document.getElementById('book-transport-section')
    };

    // --- FORCE HIDE SECTIONS ON PAGE LOAD ---
    Object.values(sections).forEach(section => {
        if (section) {
            section.style.display = 'none';
        }
    });

    // --- Button Click Logic ---
const buyCropsBtn = document.getElementById('buy-crops-btn');
console.log("Buy Crops button element:", buyCropsBtn); // Debug log
const categoryButtons = document.querySelectorAll('.service-buttons .btn');

buyCropsBtn.addEventListener('click', () => {
    console.log("Buy Crops button clicked"); // Debug log
    const buyCropsSection = document.getElementById('buy-crops-section');
    buyCropsSection.style.display = 'block';
    // Hide other sections if needed
    Object.values(sections).forEach(otherSection => {
        if (otherSection && otherSection !== buyCropsSection) {
            otherSection.style.display = 'none';
        }
    });
});

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.id;
            
            // Hide all other sections first
            Object.values(sections).forEach(otherSection => {
                if (otherSection && sections[sectionId] !== otherSection) {
                    otherSection.style.display = 'none';
                }
            });

            // Toggle the visibility of the clicked section
            if (sections[sectionId]) {
                const section = sections[sectionId];
                if (section.style.display === 'block') {
                    section.style.display = 'none';
                } else {
                    section.style.display = 'block';
                }
            }
        });
    });

    // Remove modal-related logic
});
