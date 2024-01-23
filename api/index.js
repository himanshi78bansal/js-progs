const URL = "https://cat-fact.herokuapp.com/facts"; // api link for catFacts
const btn = document.querySelector("button");
const para = document.querySelector(".fact");

// by async-await
// fetch api, converting into text, printing as a para in html page
// const getFacts = async () => {
//     console.log("getting data...");
//     let response = await fetch(URL);
//     console.log(response);  // JSON object
//     let data = await response.json();   // converts into readable text
//     console.log(data);  // prints the actual catFact from API
//     para.innerText = data[1].text;
// }

// by promise-chain
function getFacts(){
    fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then ((data) => {
            console.log(data);
            para.innerText = data[0].text;
        })
}

// eventListener
btn.addEventListener("click", getFacts);
