// Global variables:
//const userList = document.querySelector('.main');


// A request to the JSON server for user information:
const BASE_URL = '';

fetch(BASE_URL)
.then((res) => res.json());
.then((userData) => userData.users.forEach((user) => renderUserPage(user))); // Sends individual user data for rendering



// renderUserPage renders pre-made user pages
// stored in the JSON data base.
// Parameter(s): user object
function renderUserPage(user){
    renderUserList(user);           // Renders the User List at the top of the page

    
}


//adds a user to the status-card elements on the page
function renderUserList(user){
    const username = document.querySelector('.username');
    const profilePic = document.querySelector('.profile-pic');
    const identifier;

    username.textContent = user.name;
    profilePic.src = user.profile;
    identifier = user.id;

    const userInfo = document.querySelector('.status-card')[identifier-1];
    userInfo.appendChild(username);
    userInfo.appendChild(profilePic);
}