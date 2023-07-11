document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Don´t stand near the cooker.'
    },
    {
      name: '1',
      img: 'Nestojte blízko sporáka.'
    },
    {
      name: '2',
      img: 'It is very hot and you might burn yourself.'
    },
    {
      name: '2',
      img: 'Je to veľmi horúce a môžete sa popáliť.'
    },
    {
      name: '3',
      img: 'Oh no, I have spilt my milk.'
    },
    {
      name: '3',
      img: 'Ach nie, rozlial som mlieko.'
    },
    {
      name: '4',
      img: 'Tom went to fetch a mop from the cleaning cupboard.'
    },
    {
      name: '4',
      img: 'Tom išiel po mop z upratovacej skrine.'
    },
    {
      name: '5',
      img: 'Inside the cupboard were all the things we need to keep the house clean.'
    },
    {
      name: '5',
      img: 'V skrini boli všetky veci, ktoré potrebujeme na udržanie čistoty v dome.'
    },
    {
      name: '6',
      img: 'What a lot of bottles!'
    },
    {
      name: '6',
      img: 'Aké množstvo fliaš!'
    },
    {
      name: '7',
      img: 'I keep the cupboard door locked.'
    },
    {
      name: '7',
      img: 'Dvere skrine nechávam zamknuté.'
    },
    {
      name: '8',
      img: 'After tea we watched a film on TV.'
    },
    {
      name: '8',
      img: 'Po čaji sme pozerali film v televízii.'
    },
    {
      name: '9',
      img: 'The cat played on the floor.'
    },
    {
      name: '9',
      img: 'Mačka sa hrala na podlahe.'
    },
    {
      name: '10',
      img: 'The cat has a tiny toy.'
    },
    {
      name: '10',
      img: 'Mačka má maličkú hračku.'
    },
    {
      name: '11',
      img: 'Spit it out!'
    },
    {
      name: '11',
      img: 'Vypľuj to!'
    },
    {
      name: '12',
      img: 'You could swallow it and choke.'
    },
    {
      name: '12',
      img: 'Mohli by ste to prehltnúť a udusiť sa.'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
     if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

cards[optionOneId].parentElement.classList.remove("green")
      

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 32 completed!</h2><a href='https://elaidina.github.io/sk/level33.html'> Continue to Level 33</a>";


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
