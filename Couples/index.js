export default class Card {


  _open = false
  _success = false

    constructor(container, number, action, cardSize) {
       this.card = document.createElement('div')
       this.card.classList.add('game-content')
       this.card.textContent = number
       this.number = number
       this.card.style.width = cardSize
       this.card.style.height = cardSize
       

       
       this.card.addEventListener('click', () => {

        if ( this.open == false && this.success == false) {
          this.open = true
          action(this)
        }
      })



      container.append(this.card)

  }


  set open(value) {
    this._open = value
    if (value){
      this.card.classList.add('open')
    }
    else {
      this.card.classList.remove('open')
    }
  }

  get open() {
    return this._open
  }

  set success (value) {
    this._open = value
    if (value){
      this.card.classList.add('success')
    }
    else {
      this.card.classList.remove('success')
    }
  }
  get success() {
    return this._success
  }

}


function bra(card) {
  console.log(card);
}
