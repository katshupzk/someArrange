// Import
import {writings} from "../databases/data.js";

console.log(writings);

// Def
const dataTable = document.getElementById("data-table");

// Iterate over the writings data and create table rows
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
  
    // Append the row to the data table
    dataTable.appendChild(row);
  });