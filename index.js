document.addEventListener('DOMContentLoaded', function(){
    // A request to the JSON server for user information:
    const BASE_USER_URL = 'http://localhost:3000/users';
    const BASE_POST_URL = 'http://localhost:3000/posts';
    let filteredPosts;

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
                debugger;
            filteredPosts = postData.filter(post => post.userId === user.userId)    // creates an array of filtered posts relevant to the current user
            filteredPosts.forEach((post, index) => innerPostFunction(post, index))  // calls innerPostFunction
            })
        })
        
        // parameter(s): current post object, current index
        function innerPostFunction(post, index){
            const userPost = document.getElementById(`post-${index}`);
            let likeDisplay = document.getElementById(`numb-${index}`)

            userPost.src = post.image;
            likeDisplay.textContent = post.likes;  
        }
    }


    // event listener increments the likes (page-only) when the user clicks
    // the like button and decrements when pressed again
    function buttonEventHandler(e){
        const index = e.target.dataset.index;
        const ogLikes = post.likes;
        const addedLikes = ogLikes+1;

        let likeDisplay = document.getElementById(`numb-${index}`)
        let post = filteredPosts[index];
        let currentLikes = likeDisplay.textContent;

        currentLikes = parseInt(currentLikes, 10)
        
        if(currentLikes === ogLikes){
            currentLikes++
            likeDisplay.textContent = currentLikes;
        } else if(currentLikes === addedLikes){
            currentLikes--
            likeDisplay.textContent = currentLikes;
        }
    }
    for(let i = 0; i <= 5; i++){
        const likeButton = document.getElementById(`heart-${i}`);
        likeButton.addEventListener('click', buttonEventHandler)
    }
})