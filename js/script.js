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
   const studentList = page.querySelectorAll('li');
   const studentListLen = studentList.length;
   let pageNumber = 1;

// SHOW PAGE FUNCTION

   showPage = (list, page) => {
      for (let i = 0; i < list.length; i += 1) {
         if (i >= (pageNumber - 1) && i <= (maxStudents - 1)) {
            list[i].style.display = 'block';
         } else {
            list[i].style.display = 'none';
         }
      } 
   }

// APPEND PAGE FUNCTION

   appendPageLinks = (list) => {
      const pagesNum = Math.ceil(list.length / maxStudents);
      const pagination = document.createElement('div');
      pagination.className = 'pagination';
      page.appendChild(pagination);
      const pagUl = document.createElement('ul');
      for (let i = 1; i < pagesNum.length; i += 1){
         pagUl.innerHTML = `<a href="#"><li>${i}</li></a>`
      }
      pagination.appendChild(pagUl);
   }

   showPage(studentList, appendPageLinks(studentList));