//Enable nav links
const links = document.querySelectorAll('.header-nav a');

function linkEnabled(link) {
  if (location.href.includes(link.href)) {
    link.classList.add('enabled');
  }
}

links.forEach(linkEnabled);

//Enable budget items

const parameters = new URLSearchParams(location.search);

function itemEnabled(param) {
  const item = document.getElementById(param);
  if (item) {
    item.checked = true;
  }
}

parameters.forEach(itemEnabled);

//Collapse faq items

const questions = document.querySelectorAll('.faq button');

function enableAnswer(question) {
  question.addEventListener('click', showAnswer);
}

function showAnswer(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute('aria-controls');
  const answer = document.getElementById(controls);

  answer.classList.toggle('enabled');
  const enabled = answer.classList.contains('enabled');
  question.setAttribute('aria-expanded', enabled);

  console.log(answer);
}

questions.forEach(enableAnswer);

// Bike img gallery

const gallery = document.querySelectorAll('.bike-img img');
const galleryContainer = document.querySelector('.bike-img');

function selectImage(image) {
  image.addEventListener('click', setImage);
}

function setImage(event) {
  const image = event.currentTarget;
  const media = matchMedia('(min-width: 937px)').matches;
  if (media) {
    galleryContainer.prepend(image);
  }
}

gallery.forEach(selectImage);

// Animation

if (window.SimpleAnime) {
  new SimpleAnime();
}