window.onload = function () {

  const expandButton = document.querySelector('#section-education__nav__button');
  const educationList = document.querySelector('#section-education__list');

  const firstProjectLink = document.querySelector('#first-project__link');
  const secondProjectLink = document.querySelector('#second-project__link');

  const closeButtonProject1 = document.querySelector('#container-project1__button-back');  
  const closeButtonProject2 = document.querySelector('#container-project2__button-back');
  const resizeButtonProject1 = document.querySelector('#container-project1__button-size');
  const resizeButtonProject2 = document.querySelector('#container-project2__button-size');

  //education list
  expandButton.addEventListener('click', () => {
    educationList.classList.toggle('toggleList');

    let classListArray = Array.from(educationList.classList);

    if (classListArray.includes('toggleList')) {
      expandButton.textContent = 'Expand';
    } else expandButton.textContent = 'Collapse';
    
  });

  // show iframe
  const showFirstProject = () => {
    this.event.preventDefault();
    const wrapper = document.querySelector('.section-iframe__container-prj1');
    wrapper.classList.toggle('container-hidden');

    if (window.innerWidth < 640) {
      resizeButtonProject1.classList.add('hideButton');
      resizeButtonProject2.classList.add('hideButton');
    } else {
      resizeButtonProject1.classList.remove('hideButton');
      resizeButtonProject2.classList.remove('hideButton');
      resizeButtonProject1.textContent = "Desktop";
      resizeButtonProject2.textContent = "Desktop";
    }
  }

  firstProjectLink.addEventListener('click', showFirstProject);

  // iframe buttons
  const hideiFrame = () => {
    event.target.parentElement.classList.add('container-hidden');
  };

  const showDesktop = () => {
    const iFrame = event.target.parentNode.childNodes[1];

    const iFrameListArray = Array.from(iFrame.classList);
    if (iFrameListArray.includes('iFrame-desktop')) {
      event.target.textContent = 'Desktop';
    } else {
      event.target.textContent = 'Mobile';
    }

    iFrame.classList.toggle('iFrame-desktop');
  }

  closeButtonProject1.addEventListener('click', hideiFrame);
  closeButtonProject2.addEventListener('click', hideiFrame);

  resizeButtonProject1.addEventListener('click', showDesktop);
  resizeButtonProject2.addEventListener('click', showDesktop);
}