const cards = document.querySelectorAll('.column');
cards.forEach(card => card.addEventListener('click', flipCard));

let flipped = 0;
let lock = 0;
let fst, snd;
 console.log(this);
function flipCard() {
  console.log(this);
  if (lock) return;
  if (this === fst) return;
  console.log(this.classList);
  this.classList.add('flip');

  if (!flipped) {
    flipped = 1;
    fst = this;

    return;
  }

  snd = this;
  match();
}

function match() {
  let isMatch = fst.dataset.name === snd.dataset.name;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  fst.removeEventListener('click', flipCard);
  snd.removeEventListener('click', flipCard);
   setTimeout(()=>{
  fst.classList.add('white');
  snd.classList.add('white');
  resetBoard();
   },1000);
}

function unflipCards() {
  lock = 1;
  setTimeout(() => {
    
    fst.classList.remove('flip');
    snd.classList.remove('flip');
   

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [flipped, lock] = [0, 0];
  [fst, snd] = [null, null];
}