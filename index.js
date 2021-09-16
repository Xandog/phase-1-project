document.addEventListener('DOMContentLoaded', function(){
    // A request to the JSON server for user information:
    const BASE_USER_URL = 'http://localhost:3000/users';
    const BASE_POST_URL = 'http://localhost:3000/posts';

    fetch(BASE_USER_URL)
    .then((res) => res.json())
    .then((userData) => userData.forEach((user, index) => renderUserPage(user, index))) // Sends individual user object for rendering


    // renderUserPage renders pre-made user pages
    // stored in the JSON data base.
    // Parameter(s): current user object, current index
    function renderUserPage(user, index){
        // const userCard = 
        renderUserBar(user, index);         // Renders the User Bar at the top of the page and returns a userCard
        //userCard.addEventListener('click', renderUserPosts)
    }


    // adds a user to the status-card elements on the page
    // adds an eventListener when a user is selected.
    function renderUserBar(user, index){
        const userCard = document.getElementById(`card-${index}`);
        const profilePic = document.getElementById(`profile-pic-${index}`);
        const username = document.getElementById(`username-${index}`);

        profilePic.src = user.profile;
        username.textContent = user.name;
        
        //return userCard;
        // This event listener activates when the user clicks
        // on the status-card 
        userCard.addEventListener('click', function (e){
            fetch(BASE_POST_URL)
            .then((res) => res.json())
            .then((postData) => {
                const filteredPosts = postData.filter(post => post.userId === user.userId)  // creates an array of filtered posts that are relevant to the current user
                filteredPosts.forEach((post, index) => renderUserPosts(post, index))        // calls renderUserPosts
            })
        })
    }

    function renderUserPosts(post, index){
        // fetch(BASE_POST_URL)
        // .then((res) => res.json())
        // .then((postData) => {
        //     const filteredPosts = postData.filter(post => post.userId === user.userId)    // creates an array of filtered posts that are relevant to the current user
        //     filteredPosts.forEach((post, index) => innerPostFunction(post, index))        // calls innerPostFunction
        // })

        // function innerPostFunction(post, index){
        //     const userPost = document.getElementById(`post-${index}`);
        //     //const postLikes = document.getElementById(`${}`);
        
        //     userPost.src = post.image;
        //     //postLikes = post.likes;
        // }

        const userPost = document.getElementById(`post-${index}`);
            //const postLikes = document.getElementById(`${}`);
        
            userPost.src = post.image;
    }
})
