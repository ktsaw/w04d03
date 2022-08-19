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
  document.querySelector('#main-title').textContent = 'Welcome to DOM Toretto Homepage'


  // Part 2
  document.querySelector('body').style.backgroundColor = 'red'
  
  // Part 3
  //function removeLastFavoriteThing() {
    
  const favoriteThings = document.querySelectorAll('#favorite-things > li')
  document.querySelector('#favorite-things').removeChild(favoriteThings[favoriteThings.length -1])
  //}

  //Part 4

  document.querySelectorAll('.special-title').forEach((item) => {
    item.style.fontSize = '2rem'
  })
  
  // Part 5

  document.querySelectorAll('#past-races > li').forEach((item) => {
    if(item.textContent.trim() === 'Chicago') {
      document.querySelector('#past-races').removeChild(item)
    }
  })


  // Part 6

  let newLi = (document.createElement('li').innerText = 'Bangkok');
  document.getElementById('past-races').append(newLi);

  // const newLi = document.createElement('li')
  // newLi.innerText = 'Bangkok'
  // document.querySelector('#past-races').appendChild('li')


  // Part 7

  const blogPost = document.createElement('div')
  blogPost.classList.add('blog-post')
  const heading = document.createElement('h2')
  heading.textContent = 'Bangkok'
  const pEl = document.createElement('p')
  pEl.textContent = 'I COMPETED IN 2022 TOYO RACING CAR THAILAND!'

  document.querySelector('.main').appendChild(blogPost)
  blogPost.appendChild(heading)
  blogPost.appendChild(pEl)

  // Part 8
  
  document.querySelector('#quote-title').addEventListener('click' , (evt) => {
  randonQuote()

})
  // Part 9

document.querySelectAll ('.blog-post').forEach((item) => {
  item.addEventListener('mouseOut', (evt) => {
    evt.currentTarget.classList.toggle('purple')
  })
  item.addEventListener('mouseEnter', (evt) => {
    evt.stopPropagation()
    evt.currentTarget.classList.toggle('red')
  })
})

});
