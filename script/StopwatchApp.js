const time = document.querySelector('.js-time');
const restartBtn = document.querySelector('.js-restart-btn')
restartBtn.addEventListener('click', () => {
  restartFun();
});
const startBtn = document.querySelector('.js-start-btn')
startBtn.addEventListener('click', () => {
  startFun();
});


let timeSecCount = localStorage.getItem('secTime') || 0;
let timeMinCount = localStorage.getItem('minTime') || 0;

if(timeSecCount < 10)
{
  if(timeMinCount < 10)
  {
    time.innerText = `0${timeMinCount}:0${timeSecCount}`;
  }
  else
  {
    time.innerText = `${timeMinCount}:0${timeSecCount}`;
  }
}
else{
  if(timeMinCount < 10)
  {
    time.innerText = `0${timeMinCount}:${timeSecCount}`;
  }
  else
  {
    time.innerText = `${timeMinCount}:${timeSecCount}`;
  }
}


let isPlaying = false;
function startFun()
{
  if(!isPlaying)
  {
    startBtn.classList.toggle('stop');
    startBtn.innerText = 'Stop';
    intervalId = setInterval(() => {
      timeSecCount++;
      if(timeSecCount < 10)
      {
        if(timeMinCount < 10)
        {
          time.innerText = `0${timeMinCount}:0${timeSecCount}`;
        }
        else
        {
          time.innerText = `${timeMinCount}:0${timeSecCount}`;
        }
      }
      else if(timeSecCount < 60)
      {
        if(timeMinCount < 10)
        {
          time.innerText = `0${timeMinCount}:${timeSecCount}`;
        }
        else
        {
          time.innerText = `${timeMinCount}:${timeSecCount}`;
        }
      }
      else if(timeSecCount === 60)
      {
        timeMinCount++;
        timeSecCount = 0;
        if(timeMinCount < 10) 
        {
          time.innerText = `0${timeMinCount}:00`;
        }
        else {
          time.innerText = `${timeMinCount}:00`;
        }
      }
      localStorage.setItem('secTime', timeSecCount);
      localStorage.setItem('minTime', timeMinCount);
    },1000);
    isPlaying = true;
  }
  else
  {
    clearInterval(intervalId);
    isPlaying = false;
    startBtn.innerText = 'Start';
    startBtn.classList.toggle('stop');
  }
}


function restartFun()
{
  timeSecCount = 0;
  timeMinCount = 0;
  time.innerText = '00:00';
  localStorage.setItem('secTime', timeSecCount);
  localStorage.setItem('minTime', timeMinCount);
}