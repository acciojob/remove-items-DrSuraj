//your JS code here. If required.
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const colorSelect = document.getElementById('colorSelect');
    const removeButton = document.querySelector('input[type="button"]');

    // Event listener for the button click
    removeButton.addEventListener('click', function () {
        removeSelectedColor();
    });

    // Function to remove the selected color from the dropdown
    function removeSelectedColor() {
        const selectedIndex = colorSelect.selectedIndex;

        if (selectedIndex !== -1) {
            colorSelect.remove(selectedIndex);
        }
    }
});
