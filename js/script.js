//SELECTING MAIN ELEMENTS
const page = document.querySelector('.page');
const pageHeader = page.querySelector('.page-header');

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

//PAGE & STUDENT LIST VALUES
const maxStudents = 10;
let studentList = page.querySelectorAll('li');
const studentListLen = studentList.length;
let pageNumber = 1;

// SHOW PAGE FUNCTION

showPage = (list, page) => {
   let start = ((page - 1) * maxStudents);
   let end = ((start + maxStudents) - 1);
   for (let i = 0; i < list.length; i += 1) {
      list[i].style.display = 'none';
      if (i >= start && i <= end) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
};

// APPEND PAGE FUNCTION

appendPageLinks = (list) => {
   if (document.querySelector('.pagination')) {
      remove = document.querySelector('.pagination')
      remove.parentNode.removeChild(remove);
   }
   const pagesNum = Math.ceil(list.length / maxStudents);
   const pagination = document.createElement('div');
   const pagUl = document.createElement('ul');

   pagination.className = 'pagination';
   page.appendChild(pagination);
   pagination.appendChild(pagUl);

   for (let i = 1; i < pagesNum + 1; i += 1) {
      let liContent = `
            <li>
               <a href="#">${i}</a>
            </li>
            `;
      pagUl.innerHTML += liContent;
   }

   const pageLinks = document.querySelectorAll('a');

   for (let i = 0; i < pageLinks.length; i++) {
      pageLinks[0].className = "active";
      pageLinks[i].addEventListener('click', function (event) {
         let active = document.querySelector('.active');
         if (active) {
            active.classList.remove('active');
         }
         showPage(studentList, i + 1);
         event.target.className = "active";
      });
   }
};

showPage(studentList, pageNumber);
appendPageLinks(studentList);


// SEARCH FUNCTION
const input = document.querySelector('input');
const submit = document.querySelector('button');

filter = (list) => {
   const filterArray = [];
   inputValue = input.value.toUpperCase();
   for (let i = 0; i < list.length ; i++) {
      studentName = list[i].getElementsByTagName('h3')[0];
      studentValue = studentName.textContent;
      console.log(studentValue.toUpperCase);
      if (studentValue.toUpperCase().indexOf(inputValue) === 0) {
         page.appendChild(`<h2>No Students Matched Search Results</h2>`);
      } else if (studentValue.toUpperCase().indexOf(inputValue) !== -1) {
         filterArray.push(list[i]);
      } else {
         list[i].style.display = 'none';
      }
   } 
   appendPageLinks(filterArray);
   showPage(filterArray, pageNumber);
}

input.addEventListener('keyup', () => {
   filter(studentList);
})
submit.addEventListener('click', () => {
   filter(studentList);
})