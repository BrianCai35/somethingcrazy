
const userCard = document.getElementById("user-card-template");
const cardContainer = document.getElementById("card-container");
const input = document.getElementById("search");

input.addEventListener("input", e=>{
    const value = e.target.value;
    console.log(value);
})
async function GetUserData(username){
    const user = await (await fetch("https://api.github.com/users/"+username)).json();
    return user; // returns promise
}

GetUserData("BrianCai35").then(user => {
    const card = userCard.content.cloneNode(true).children[0];
    const header = card.querySelector("[data-header]");
    const body = card.querySelector("[data-body]");
    header.textContent = user.login;
    body.textContent = user.bio;
    console.log(card);
    cardContainer.append(card);
}).catch(error => {
    console.log("ERROR: "+ error);
})