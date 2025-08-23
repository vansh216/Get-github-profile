let url= "https://api.github.com/users/";
const inputEl= document.getElementById("search");
const searchBtn=document.getElementById("searchBtn")
const div=document.querySelector(".card")

const  generateprofile=  (profile)=>{
    return(`
            <div class="intro">
                <img src="${profile.avatar_url}">
                <h2>
                    <ul>
                        <li>${profile.name}</li>
                        <li>${profile.email}</li>
                    </ul>
                </h2>

                <button id="profile"><a href="${profile.html_url}">Check Profile</a></button>
            </div>
            <div class="about">
                <h1>About</h1>
                <p>${profile.bio}</p>
            </div>
            <div class="follow">
                <div><h2>Followers</h2><h1>${profile.followers}</h1></div>
                 <div><h2>Followings</h2><h1>${profile.following}</h1></div>
                  <div><h2>Post</h2><h1>${profile.public_repos}</h1></div>
            </div>
            `)
}

const getsprofile= async()=>{
    const username=inputEl.value
    try{

        const res =await fetch(`${url}${username}`)
        const a= await res.json();
        console.log(a)
            div.innerHTML=generateprofile(a);
      
        
    }catch(error){
        console.log({error})
    }

}
searchBtn.addEventListener("click",()=>{
    getsprofile()
    div.classList.remove("none")
    
})


// https://api.github.com/users/defunkt
