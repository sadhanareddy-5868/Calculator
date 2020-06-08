const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

for (let i=0; i< btns.length;i++){
    btns[i].addEventListener("click", function(){
        let number = btns[i].getAttribute('data-num');
      screen.value += number;
    })
}
equalBtn.addEventListener("click",function(){
    if(screen.value === ''){
   alert('input is empty')
}
else {
let value = eval(screen.value)
screen.value = value
}
 })
clearBtn.addEventListener('click', function(){
    screen.value = '';
})
//let para = document.querySelector("p");

select.addEventListener("change", setWeather);


function setweather() {
  let choice = select.value;
  let  select = document.querySelector('select');
  switch (choice) {
    case "sunny":
      para.textContent = "It is nice and sunny outside today. Wear shorts! </br>
Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent = 'Rain is falling outside; take a rain coat and a brolly, </br>
and don\'t stay out for too long.';
      break;
    case "snowing":
      para.textcontent = 'The snow is coming down — it is freezing! </br>
Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case "overcast":
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy;</br>
 it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  
}
} //