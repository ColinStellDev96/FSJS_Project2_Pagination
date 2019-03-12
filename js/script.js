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
         if (i >= 0 && i <= (maxStudents - 1)) {
            list[i].style.display = 'block';
         } else {
            list[i].style.display = 'none';
         }
      }
   };

// APPEND PAGE FUNCTION

   appendPageLinks = (list) => {
      const pagesNum = Math.ceil(list.length / maxStudents);
      const pagination = document.createElement('div');
      const pagUl = document.createElement('ul');

      pagination.className = 'pagination';
      page.appendChild(pagination);
      pagination.appendChild(pagUl);

      for (let i = 1; i < pagesNum + 1; i += 1){
         let liContent = `
            <li>
               <a href="#">${i}</a>
            </li>
            `;
         pagUl.innerHTML += liContent;
      }

      const pageLinks = document.querySelectorAll('a');
      pageLinks[0].className = "active";

      for(let i = 0; i < pageLinks.length; i ++) {
         pageLinks[i].addEventListener('click', function (event) {
            showPage(studentList, pageNumber);
            let active = document.querySelector('.active');
            if (active) {
               active.classList.remove('active');
            }
            event.target.className = "active";
         })
      }

   };
   showPage(studentList, pageNumber);
   appendPageLinks(studentList);