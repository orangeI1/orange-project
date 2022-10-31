import Card from './index.js'


function choiceBtn() {
  let configBtn = document.createElement('button')
  configBtn.classList.add('choice-btn')
  configBtn.innerHTML = 'Начать игру'
  document.getElementById('container').append(configBtn),

  configBtn.addEventListener('click', () => {
      newGame(document.getElementById('game'));
      setTimeout(function(){
        window.location.reload();
     }, 60000);
  })


function newGame(container, choiceInput) {
  let
  cardsNumberArray = [],
  cardsArray = [],
  firstCard = null,
  secondCard = null,


  update = document.createElement('button')
  update.classList.add('update-btn')
  update.innerHTML = 'Начать сначала';


  choiceInput = document.getElementById('inputNumber').value;
    
        container.innerHTML = ''
        cardsNumberArray = [],
        cardsArray = [],
        firstCard = null,
        secondCard = null



  for (let i = 1; i <= choiceInput * 2; i++){
    if ( choiceInput % 2 == 1 || choiceInput > 10) {
      choiceInput = 4,
      cardsNumberArray.push(i),
      cardsNumberArray.push(i)
      }

  else(cardsNumberArray.push(i),
    cardsNumberArray.push(i))
  }

  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5)



  for (const cardNumber of cardsNumberArray) {
  
    cardsArray.push(new Card(container, cardNumber, flip, '100px'));

  };





 function flip(card) {
    if(firstCard !== null && secondCard !== null) {
      if(firstCard.number != secondCard.number) {
        firstCard.open = false
        secondCard.open = false
        firstCard = null
        secondCard = null
      }
    }
    if (firstCard == null){
      firstCard = card
    } else {
     if (secondCard == null){
      secondCard = card
     }
    }
    if(firstCard !==null && secondCard !==null) {
      if(firstCard.number == secondCard.number) {
        firstCard.success = true
        secondCard.success = true
        firstCard = null
        secondCard = null
      }
    }
    if(document.querySelectorAll('.game-content.success').length == cardsNumberArray.length ){
      document.getElementById('game').append(update)
      update.addEventListener('click', () => {
        container.innerHTML = ''
        cardsNumberArray = [],
        cardsArray = [],
        firstCard = null,
        secondCard = null
        
      })
    }

  }


}

}


choiceBtn()

