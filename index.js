document.addEventListener('DOMContentLoaded', function(){
    // A request to the JSON server for user information:
    const BASE_USER_URL = 'http://localhost:3000/users';
    const BASE_POST_URL = 'http://localhost:3000/posts';

    fetch(BASE_USER_URL)
    .then((res) => res.json())
    .then((userData) => userData.forEach((user, index) => renderUserPage(user, index))) // Sends individual user object for rendering


    // renderUserPage renders pre-made user pages
    // stored in the JSON data base.
    // parameter(s): current user object, current index
    function renderUserPage(user, index){
        const userCard = renderUserBar(user, index);    // renders user Bar at the top of the page 
        renderUserPosts(userCard, user);                // renders user posts
    }


    // adds a user to the status-card elements on the page
    // returns address to a userCard element
    // parameter(s): current user object, current index
    function renderUserBar(user, index){
        const userCard = document.getElementById(`card-${index}`);
        const profilePic = document.getElementById(`profile-pic-${index}`);
        const username = document.getElementById(`username-${index}`);

        profilePic.src = user.profile;
        username.textContent = user.name;
        
        return userCard;
    }

    function renderUserPosts(userCard, user){
        // event listener activates when the user clicks
        // on the status-card 
        userCard.addEventListener('click', () => {
            fetch(BASE_POST_URL)
            .then((res) => res.json())
            .then((postData) => {
            const filteredPosts = postData.filter(post => post.userId === user.userId)    // creates an array of filtered posts relevant to the current user
            filteredPosts.forEach((post, index) => innerPostFunction(post, index))        // calls innerPostFunction
            })
        })
        
        // parameter(s): current post object, current index
        function innerPostFunction(post, index){
            const userPost = document.getElementById(`post-${index}`);
            let postLikes = document.getElementById(`heart-${index}`);

            userPost.src = post.image;
            postLikes.textContent = post.likes;
            postLikes.addEventListener('click', function (e){
                let currentLikes = e.target.textContent;
                currentLikes = parseInt(currentLikes, 10)
                const ogLikes = post.likes;
                const addedLikes = ogLikes+1;
                debugger;
                if(currentLikes === ogLikes){
                    currentLikes++
                    postLikes.textContent = currentLikes;
                } else if(currentLikes === addedLikes){
                    currentLikes--
                    postLikes.textContent = currentLikes;
                }
                    
            })
        }
    }
})
