const page = document.querySelector('.page');
const pageHeader = page.querySelector('.page-header');
const studentList = page.querySelectorAll('li');

//DYNAMICALLY ADDING SEARCH INPUT TO PAGE
   //Creating The Elements
   const searchDiv = document.createElement('div');
   const searchInput = document.createElement('input');
   const searchButton = document.createElement('button');

   //Adding Classes, Attributes & Text Content to Search Elements
   searchDiv.className = "student-search";
   searchInput.type = 'text';
   searchInput.placeholder = "Search for students...";
   searchButton.textContent = "Search";
   //Appending Elements to The Page
   searchDiv.appendChild(searchInput);
   searchDiv.appendChild(searchButton);
   pageHeader.appendChild(searchDiv);



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.