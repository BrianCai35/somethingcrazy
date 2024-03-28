
const userCard = document.getElementById("user-card-template");
const cardContainer = document.getElementById("card-container");
const input = document.getElementById("search");
const reposContainer = document.getElementById("repos-container");
const currentUser = "BrianCai35" // this is used purely for debugging purposes

const repoCard = document.getElementById("repo-card");

input.addEventListener("input", e =>{
    const value = e.target.value;
    console.log(value);
})

async function GetUserData(username){
    const user = await (await fetch("https://api.github.com/users/"+username)).json();
    return user; // returns promise
}

async function GetReposData(username){
    const reposData = await (await fetch("https://api.github.com/users/"+username+"/repos")).json();
    return reposData; // returns promise
}

function getDate(date){
    return date()
}

GetUserData(currentUser).then(user => { 
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

    const card = userCard.content.cloneNode(true).children[0]; // this part requires to be on a seperate method 
    card.querySelector("[data-header]").textContent = user.login;
    card.querySelector("[data-body]").textContent = user.bio;
    card.querySelector("[data-icon]").src = user.avatar_url;
    console.log(card);
    cardContainer.append(card);

}).catch(error => {
    console.log("ERROR: "+ error);
})

GetReposData(currentUser).then(reposData =>{
    //(reposData).forEach(element => {
        console.log(reposData);
        const repos = repoCard.content.cloneNode(true).children[0];
        repos.querySelector('[repo-name]').textContent = reposData[0].name; // query selector is used because i literally have no other idea how to solve this
        repos.querySelector("[repo-forks]").textContent = reposData[0].forks_count;
        repos.querySelector("[repo-stars]").textContent = reposData[0].stargazers_count;
        repos.querySelector("[repo-time]").textContent = reposData[0].updated_at;
        

        if(reposData[0].licence != null){
            repos.querySelector("[repo-licence]").textContent = reposData[0].license;
        }
        else{
            repos.querySelector("[repo-licence]").classList.toggle("hide");
        }
        if(reposData[0].description != null){ // may change for styiung purposes
            repos.querySelector("[repo-description]").textContent = repos[0].description;
        }
        else{
            repos.querySelector("[repo-description]").classList.toggle("hide");
        }
        reposContainer.append(repos);
    //});

})
