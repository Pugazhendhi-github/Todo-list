var popup_overlay=document.querySelector(".overlay")
var popupwindow=document.querySelector(".popup-window")
var addbutton=document.getElementById("plus-button")

addbutton.addEventListener("click",function(){
    popup_overlay.style.display=("block")
    popupwindow.style.display=("block")
})

//select cancel-button
var cancelpopup=document.getElementById("cancel-button")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popup_overlay.style.display=("none")
    popupwindow.style.display=("none")
})


function delete_tab(event){
    event.target.parentElement.remove()
}

//select container,add-button,title-input,author-input,textarea-input

var container=document.querySelector(".container")
var add_button=document.getElementById("add-button")
var title=document.getElementById("title-input")
var author=document.getElementById("author-input")
var textarea=document.getElementById("textarea-input")

add_button.addEventListener("click",function(event){
    event.preventDefault()
    var  div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${title.value}</h1>
    <h2>${author.value}</h2>
    <h5>${textarea.value}</h5>    
    <button onclick="delete_window(event)">DELETE</button>`
    container.append(div)
    popup_overlay.style.display=("none")
    popupwindow.style.display=("none")
})

function delete_window(event){
    event.target.parentElement.remove()

}