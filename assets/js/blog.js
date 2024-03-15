

const post = JSON.parse(localStorage.getItem('posts'))
buildPostContainers(post.length)

function buildPostContainers(repeat){
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

