const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "./images/avatar-vangogh.jpg",
        post: "./images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false,
        id: '1'
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "./images/avatar-courbet.jpg",
        post: "./images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false,
        id: '2'
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "./images/avatar-ducreux.jpg",
        post: "./images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false,
        id: '3'
    }
]

const feed = document.getElementById('feed')

document.addEventListener('click', function(e){
    if(e.target.dataset.heart){
        handleLikeClick(e.target.dataset.heart)
    }
})

function handleLikeClick(postId){
    const targetPostObj = posts.filter(function(post){
         return post.id === postId
    })[0]
    
    if (targetPostObj.isLiked === true){
        targetPostObj.likes --
    } else if (targetPostObj.isLiked === false){
        targetPostObj.likes ++
    }
    
    targetPostObj.isLiked = !targetPostObj.isLiked
    render()
}




function getPost(){
    let postHtml = ``
    posts.forEach(function(post){
        let likeIconClass = ''
        if (post.isLiked){
            likeIconClass = 'liked'
        }
        postHtml += `
        <div class="author padd">
                        <img src="${post.avatar}" class="user-avatar">
                        <div>
                            <h3>${post.name}</h3>
                            <p>${post.location}</p>
                        </div>
                    </div>
                    <div class="p-image">
                         <img src="${post.post}" class="post-image">
                    </div>
                    <div class="under-image padd">
                        <div class="icons">
                            <img src="images/icon-heart.png" class="icon ${likeIconClass}" data-heart="${post.id}">
                            <img src="images/icon-comment.png" class="icon">
                            <img src="images/icon-dm.png" class="icon">
                        </div>
                        <p>likes ${post.likes}</p>
                        <p>${post.comment}</p>
                    </div>`
    })
    return postHtml
}


function render(){
    feed.innerHTML = getPost()
}

render()