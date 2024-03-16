const post = JSON.parse(localStorage.getItem('posts')) || []
const postLength = post.length || 0
buildPostContainers(postLength)
getOptions()


//Filling slection tag
function getOptions(){
    const selector = document.getElementById('select-delete')
    const posts = JSON.parse(localStorage.getItem('posts'))
    //For loop to build options
    for (const post in posts){
        const opt = document.createElement('option')
        opt.innerText = posts[post].title + " by " + posts[post].username
        opt.value = posts[post].title + " by " + posts[post].username
        selector.appendChild(opt)
    }
}


//Using the length of the localStorage for the number of posts to generate HTML Elements
function buildPostContainers(repeat = 0){
    if (repeat === 0){
        alert("There are not currently any news posts! Redirecting you to share your thoughts with us!")
        window.location.href = "./index.html"
        return;
    }
    repeat = parseInt(repeat)
    
    if (repeat > post.length){
        repeat = post.length
    }

    for (let i = 0; i< (repeat || 1); i++){
    //Elements we need created
    const blogContainer = document.createElement('div');
    const blogHeader = document.createElement('h2')
    const blogSpacer = document.createElement('div')
    const blogContent = document.createElement('p')
    const blogPoster = document.createElement('p')


    //Adding classes to Elements
    blogContainer.classList.add('blog-post-container');
    blogHeader.classList.add('post-container-title')
    blogSpacer.classList.add('spacer')
    blogContent.classList.add('post-container-content')
    blogPoster.classList.add('post-container-poster')

    //Adding id's over itteration
    blogContainer.setAttribute('id', `blogPost-container-${i + 1}`);
    blogHeader.setAttribute('id', `blogPost-header-${i+ 1}`);
    blogSpacer.setAttribute('id', `blogPost-spacer-${i+ 1}`);
    blogContent.setAttribute('id', `blogPost-content-${i+ 1}`);
    blogPoster.setAttribute('id', `blogPost-poster-${i+ 1}`);



    //appending new elements to section
    const sections = document.getElementById('blog-post-section')
    sections.appendChild(blogContainer)
    blogContainer.appendChild(blogHeader)
    blogContainer.appendChild(blogSpacer)
    blogContainer.appendChild(blogContent)
    blogContainer.appendChild(blogPoster)

    //TODO Add Post information to id'ed attributes
    document.getElementById(`blogPost-header-${i+ 1}`).innerText = post[i].title
    document.getElementById(`blogPost-content-${i+ 1}`).innerText = post[i].content
    document.getElementById(`blogPost-poster-${i+ 1}`).innerText = `Posted by: ${post[i].username}`

    }

}




document.getElementById('back-button').onclick = function(){
    window.location.href = "./index.html"
}

document.getElementById('delete-button').onclick = function(){
    const whatToDelete = document.getElementById('select-delete').value || ""
    const posts = JSON.parse(localStorage.getItem('posts'))
    const newArray = []
    console.log(whatToDelete)
    for(const title in posts){
        if ((posts[title].title.toLowerCase() + " by " + posts[title].username.toLowerCase()) === whatToDelete.toLowerCase()){
            if (confirm(`You are about to delete '${posts[title].title}' written by ${posts[title].username}, please click to confirm.`)){

            }else{
                newArray.push(posts[title])
            }
        }else{
            newArray.push(posts[title])
            
        }
    }

    localStorage.setItem('posts', JSON.stringify(newArray))
    window.location.href = './blog.html'

}