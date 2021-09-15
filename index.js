// A request to the JSON server for user information:
const BASE_URL = '';

fetch(BASE_URL)
.then((res) => res.json());
.then((userData) => userData.users.forEach((user) => renderUserPage(user))); // Sends individual user data for rendering



// renderUserPage renders pre-made user pages
// stored in the JSON data base.
// Parameter(s): user object
function renderUserPage(user){
    
    //adds a user to the "Users" list on the page
    const username = document.createElement('p');
    username.textContent = user.name;
    
}