let btn2 = document.querySelector('#btn2');
let jsonOutput = document.querySelector('#json-output');

const getJson = () => {
    //fetch('card.json')
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => {
            // console.log(res);
            // if (res.ok)
                return res.json()
            // throw new Error('Error when fetching');
        })
        .then(data => {
            console.log(data);

            jsonOutput.innerHTML = '';

            
                jsonOutput.innerHTML +=
                    `
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">${data.cards[0].code}</h3>
                        <p class="card-text">${data.cards[0].suit}</p>
                        <img class="align-self-start mr-3" src="${data.cards[0].image}" alt="Generic placeholder image">
                    </div>
                </div>
                
                `
            ;

            let img = document.createElement('img');
               img.classList.add('align-self-start','mr-3');
               img['src'] = `${data.cards[0].image}`;
               img['alt'] = 'Generic placeholder image';
               img.setAttribute('alt', `${data.cards[0].code}`);//Test Ok
               jsonOutput.appendChild(img);
               

        })
        .catch(err => console.log('Error: ', err));

    console.log(23);
}

btn2.addEventListener('click', getJson);