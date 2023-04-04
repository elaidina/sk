document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'I am taller and bigger than him.'
    },
    {
      name: '1',
      img: 'Som vyšší a väčší ako on.'
    },
    {
      name: '2',
      img: 'But he is weaker than me.'
    },
    {
      name: '2',
      img: 'Ale on je slabší než ja.'
    },
    {
      name: '3',
      img: 'Don ´t exaggerate.'
    },
    {
      name: '3',
      img: 'Nepreháňaj.'
    },
    {
      name: '4',
      img: 'What will be the weather like tomorrow?'
    },
    {
      name: '4',
      img: 'Aké bude zajtra počasie?'
    },
    {
      name: '5',
      img: 'It should rain and be cold.'
    },
    {
      name: '5',
      img: 'Malo by pršať a byť zima.'
    },
    {
      name: '6',
      img: 'Shall I take an umbrella?'
    },
    {
      name: '6',
      img: 'Mám si zobrať dáždnik?'
    },
    {
      name: '7',
      img: 'Please, don´t forget to take an umbrella or a raincoat.'
    },
    {
      name: '7',
      img: 'Prosím, nezabudni si zobrať dáždnik alebo pršiplášť.'
    },
    {
      name: '8',
      img: 'Drink a lot of tea when you´re cold.'
    },
    {
      name: '8',
      img: 'Pi veľa čaju, keď ti je zima.'
    },
    {
      name: '9',
      img: 'Are you feeling sick?'
    },
    {
      name: '9',
      img: 'Je ti zle?'
    },
    {
      name: '10',
      img: 'I´ve been ill for two weeks.'
    },
    {
      name: '10',
      img: 'Bol som chorý dva týždne.'
    },
    {
      name: '11',
      img: 'Dry your hair with this towel.'
    },
    {
      name: '11',
      img: 'Vysušte si vlasy týmto uterákom.'
    },
    {
      name: '12',
      img: 'You need to keep warm.'
    },
    {
      name: '12',
      img: 'Musíš sa udržiavať v teple.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 11 completed!</h2><a href='https://elaidina.github.io/sk/level12.html'> Continue to Level 12</a>";


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
