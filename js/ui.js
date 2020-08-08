//dynamically creates h1 element
function createHeading1(text, question, colour){
  console.log('Creating heading1');
  //variable h1 defined and h1 element created and appended to html
  var h1 = document.createElement('H1');
  getElement().appendChild(h1);
  //variable heading defined and appended to the h1 element.
  heading = document.createTextNode(text);

  //if the heading is a question and there is a colour specified, then style it with that colour
  if(question) {
    h1.style.color = colour
  }

  h1.appendChild(heading);
}

//gets area element
function getElement() {
  return document.getElementById('area')
}

// create img element and assign the logo image as the source
function createLogo(image){
  console.log('Creating logo')
  var logo = document.createElement('img');
  logo.src = image;
  //add the logo class
  logo.classList.add("logo");
  getElement().appendChild(logo);
}

//creates an image element with optional source, class, and alternate text
function createImage(image, className, altText){
  console.log("Creating image element");
  var element = document.createElement('img');
  element.src = image;
  element.classList.add(className);
  element.setAttribute("alt", altText);
  getElement().appendChild(element);
}

// creates a paragraph
function createParagraph(paragraphText){
  console.log("Creating paragraph");
  // create a p tag, and refer to it locally as "paragraph"
  var p = document.createElement("p");
  getElement().appendChild(p);
  splashIntro = document.createTextNode(paragraphText);
  p.appendChild(splashIntro);
}

// creates text input
function createTextInput(type){
  console.log("Creating text input");
  // create a text input, and refer to it locally as "text input"
  var element = document.createElement("input");
  getElement().appendChild(element);
  if(type) {
    element.style.display = 'block';
    element.style.margin = 'auto';
  }

  element.setAttribute("type", "text");
  return element;
}

// creates button
function createButton(label, answer){
  console.log("Creating button");
  // create a button, and refer to it locally as "button"
  window.btn = document.createElement("button");
  //determine if button is an answer button
  if (answer) btn.setAttribute("id", "answer");
  btn.innerHTML = label;
  getElement().appendChild(btn);
  return btn;
}

//create a HTML linebreak element
function createLineBreak(){
  linebreak = document.createElement("br");
  document.body.appendChild(linebreak);
}
