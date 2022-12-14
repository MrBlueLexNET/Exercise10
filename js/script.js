
/***********************************/
/* Uppgift 1: Star Wars Biometrics */
/***********************************/
const form = document.querySelector('#frm1');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let peopleName = e.target[0].value;
    document.getElementById("commentTextArea").innerHTML = "Searching: " + peopleName;
    getSwapiTech(peopleName);

    //e.target.reset();
})


/*****peopleName*****/
const apiEndpoint = 'people/?name='; //people, planets or starships
//const peopleName = 'chewbacca';

const getSwapiTech = (peopleName) => {

    fetch(`https://www.swapi.tech/api/${apiEndpoint}${peopleName}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => {
            if (res.ok)
                return res.json();
            throw new Error('Failed to get repos');
        })
        .then(data => {
            // console.log(data);
            // const myArray = Object.values(data);
            // const myArray2 = Object.keys(data);
            // console.log(data.result[0].description);
            // console.log(data.result[0].properties.name);

            let s = `Name: ${data.result[0].properties.name}, Year of birth: ${data.result[0].properties.birth_year}, Home world: ${data.result[0].properties.homeworld}, Reference: ${data.result[0].properties.url} `;
            
            document.getElementById("commentTextArea").innerHTML = s;
            

                // `
                //     <div class="card">
                //     <div class="card-body">
                //     <h5 class="card-title">${data.result[0].properties.name}</h5>
                //     <p class="card-text">Born ${data.result[0].properties.birth_year} </p>
                //     <a href="${data.result[0].properties.homeworld}" class="card-link">${data.result[0].properties.name}</a>
                //     <a href="${data.result[0].properties.url}" class="card-link">Reference</a>
                //     </div>
                //     </div>
                //       `


        })
        .catch(err => console.log('ERROR: ' + err));
}

