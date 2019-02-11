<<<<<<< HEAD
const urlPeople = 'https://swapi.co/api/people/';
const url2 = 'https://swapi.co/api/planets/';
const urlBattleships =  'https://swapi.co/api/starships/';
let previous, next;
let people = [];
let planets = [];
let battleships = [];


$(() => {
    $('#goHome').on('click', () => {
        $('#body').html('');
        $('.logo').removeClass('display-none')
        $('#table').addClass('display-none')
        $('#people').addClass('display-none')
        $('#planets').addClass('display-none')
    })
    $('#getPeople').on('click', () => {
        getCharatersData(urlPeople)
    })
    $('#getPlanets').on('click', () => {
        getCharatersData(url2);
    })
    $('#getBattleships').on('click', () => {
        getCharatersData(urlBattleships);
    })
    $('#search').on("click", () => {
        findPlanet(planets, input.value)
    });
})
let getCharatersData = (url) => {
    if(url == urlPeople){
        $('#body').html('');
    $('.logo').addClass('display-none')
    $('#table').removeClass('display-none')
    $('#people').removeClass('display-none')
    $('#planets').addClass('display-none')
    $('#battleships').addClass('display-none')
    $('#spinner').html('<img class="text-center" src="./assets/spinner3.gif">');

    people.length ? 
    populateTable(people) :
    fetchData(url,people,populateTable);
    } else if (url == url2) {
        $('#body').html('');
    $('.logo').addClass('display-none')
    $('#table').removeClass('display-none')
    $('#people').addClass('display-none')
    $('#planets').removeClass('display-none')
    $('#battleships').addClass('display-none')
    $('#spinner').html('<img class="text-center" src="./assets/spinner3.gif">');

    planets.length ? 
    populateTable(planets) :
    fetchData(url2,planets,populateTable)
    } else if (url == urlBattleships) {
    $('#body').html('');
    $('.logo').addClass('display-none')
    $('#table').removeClass('display-none')
    $('#people').addClass('display-none')
    $('#planets').addClass('display-none')
    $('#battleships').removeClass('display-none')
    $('#spinner').html('<img class="text-center" src="./assets/spinner3.gif">');

    battleships.length ? 
    populateTable(battleships) :
    fetchData(urlBattleships,battleships,populateTable)
    }
}
const fetchData = (url,array,callback) => {
    fetch(url).then(r => r.json())
    .then(r => { 
        array.push(...r.results)
        return r
        
    })
    .then(r => {
        console.log(r)
        r.next ? 
        fetchData(r.next,array,callback) : 
        callback(array);
    })
}
let populateTable = array => {
    $('#spinner').html('')
    $('#body').html('');
    const formated = formatData(array);
    if(array == people) {
        for(let person of formated) {
          $('#body').append(`
           <tr>
           <td>${person.name}</td>
           <td>${person.gender}</td>
           <td>${person.birth_year}</td>
           <td>${person.height}</td>
           <td>${person.mass}</td>
           </tr>
          `)
        }
    } else if (array == planets) {
        for( let planet of planets) {
            console.log(planet)
        $('#body').append(`
         <tr>
         <td>${planet.name}</td>
         <td>${planet.diameter}</td>
         <td>${planet.climate}</td>
         <td>${planet.terrain}</td>
         <td>${planet.rotation_period}</td>
         <td>${planet.population}</td>
         </tr>
          `)
    }
} else if (array == battleships) {
    for( let battleship of battleships) {
    $('#body').append(`
     <tr>
     <td>${battleship.name}</td>
     <td>${battleship.model}</td>
     <td>${battleship.cost_in_credits}</td>
     <td>${battleship.crew}</td>
     <td>${battleship.passengers}</td>
     </tr>
      `)
}
}
   
}
const formatData = people => {
    return people.map(p => {
=======
const peopleUrl = 'https://swapi.co/api/people/';
const planetsUrl = 'https://swapi.co/api/planets/';
const people = [];
const planets = [];

$(() => {
    $('#goHome').on('click', showLogo)
    $('#getPeople').on('click', () => {
        showPeople()
        getData(peopleUrl)
    })
    $('#getPlanets').on('click', () => {
        showPlanets()
        getData(planetsUrl)
    })
})
let getData = (url) => {
    people.length ? 
    populateTable(people) :
    fetchData(url)    
}
const getPlanetsData = (url) => {
    planets.length ? 
    populatePlanetsTable(planets) :
    fetchData(url)    
}

const fetchData = async url => {
    let data = await fetch(url);
    data = await data.json();
    let results = data.results;
    if (url === peopleUrl) {
        people.push(...results);
        populateTable(people);
    } else if (url === planetsUrl) {
        planets.push(...results);
        populatePlanetsTable(planets);
    } else {
        console.log("errror")
    }
}
// const fetchPlanets = url => {
//     fetch(url).then(r => r.json())
//     .then(r => { 
//         planets.push(...r.results)
//         return r
//     })
//     .then(r => {
//         console.log(r)
//         r.next ? 
//         fetchPlanets(r.next) : 
//         populatePlanetsTable(planets)
//     })
// }

let populateTable = (people) => {
    $('#spinner').html('')
    $('#body').html('');
    let keys = Object.keys(...people)
    let values = Object.values(...people)
    for (let i = 0; i < keys.length; i++){
        $(`#body`).append(`<th>${keys[i]}</th>`);
        $(`#body`).append(`<tr>`)
    }
    for (let k = 0; k < values.length; k++) {
        $(`#body`).append(`<td>${values[k]}</td>`);
    }
   
    $(`#body`).append(`</tr>`)
}

// populateTable(people)
// let populatePlanetsTable = (planets) => {
//     $('#spinner').html('')
//     $('#body').html('');
//     for (let planet of planets) {
//         $('#body').append(`
//                 <tr>
//                 <td>${planet.name}</td>
//                 <td>${planet.diameter}</td>
//                 <td>${planet.climate}</td>
//                 <td>${planet.terrain}</td>
//                 <td>${planet.rotation_period}</td>
//                 <td>${planet.population}</td>
//                 </tr>
//                 `)
//     }
// }

const showLogo = () => {
    $('#body').html('');
    $('.logo').removeClass('display-none')
    $('#table').addClass('display-none')
    $('#people').addClass('display-none')
    $('#planets').addClass('display-none')
}
const showPeople = () => {
    $('#body').html('');
    $('.logo').addClass('display-none')
    $('#table').removeClass('display-none')
    $('#people').removeClass('display-none')
    $('#planets').addClass('display-none')
    $('#spinner').html('<img class="text-center" src="./assets/spinner3.gif">');
}

const showPlanets = () => {
    $('#body').html('');
    $('.logo').addClass('display-none')
    $('#table').removeClass('display-none')
    $('#people').addClass('display-none')
    $('#planets').removeClass('display-none')
    $('#spinner').html('<img class="text-center" src="./assets/spinner3.gif">');
}

const formatData = people => {
    return people.map(p => {
        // let obj = Object.assign({}, p, { height: p.height + 'cm', mass: p.mass + 'kg' })
>>>>>>> added changes
        let obj = {
            ...p,
            height: p.height !== 'unknown' ? p.height + 'cm' : p.height,
            mass: p.mass !== 'unknown' ? p.mass + 'kg' : p.mass
        }
<<<<<<< HEAD
        return obj
    })
}
let findPlanet = (planets, input) => {
    let result = planets.filter(arr => arr.terrain === input)
    populatePlanetsTable(result);
}
=======
        // p.height += 'cm'
        // p.mass += 'kg'
        return obj
    })
}

let findCharacter = (data, keyword) => {
    let result = data .filter(res => res.name.search(keyword) >= 0);
    populateTable(result);
}

$('#search').on('click', () => {
    let keyword = $('#inputVal').val();
    findCharacter(people,keyword);
})
>>>>>>> added changes
