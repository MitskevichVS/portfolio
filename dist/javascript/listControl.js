window.onload = function () {
  const expandButton = document.querySelector('#section-education__nav__button');
  const educationList = document.querySelector('#section-education__list');

  expandButton.addEventListener('click', () => {
    educationList.classList.toggle('toggleList');

    let classListArray = Array.from(educationList.classList);

    if (classListArray.includes('toggleList')) {
      expandButton.textContent = 'Expand';
    } else expandButton.textContent = 'Collapse';
    
  });
}