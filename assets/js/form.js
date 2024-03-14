
let defaultTheme = "day"
let theme = defaultTheme
const day_night =  document.getElementById(`day-night-pic`)
const moonPath = "./assets/images/moon.png"
const sunPath  = "./assets/images/sun.webp"
const colorDarkMode = "dimgrey"
const colorLightMode = "white"
let background = document.getElementsByClassName("background")

function themeSwitch(){
    if (theme === "day"){
        theme = "night"
        day_night.src = moonPath

        // iterates over elements with the 'background' class and applys the darkmode
        for (const element of background){
            element.style.backgroundColor = colorDarkMode
        }
    } else{
        theme = "day"
        day_night.src = sunPath
        // iterates over elements with the 'background' class and applys the lightmode
        for (const element of background){
            element.style.backgroundColor = colorLightMode
        }

        
    }
}