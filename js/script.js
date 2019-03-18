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
      //check's if pagination is on page each time the function is called, this prevents replication of pagination numbers
      if (document.querySelector('.pagination')) {
         removePag = document.querySelector('.pagination')
         removePag.parentNode.removeChild(removePag);
      }

      const pagesNum = Math.ceil(list.length / maxStudents);
      const pagination = document.createElement('div');
      const pagUl = document.createElement('ul');
      pagination.className = 'pagination';
      page.appendChild(pagination);
      pagination.appendChild(pagUl);
      // appending li elements based on number of pages needed
      for (let i = 1; i < pagesNum + 1; i += 1) {
         let liContent = `
               <li>
                  <a href="#">${i}</a>
               </li>
               `;
         pagUl.innerHTML += liContent;
      };
      // adding event listeners to each pagination link and moving 'active' class around based on link clicked
      const pageLinks = document.querySelectorAll('a');
      for (let i = 0; i < pageLinks.length; i++) {
         pageLinks[0].className = "active";
         pageLinks[i].addEventListener('click', function (event) {
            let active = document.querySelector('.active');
            if (active) {
               active.classList.remove('active');
            }
            showPage(list, i + 1);
            event.target.className = "active";
         });
      }
   };
   // shows the initial student list and pagination upon first page load
   showPage(studentList, pageNumber);
   appendPageLinks(studentList);

// SEARCH FUNCTION
   const input = document.querySelector('input');
   const submit = document.querySelector('button');
   // filter function that takes one parameter, a list of students
   const filterSearch = (list) => {
      // empty arrays for matching students and not matching students
      const matchArray = [];
      const noMatchArray = [];
      inputValue = input.value.toLowerCase();
      // looping through list and pushing matching students into empty array and not matching students into empty array
      for (let i = 0; i < list.length ; i++) {
         let studentName = list[i].getElementsByTagName('h3')[0];
         let studentValue = studentName.textContent.toLowerCase();
         let filter = studentValue.toLowerCase().indexOf(inputValue);
         if (filter !== -1) {
            matchArray.push(list[i]);
         } else {
            list[i].style.display = 'none';
            noMatchArray.push(list[i]);
         }
         // if there are no matches, a message is appended to the page & removed once a user starts searching again.
         if (noMatchArray.length === list.length) {
            let noStudent = document.createElement('h2');
            noStudent.className = "no-message";
            noStudent.innerHTML = "No Student Results Found!";
            page.appendChild(noStudent);
         } else if (document.querySelector('.no-message')) {
            removeMessage = document.querySelector('.no-message');
            removeMessage.parentNode.removeChild(removeMessage);
         }
         // calling the showPage and appendPageLinks functions with the new matchArray.
         showPage(matchArray, pageNumber);
         appendPageLinks(matchArray);
      }
   };

// EVENT LISTENERS
   input.addEventListener('keyup', () => {
      filterSearch(studentList);
   });
   // submit event listener will work if you disable the input event listener 
   submit.addEventListener('click', () => {
      filterSearch(studentList);
   });