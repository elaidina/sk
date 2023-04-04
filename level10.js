document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Drawing is difficult.'
    },
    {
      name: '1',
      img: 'Kreslenie je ťažké.'
    },
    {
      name: '2',
      img: 'How do you build a house?'
    },
    {
      name: '2',
      img: 'Ako staviaš dom?'
    },
    {
      name: '3',
      img: 'The house consists of walls, a roof, windows, a chimney, a fence and a door.'
    },
    {
      name: '3',
      img: 'Dom sa skladá zo stien, strechy, okien, komína, plotu a dverí.'
    },
    {
      name: '4',
      img: 'The blue ball is bigger than the red ball.'
    },
    {
      name: '4',
      img: 'Modrá guľa je väčšia ako červená guľa.'
    },
    {
      name: '5',
      img: 'Which ball is the biggest?'
    },
    {
      name: '5',
      img: 'Ktorá lopta je najväčšia?'
    },
    {
      name: '6',
      img: 'I would like to learn an English song.'
    },
    {
      name: '6',
      img: 'Rád by som sa naučil anglickú pesničku.'
    },
    {
      name: '7',
      img: 'We can call Mary.'
    },
    {
      name: '7',
      img: 'Môžeme zavolať Mary.'
    },
    {
      name: '8',
      img: "She´s a very good singer."
    },
    {
      name: '8',
      img: 'Je to veľmi dobrá speváčka.'
    },
    {
      name: '9',
      img: 'Listen, do you know this song?'
    },
    {
      name: '9',
      img: 'Počuj, poznáš túto pesničku?'
    },
    {
      name: '10',
      img: 'There is a brilliant book on the shelf.'
    },
    {
      name: '10',
      img: 'Na poličke je skvelá kniha.'
    },
    {
      name: '11',
      img: 'I often read this book.'
    },
    {
      name: '11',
      img: 'Často čítam túto knihu.'
    },
    {
      name: '12',
      img: 'I am too short to reach the book on the shelf.'
    },
    {
      name: '12',
      img: 'Som príliš nízky na to, aby som dosiahol na knihu na poličke.'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 10 completed!</h2><a href="https://elaidina.github.io/sk/level11.html"> Continue to Level 11</a>';


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
