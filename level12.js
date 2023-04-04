document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: "I´ll make a tea for you."
    },
    {
      name: '1',
      img: 'Uvarím ti čaj.'
    },
    {
      name: '2',
      img: "He´s got a sore throat and a headache."
    },
    {
      name: '2',
      img: 'Bolí ho hrdlo a hlava.'
    },
    {
      name: '3',
      img: 'They all have a tummy-ache.'
    },
    {
      name: '3',
      img: 'Všetkých ich bolí bruško.'
    },
    {
      name: '4',
      img: "What´s the matter with me?"
    },
    {
      name: '4',
      img: 'Čo je to so mnou?'
    },
    {
      name: '5',
      img: 'We must stay at home.'
    },
    {
      name: '5',
      img: 'Musíme zostať doma.'
    },
    {
      name: '6',
      img: "I don´t want to catch a cold."
    },
    {
      name: '6',
      img: 'Nechcem prechladnúť.'
    },
    {
      name: '7',
      img: 'I keep eating a lot of fruits and vegetables and drinking warm tea with lemon and honey.'
    },
    {
      name: '7',
      img: 'Stále jem veľa ovocia a zeleniny a pijem teplý čaj s citrónom a medom.'
    },
    {
      name: '8',
      img: 'Wipe your nose with a hanky.'
    },
    {
      name: '8',
      img: 'Utri si nos vreckovkou.'
    },
    {
      name: '9',
      img: 'Come along with me.'
    },
    {
      name: '9',
      img: 'Poď so mnou.'
    },
    {
      name: '10',
      img: 'You can help me if you like.'
    },
    {
      name: '10',
      img: 'Môžeš mi pomôcť, ak chceš.'
    },
    {
      name: '11',
      img: 'She will come back in the afternoon.'
    },
    {
      name: '11',
      img: 'Poobede sa vráti.'
    },
    {
      name: '12',
      img: 'I want to watch TV in the evening.'
    },
    {
      name: '12',
      img: "Chcem večer pozerať televíziu."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 12 completed!</h2><a href='https://elaidina.github.io/sk/level13.html'> Continue to Level 13</a>";


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
