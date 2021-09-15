// A request to the JSON server for user information:
const BASE_URL = 'http://localhost:3000/users';

fetch(BASE_URL)
.then((res) => res.json())
.then((userData) => userData.forEach((user, index) => renderUserPage(user, index))) // Sends individual user object for rendering



// renderUserPage renders pre-made user pages
// stored in the JSON data base.
// Parameter(s): current user object, current index
function renderUserPage(user, index){
    renderUserBar(user, index);           // Renders the User Bar at the top of the page   
}


// adds a user to the status-card elements on the page
function renderUserBar(user, index){
    const profilePic = document.getElementById(`profile-pic-${index+1}`);
    const username = document.getElementById(`username-${index+1}`);

    profilePic.src = user.profile;
    username.textContent = user.name;
}