// Import
import { writings } from "../databases/data.js";

// References
const sortTitle = document.getElementById("sortTitle");
const sortAuthor = document.getElementById("sortAuthor");
const sortPopularity = document.getElementById("sortPopularity");
const sortYearReleased = document.getElementById("sortYearReleased");
const dataTableContent = document.getElementById("data-table-content");

// Sort Data
function sortData(property, order) {
  writings.data.sort((a, b) => {
    if (a[property] < b[property]) {
      return order === 'asc' ? -1 : 1;
    }
    if (a[property] > b[property]) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
  updateTable();
}

// Update Table
function updateTable() {
  // Clear
  dataTableContent.innerHTML = '';

  writings.data.forEach(writing => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = writing.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement("td");
    authorCell.textContent = writing.author;
    row.appendChild(authorCell);

    const popularityCell = document.createElement("td");
    popularityCell.textContent = writing.popularity;
    row.appendChild(popularityCell);

    const genreCell = document.createElement("td");
    genreCell.textContent = writing.genre;
    row.appendChild(genreCell);

    const yearReleasedCell = document.createElement("td");
    yearReleasedCell.textContent = writing.yearReleased;
    row.appendChild(yearReleasedCell);

    dataTableContent.appendChild(row);
  });
}

updateTable();

// Event Listeners
sortTitle.addEventListener('change', () => {
  sortData('title', sortTitle.value === 'sortA-Z' ? 'asc' : 'desc');
});

sortAuthor.addEventListener('change', () => {
  sortData('author', sortAuthor.value === 'sortA-Z' ? 'asc' : 'desc');
});

sortPopularity.addEventListener('change', () => {
  sortData('popularity', sortPopularity.value === 'sortHighest' ? 'desc' : 'asc');
});

sortYearReleased.addEventListener('change', () => {
  sortData('yearReleased', sortYearReleased.value === 'sortHighest' ? 'desc' : 'asc');
});