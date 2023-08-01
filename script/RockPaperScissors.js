let cScore = JSON.parse(localStorage.getItem('score')) || { //shortcut of if statement
  meTot: 0,
  comTot: 0,
  tie: 0
};
console.log(cScore);
updateScoreElem();
// if(!cScore) //cScore === null (if cScore is not true)
// {
//   cScore = {
//     meTot: 0,
//     comTot: 0,
//     tie: 0
//   }
// }

document.querySelector('.js-rock-btn')
  .addEventListener('click', () => {
    comp(0);
  });
document.querySelector('.js-paper-btn')
  .addEventListener('click', () => {
    comp(1);
  });
document.querySelector('.js-scissors-btn')
  .addEventListener('click', () => {
    comp(2);
  });
document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r') { comp(0); }
  else if(event.key === 'p') { comp(1); }
  else if(event.key === 's') { comp(2); }
  else if(event.key === 'Backspace') { showRestartConfirmation(); }
  else if (event.key === 'a') { autoPlay(); }
});


function comp(rpc)
{
  let com = Math.floor(Math.random() * 3);
  let comMove = '', yourMove = '', result = '';
  console.log(com);
  switch(rpc)
  {
    case 0 :
      yourMove = '✊🏻';
      if(com === 1) 
      {
        comMove = '🖐🏻'; 
        result = 'You Lose !';
      }
      else if(com === 0)
      {
        comMove = '✊🏻'; 
        result= 'Tie !';
      }
      else 
      {
        comMove = '✌🏻';
        result = 'You Win !';
      }
      break;
    case 1 :
      yourMove = '🖐🏻';
      if(com === 2) 
      {
        comMove = '✌🏻';
        result =  'You Lose !';
      }
      else if(com === 1)
      {
        comMove = '🖐🏻';
        result =  'Tie !';
      }
      else 
      {
        comMove = '✊🏻';
        result =  'You Win !';
      }
      break;
    case 2 :
      yourMove = '✌🏻';
      if(com === 0) 
      {
        comMove = '✊🏻';
        result =  'You Lose !';
      }
      else if(com === 2)
      {
        comMove = '✌🏻';
        result =  'Tie !';
      }
      else 
      {
        comMove = '🖐🏻';
        result = 'You Win !';
      }
      break;
  }
  fScore(result);
  // alert(`Computer is ${comMove}, ${result}\nYou : ${cScore.meTot}, Computer : ${cScore.comTot}, Tie : ${cScore.tie}`);
  document.querySelector('.js-result')
    .innerHTML = result;
  document.querySelector('.js-play')
    .innerHTML = `You <span class="yourmove">${yourMove}</span>  <span class="commove">${comMove}</span>Computer`;
}

function updateScoreElem()
{
  document.querySelector('.js-score')
    .innerHTML = `You : ${cScore.meTot}, Computer : ${cScore.comTot}, Tie : ${cScore.tie}`;
}

function fScore(result)
{
  if(result === 'You Win !') cScore.meTot++;
  else if(result === 'You Lose !') cScore.comTot ++;
  else cScore.tie++;
  localStorage.setItem('score', JSON.stringify(cScore)); 
//using the localStorage to save the cScore, this can make the score won't back to 0 when we refresh 
  updateScoreElem();
}

document.querySelector('.js-restart-btn')
  .addEventListener('click', () => {
    showRestartConfirmation();
  });
  
function restart()
{
  cScore.meTot = 0;
  cScore.comTot = 0;
  cScore.tie = 0;
  localStorage.removeItem('score'); //removeItem will turn the value into null, so we need to write if statement to give it default value
  updateScoreElem();
}

function showRestartConfirmation()
{
  let confirmMessage = document.querySelector('.js-confirm-message');
  confirmMessage.innerHTML = `
    Are You Sure You Want to Reset the Score? 
    <button class="js-yes-btn reset-confirm-btn">
      Yes
    </button>
    <button class="js-no-btn reset-confirm-btn">
      No
    </button>
  `;
  document.querySelector('.js-yes-btn')
    .addEventListener('click', () => {
      restart();
      confirmMessage.innerHTML = '';
    })
  document.querySelector('.js-no-btn')
    .addEventListener('click', () => {
      confirmMessage.innerHTML = '';
    })
}

let isAutoPlaying = false;
let intervalId;

document.querySelector('.js-autoplay-btn')
  .addEventListener('click', () => {
    autoPlay();
  })

function autoPlay()
{
  const playingBtn =  document.querySelector('.Auto-play');
  if(!isAutoPlaying)
  {
    playingBtn.innerText = 'Stop Playing';
    intervalId = setInterval(() => {
      const playerMove = Math.floor(Math.random() * 3);
      comp(playerMove);
    }, 1500);
    isAutoPlaying = true;
  }
  else 
  {
    clearInterval(intervalId);
    isAutoPlaying = false;
    playingBtn.innerText = 'Auto Play';
  }
  
}
