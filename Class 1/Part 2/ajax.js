const url = 'https://swapi.co/api/starships/';
let battleships,previous,next;

$(() => {
    $(`#load`).on('click', () => {
        getData(url);
    })
    $(`#previous`).on('click', () => {
        if(previous){
        getData(previous);
    }
    })
    $(`#next`).on(`click`, () => {
        if(next){
        getData(next);
    }
    })
})

function getData(url) {
    $.ajax({
        url,
        type: 'GET',
        success: data => {
        battleships = data.results;
        previous = data.previous;
        next = data.next;
        showBattleships(battleships);
        },
        error: err => {
            console.log("something went wrong", err);}
    })
}

function showBattleships(battleships){
    $('#battleships-data').html('')
    for(const battleship of battleships){
        $('#battleship-data').append(`
        <tr>
            <td>${battleship.name}</td>
            <td>${battleship.length}</td>
            <td>${battleship.crew}</td>
            <td>${battleship.passengers}</td>
        </tr>`)
    }
}
