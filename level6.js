document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'How can I help you?'
    },
    {
      name: '1',
      img: "Ako ti môžem pomôcť?"
    },
    {
      name: '2',
      img: 'Can you have a look on the table?'
    },
    {
      name: '2',
      img: "Môžeš sa pozrieť na stôl?"
    },
    {
      name: '3',
      img: 'It was under the table.'
    },
    {
      name: '3',
      img: 'Bolo to pod stolom.'
    },
    {
      name: '4',
      img: 'I thought it was on the cupboard or near the chair.'
    },
    {
      name: '4',
      img: 'Myslel som, že je to na skrini alebo blízko stoličky.'
    },
    {
      name: '5',
      img: 'I´m building a lego car.'
    },
    {
      name: '5',
      img: "Staviam legové auto."
    },
    {
      name: '6',
      img: 'Look at this small picture.'
    },
    {
      name: '6',
      img: 'Pozri sa na tento malý obrázok.'
    },
    {
      name: '7',
      img: 'There are many strawberries, cherries, raspberries and grapes.'
    },
    {
      name: '7',
      img: 'Je tam veľa jahôd, čerešní, malín a hrozna.'
    },
    {
      name: '8',
      img: 'The pears and apricots are not ripe yet.'
    },
    {
      name: '8',
      img: 'Hrušky a marhule ešte nie sú zrelé.'
    },
    {
      name: '9',
      img: 'Here´s your plate, fork, cup and spoon.'
    },
    {
      name: '9',
      img: 'Tu máš tanier, vidličku, pohár a lyžicu.'
    },
    {
      name: '10',
      img: 'Is this your bag or not?'
    },
    {
      name: '10',
      img: 'Je to tvoja taška alebo nie?'
    },
    {
      name: '11',
      img: 'My doll has got big blue eyes and long hair.'
    },
    {
      name: '11',
      img: 'Moja bábika má veľké modré oči a dlhé vlasy.'
    },
    {
      name: '12',
      img: 'Let´s take scissors and cut out a heart.'
    },
    {
      name: '12',
      img: "Vezmime si nožnice a vystrihneme srdce."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 6 completed!</h2><a href='https://elaidina.github.io/sk/level7.html'> Continue to Level 7</a>";


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
