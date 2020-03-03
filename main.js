let convertButton = document.getElementById  ('convertButton');
let resultArea = document.getElementById ('resultArea');
let useramountinput = document.getElementById ('amount')

// async function callApi(currency) {
//     let url = 'https://free.currconv.com/api/v7/convert?q=${currency+"_VND"}&compact=ultra&apiKey=6ea88fb993f143c9af0d');
//     let result = await fetch(url);
//     let json = await result.json();
//     updateResults(json);
// }

// function updateResults(response) {
//   console.log(response);
// }

// let json = {'USD_VND': 23225.986}
// console.log(json['USD_VND'])


//EXCHANGE RATIO
const currencyRatio = {
    vnd:{
        usd: 0.000043,
        krw: 0.051,
        eur: 0.000039,
        vnd: 1,
    },
    usd:{
        usd: 1,
        krw: 1193.27,
        eur: 0.90,
        vnd: 23235.50
    },
    krw:{
        usd: 0.00084,
        krw: 1,
        eur: 0.00075,
        vnd: 19.47,
    },
    eur:{
        usd: 1.11,
        krw: 1325.07,
        eur: 1,
        vnd: 25799.89,
    }
}

//FUNCTION

function calculation() {
    let from = document.getElementById('input-currency').value;
    let to = document.getElementById('output-currency').value;
    let currency = currencyRatio[from.toLowerCase()][to.toLowerCase()]
    let amount = useramountinput.value;
    let result = amount * currency;
    resultArea.innerHTML = `result is ${result}`;
}


// instuctor's example

// const employee = {
//     charles: {
//         age: 34,
//         salary: 40000,
//     },

//     nguyen: {
//         age: 22,
//         salary: 20000,
//     }
// }

// console.log(employee['charles']['salary'])