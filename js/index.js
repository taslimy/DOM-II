// Your code goes here

// 1 //

// Select Dom Element
const header = document.querySelector('header');
// Create Event Listener
header.addEventListener('mouseover', event);
// Event Listener Call Back
header.addEventListener('mouseover', event => {
  header.style.backgroundColor = 'orange';
});

// 2 //
// Create Event Listener
header.addEventListener('dblclick', event);
// Event Listener Call Back
header.addEventListener('dblclick', event => {
  const headerNavText = header.querySelectorAll('a');
  headerNavText.forEach(param => {
    param.style.color = 'aqua';
  });
});

// 3 //
window.addEventListener('keydown', event);
window.addEventListener('keydown', event => {
  alert(`Hi! You pressed a key, In this case that key was '${event.key}' or keyNumber:'${event.keyCode}'`);
});

// 4 //

//  dblClick
const imgClick = document.querySelector('img');
console.log(imgClick);

imgClick.addEventListener('dblclick', event);

imgClick.addEventListener('dblclick', event => {
  imgClick.style.display = 'none';
});

// 5 //

// Select Dom Element
const bodyElement = document.querySelector('body');
console.log(bodyElement);
// Create Event Listener
bodyElement.addEventListener('wheel', event);

// 6 //
// Select Dom Element

const textContentClass = document.querySelectorAll('.text-content p');
console.log(textContentClass);

// Event Listener Callback
textContentClass.forEach(paragraph => {
  paragraph.addEventListener('mouseover', () => {
    paragraph.style.fontFamily = 'cursive';
    paragraph.style.color = 'green';
  });
});

// 7 //
// MouseOut

textContentClass.forEach(paragraph => {
  paragraph.addEventListener('mouseout', () => {
    paragraph.style.fontFamily = 'monospace';
  });
});

// 8 //

// Select Dom Element
const destinationClass = document.querySelectorAll('.destination');
console.log(destinationClass);

// Event Listener Callback
destinationClass.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.backgroundColor = 'yellow';
    card.style.padding = '15px';
  });
});

// 9 //

// mouseover
const btmButton = document.querySelectorAll('.btn');
btmButton.forEach(card => {
  card.addEventListener('mouseover', event => {
    card.style.backgroundColor = 'purple';
    card.style.color = 'white';
  });
});

// 10 //

const imgRemove = document.querySelector('.img-content');
console.log(imgClick);

imgRemove.addEventListener('click', event => {
  imgRemove.style.display = 'none';
  alert('This image will now be removed!');
});

// Stop Nav!
// preventDefault() //

// Select Dom Element
const navItems = document.querySelectorAll('nav a');
console.log(navItems);

navItems.forEach(aTag => {
  aTag.addEventListener('click', event => {
    event.preventDefault();
  });
});

// event.stopPropagation()
paragraphs = document.querySelectorAll('p');
intro = document.querySelector('.intro');
intro.addEventListener('copy', function (event) {
  alert('This will copy the H2.');
})

// this will alert you when the paragraph is copied.
paragraphs.forEach(node => {
  node.addEventListener('copy', function (event) {
    event.stopPropagation();
    alert('para has been copied.');
  })
})