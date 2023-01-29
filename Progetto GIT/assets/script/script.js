// =================
// variables

let text = "write some text"
let n1 = 384
let n2 = 183
let response = true

let result = n1 + n2

// console.log(text)
// console.log(n1)
// console.log(response)

// console.log(result)

// const constant = "constant"
// console.log(constant)

// =================
// select HTML elements

const dv1 = document.getElementById("dataviz_01")
// console.log(dv1)

const sections = document.getElementsByClassName("no_margin")
// console.log(sections)

// const p = document.querySelectorAll("p")
// console.log(p)


// =================
// edit the DOM

const title = document.querySelector("h1")
const subtitle = document.querySelector("h2")
// console.log(title)

// title.prepend(">>>")
// title.append(" - please, remember")

// // title.remove()

// title.innerHTML = "My new title"

// =================
// edit css

subtitle.style.color = "gray"

subtitle.style.fontSize = "2rem"


// =================
//function

function my_first_function(){
    console.log("works!")
}


function sum(n1,n2){
    let result = n1 + n2
    title.innerHTML = result
}


// =================
// listener

function listener(element){
    dv1.addEventListener("mouseenter", function(){
        console.log("in")
    })
    
    dv1.addEventListener("mouseleave", function(){
        console.log("out")
    })
}

// =================
// highlight

function highlight(){

    const flows = dv1.contentDocument.documentElement.getElementById("flows").querySelectorAll("g")

    flows.forEach(function(el){

        el.addEventListener("mouseenter", function(){
            flows.forEach(function(a){
                a.style.opacity = 0.3
            })
            this.style.opacity = 1
        })

        el.addEventListener("mouseleave", function(){
            flows.forEach(function(a){
                a.style.opacity = 1
            })
        })
    })
}

// =================
// switch

function mySwitch(){
    const button = document.getElementById("switch")  
    const contentA = document.getElementById("switch_contentA")
    const contentB = document.getElementById("switch_contentB")

    let content = "A"

    button.addEventListener("click", function(){

        if (content == "A"){
            contentB.style.display = "block"
            contentA.style.display = "none"
            content = "B"

            button.textContent = "show A"
        }
        else {
            contentA.style.display = "block"
            contentB.style.display = "none"
            content = "A"

            button.textContent = "show B"
        }
    })
}

function dropdown(){
    const dropdown = document.getElementById("myDropdown")
    const figures = document.querySelectorAll(".figure")

    dropdown.addEventListener("change", function(){
        let content = dropdown.value

        figures.forEach(function(a){
            a.style.display = "none"
        })

        let id = "dropdown_content" + content
        let elem = document.getElementById(id)
        elem.style.display = "block"
    })
}


// =================
// page load

window.addEventListener("load", function(){
    highlight()
    mySwitch()
    dropdown()
})
