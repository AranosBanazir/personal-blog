
let defaultTheme = localStorage.getItem('theme') || "night"
let theme = localStorage.getItem("theme")
const day_night =  document.getElementById(`day-night-pic`)
const moonPath = "./assets/images/moon.png"
const sunPath  = "./assets/images/sun.webp"
const colorDarkMode = "dimgrey"
const colorLightMode = "white"
const background = document.getElementsByClassName("background")
const labels = document.getElementsByTagName( "label" )
const blogPosts = []
const darkStyle = {
    color: "white",
    backgroundColor: colorDarkMode,
}

const lightStyle = {
    color: "black",
    backgroundColor: "white",
}


//setting starting message for tooltip based on saved theme state
document.getElementById("day-night-tooltip").innerHTML = "Click to switch to dark mode!"
loadTheme()

function loadTheme(){

    if (theme === "day"){
        day_night.src = sunPath
        
        // iterates over elements with the 'background' class and applys the lightmode
        for (const element of background){
            for (const key in lightStyle){
                element.style[key] = lightStyle[key]
            }
        }
        for (const element of labels){
            element.style.color = "black"
        }
        document.getElementById("day-night-tooltip").innerHTML = "Click to switch to dark mode!"
        
    }else{
        day_night.src = moonPath

        // iterates over elements with the 'background' class and applys the darkmode
        for (const element of background){
            // element.style.backgroundColor = colorDarkMode
            for (const key in darkStyle){
                element.style[key] = darkStyle[key]
            }
        }

        for (const element of labels){
            element.style.color = "white"
        }

        document.getElementById("day-night-tooltip").innerHTML = "Click to switch to light mode!"

    }
}

function themeSwitch(){
    if (theme === "day"){
        theme = "night"
        day_night.src = moonPath
        localStorage.setItem('theme', "night")
        // iterates over elements with the 'background' class and applys the darkmode
        for (const element of background){
            // element.style.backgroundColor = colorDarkMode
            for (const key in darkStyle){
                element.style[key] = darkStyle[key]
            }
        }

        for (const element of labels){
            element.style.color = "white"
        }

        document.getElementById("day-night-tooltip").innerHTML = "Click to switch to light mode!"

    }else{
        theme = "day"
        localStorage.setItem('theme', "day")
        day_night.src = sunPath
        // iterates over elements with the 'background' class and applys the lightmode
        for (const element of background){
            for (const key in lightStyle){
                element.style[key] = lightStyle[key]
            }
        }
        for (const element of labels){
            element.style.color = "black"
        }
        document.getElementById("day-night-tooltip").innerHTML = "Click to switch to dark mode!"

    }
}


function newBlogPost(){
    const username = document.getElementById("username-input").value
    const title = document.getElementById("title-input").value;
    const content = document.getElementById("content-box").value
    var posts = JSON.parse(localStorage.getItem('posts') || '[]')
    let newPost = {
        username,
        title,
        content,
    }  

    if (!username || !title || !content){
        //returning if there is no information provided in one of the values
        //Inputs are set to required, and will inform when values are null
        return;
    }
    posts.push(newPost)
    localStorage.setItem( 'posts', JSON.stringify(posts)) 
    
    console.log(posts);
    // document.getElementById("blog-form").reset()
}


document.getElementById("submit-button").onclick = function(){
    
    newBlogPost()
    window.location.href = "./blog.html"
    
    
}
