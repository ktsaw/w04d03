let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];
document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1
  function shortenPgTitle() { 
  document.querySelector('#main-title').textContent = 'Welcome to DOM Toretto Homepage';
}
  shortenPgTitle();

  // Part 2
  function changeBodyBgColor() {
  document.querySelector('body').style.backgroundColor = 'goldenrod';
}
  changeBodyBgColor();

  // Part 3
  function removeLastFavoriteThing() {
  const favoriteThings = document.querySelectorAll('#favorite-things > li')
  document.querySelector('#favorite-things').removeChild(favoriteThings[favoriteThings.length -1])
  }
  removeLastFavoriteThing();

  //Part 4
  function makeSpecialTitleBigger() { 
  document.querySelectorAll('.special-title').forEach((item) => {
    item.style.fontSize = '2rem'
  })
 }
 makeSpecialTitleBigger();

  // Part 5
  function removeChicagoRace() { 
  document.querySelectorAll('#past-races > li').forEach((item) => {
    if(item.textContent === 'Chicago') {
      document.getElementById('past-races').removeChild(item)
    }
  })
}
  removeChicagoRace();

  // Part 6

  function addPastRace(city) {   
  let newLi = (document.createElement('li').innerText = city);
  document.getElementById('past-races').append(newLi);
 }
 addPastRace('Bangkok')


  // Part 7
  function createNewBlogPost() { 
  const newDiv = document.createElement('div')
  newDiv.className = ('blog-post purple')
  const newH2 = document.createElement('h1')
  newH2.textContent = 'Bangkok'
  const newP = document.createElement('p')
  newP.textContent = 'I COMPETED IN 2022 TOYO RACING CAR THAILAND!'

  document.querySelector('.main').appendChild(newDiv)
  newDiv.appendChild(newH2)
  newDiv.appendChild(newP)
}
  createNewBlogPost()

  // Part 8
  
  document.getElementById('quote-title').addEventListener('click', (e) => { 
  randomQuote()
   })
   

  // Part 9

   document.querySelectorAll('.blog-post').forEach((item) => {
   item.addEventListener('mouseover', (e) => {
     e.target.classList.toggle = ('red')
   })
   item.addEventListener('mouseout', (e) => {
    e.stopPropagation()
    e.target.classList.toggle = ('purple')
   })
   
  })
  

  })