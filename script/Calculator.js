
let calculation = localStorage.getItem('calculation') || ' ';


showCalculation();

function calculate(value){
  calculation += value;
  console.log(calculation);
  showCalculation();

  localStorage.setItem('calculation', calculation);
}

function equal()
{
  calculation = eval(calculation);
  //eval() is a function that will turn number string into number and return the calculation
  showCalculation();
}

function reset(){
  calculation = '';
  showCalculation();
  console.log(localStorage.removeItem('calculation'));
}

function showCalculation()
{
  document.querySelector('.js-total')
    .innerHTML = calculation;
}