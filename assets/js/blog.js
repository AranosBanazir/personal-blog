



function buildPostContainers(repeat){
    repeat = parseInt(repeat)

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
    blogContainer.setAttribute('id', 'blogPost-container-1');
    blogHeader.setAttribute('id', 'blogPost-header-1');
    blogSpacer.setAttribute('id', 'blogPost-spacer-1');
    blogContent.setAttribute('id', 'blogPost-content-1');
    blogPoster.setAttribute('id', 'blogPost-poster-1');

    //appending new elements to section
    const sections = document.getElementById('blog-post-section')
    sections.appendChild(blogContainer)
    blogContainer.appendChild(blogHeader)
    blogContainer.appendChild(blogSpacer)
    blogContainer.appendChild(blogContent)
    blogContainer.appendChild(blogPoster)

    }

    // document.body.children["blog-post-section"]["blog-post-container"].appendChild(blogSpacer)
}


// const blogContainer = document.createElement('div');
// const sections = document.getElementById('blog-post-section')
// blogContainer.classList.add('blog-post-container');

// document.body.children["blog-post-section"].appendChild(blogContainer)
// document.getElementsByTagName('div').style.border = '10px solid black'




{/* <div class="post-container">
<h2 class="post-container-title">this is the title of the post</h2>
<div class="spacer"></div>
<p class="post-container-content">This is where the content goes</p>
<p class="post-container-poster">This is where who posted it goes</p>
</div> */}