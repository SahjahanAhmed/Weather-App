// all constants
const inputEl = document.getElementById('inp')
const bottom = document.querySelector('.bottom')
const form = document.querySelector('form')
const sun = bottom.querySelector('.sun')



// form submit
const handleSubmitForm = async (e) => {
  e.preventDefault()
  if (inputEl.value == '') return

  // api link
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputEl.value.toLocaleLowerCase()}&units=imperial&appid=c7aeffdb8a408e486ea2c3348c1a6fd4`

  // fetching weathers
  fetch(url).then(res => res.json()).then(data => {

    // fahrenheit to celsius
    const celsius = ((data.main.temp - 32) * 5 / 9)

    // how is the weather!!
    let state =
      celsius <= 16 ? 'Cool' :
      celsius > 16 && celsius <= 28 ? 'Warm' :
      celsius > 28 && celsius <= 36 ? 'Hot' :
      'Too hot';


    // showing weather in bottom section
    bottom.innerHTML = `
   <h1>${state}</h1>
   <div class='icons'>
   <img src=${state == 'Cool' ? './images/snow.png' : './images/sun.png'} class= 'icon anim' style=${state == 'Hot' && 'height:80px;width:80px;' || state == 'Too hot' && 'height:80px;width:80px;' }/>
   </div>
   
     <div>
     <p>${celsius.toFixed()}° c </p> 
     <p> ${data.main.temp.toFixed()}° f</p>
     </div>
     
     <div>
     <span>Wind: ${data.wind.speed} mph</span> 
     <span > Humadity: ${data.main.humidity}% 
     </span>
     </div> 
     
     <div>
     <h2>${data.name},  ${data.sys.country}
     </h2>
      </div>`

  })
}


form.addEventListener('submit', handleSubmitForm)