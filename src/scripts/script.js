
const userCard = document.getElementById("user-card-template");
const cardContainer = document.getElementById("card-container");
const input = document.getElementById("search");

const repoCard = document.getElementById("user-card-template");

input.addEventListener("input", e =>{
    const value = e.target.value;
    console.log(value);
})
async function GetUserData(username){
    const user = await (await fetch("https://api.github.com/users/"+username)).json();
    return user; // returns promise
}

GetUserData("BrianCai35").then(user => {
    document.getElementById("user-avatar").src = user.avatar_url
    document.getElementById("follower-count").textContent = user.followers;
    document.getElementById("following-count").textContent = user.following;
    document.getElementById("username").textContent = user.login;
    document.getElementById("bio-text").textContent = user.bio;
    if(user.location != null){
        document.getElementById("location").textContent = user.followers;
    }
    else{
        document.getElementById("location").classList.toggle("hide");
    }

    const repos = repoCard.content.cloneNode(true).children[0];
    card.getElementsby("[data-header]").textContent = user.login;
    card.querySelector("[data-body]").textContent = user.bio;
    card.querySelector("[data-icon]").src = user.avatar_url;
    console.log(card);
    cardContainer.append(card);

    const card = userCard.content.cloneNode(true).children[0]; // this part requires to be on a seperate method 
    card.querySelector("[data-header]").textContent = user.login;
    card.querySelector("[data-body]").textContent = user.bio;
    card.querySelector("[data-icon]").src = user.avatar_url;
    console.log(card);
    cardContainer.append(card);

}).catch(error => {
    console.log("ERROR: "+ error);
})