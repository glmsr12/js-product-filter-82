// Select filter checkboxes
const filterCheckboxes = document.querySelectorAll('.filter-checkbox');

// Add event listeners to checkboxes
filterCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', filterProducts);
});

// Function to handle filtering
function filterProducts() {
  // Get selected filter values
  const selectedFilters = Array.from(filterCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  // Filter the products based on selected filters
  const products = document.querySelectorAll('.product-item');
  products.forEach((product) => {
    const categories = product.getAttribute('data-categories').split(' ');
    if (selectedFilters.every((filter) => categories.includes(filter))) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
