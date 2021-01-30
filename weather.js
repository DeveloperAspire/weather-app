const input = document.querySelector('#input');
const button = document.querySelector('#btn');
const main = document.querySelector('#main')
const API_KEY = "b105b567c61b28d125394d46e920bd31"




// THIS FUNCTION FETCHS THE API DATA 

function fetchData(){
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}`

    fetch(URL)
    .then((response)=> response.json())
    .then( (data)=> displayData(data) )

    // CLEAR INPUT

setTimeout(()=>{
    input.value= ""
   },700)
}

// THIS FUNCTION DISPLAYS THE DATA TO THE HTML PAGE

function displayData(data){

  // THIS WAY CHANGES THE DATA AND NOT MAKE ANOTHER DIV
let finalresults = `
<section class="weather-card">
<div class="title">
    <h2>${data.name} city, ${data.sys.country}</h2>
    <h3>${data.weather[0].main}</h3>
</div>

<div class="card-body">
    <p class="para">Temperature:${data.main.temp} </p>
    <p  class="para"> Pressure: ${data.main.pressure}</p>
    <p  class="para"> Humidity: ${data.main.humidity}</p>
    <p  class="para">Weather state: ${data.weather[0].description}</p>
</div>
</section>`
       
main.innerHTML= finalresults

   
 // THIS WAY ADD/APPEND THE DATA MAKING MULTIPLE RESULTS

//        // CREATE SECTION 
//        const section = document.createElement('section');
//         section.classList.add('weather-card');

//         // CREATE  TITLE DIV
//        const titleDiv = document.createElement('div');
//         titleDiv.classList.add('title')

// // CREATE HEADING TITLE
//       const heading= document.createElement('h1');
//      heading.innerText= `${data.name} city, ${data.sys.country}`
//         const subHeading = document.createElement('h3');
//         subHeading.innerText = `${data.weather[0].main}`

//         //APPEND TO TITLE DIV
//       titleDiv.appendChild(heading);
//       titleDiv.appendChild(subHeading);

//      //  CREATE CARD DIV
//      const cardDiv = document.createElement('div')
//         cardDiv.classList.add('card-body')

//       // CREATE THE PARAGRAPHS
//        const p1 = document.createElement('p');
//      p1.classList.add('para')
//        p1.innerText = `Temperature: ${data.main.temp} deg`

//      const p2 = document.createElement('p');
//        p2.classList.add('para')
//        p2.innerText = `Pressure: ${data.main.pressure}`

//        const p3 = document.createElement('p');
//        p3.classList.add('para')
//         p3.innerText = `Humidity: ${data.main.humidity}`

//         const p4 = document.createElement('p');
//        p4.classList.add('para')
//        p4.innerText = `Weather State: ${data.weather[0].description}`

//        // APPEND PARAGRAPHS TO CARD DIV
//        cardDiv.appendChild(p1)
//        cardDiv.appendChild(p2)
//         cardDiv.appendChild(p3)
//        cardDiv.appendChild(p4)

//         // APPEND TITLE AND CARD DIV TO SECTION
//         section.appendChild(titleDiv)
//         section.appendChild(cardDiv)

//         // ADD TO MAIN
       
//        main.appendChild(section)
   



}

// CLICK EVENT FIRES FROM HERE  

button.addEventListener('click',fetchData)