/*
  Do NOT uncomment the example lines of code below (rows 8-10), they will cause errors.  
  But I am providing it as a template.
  */


/* 
document.querySelector("ELEMENT").addEventListener("EVENT",function(){
     //YOUR CODE
 })
 */



// Problem 1
window.addEventListener("load",function(){
  console.log("Geo");
})

// document.querySelector("h1").addEventListener("mouseover",function(){
//      this.textContent="<em>" + this.innerHTML + "</em>";
//  })


// Problem 2
document.querySelector("h1").addEventListener("click",function(){
     this.remove();
 })



// Problem 3
document.querySelector("figure:nth-of-type(5)").addEventListener("dblclick",function(){
    console.log("dbl click")
    this.style.visibility="hidden";
 })


// Problem 4, how can i change the border of just the words
document.querySelector("figure:nth-of-type(1) figcaption").addEventListener("mouseover",function(){
    console.log("problem 4a color change")
    this.style.color="blue";
    this.style.border="2px solid red";
 })


document.querySelector("figure:nth-of-type(1) figcaption").addEventListener("mouseout",function(){
    console.log("problem 4b color change")
    this.style.color="black";
    this.style.border="none";
 })

// Problem 5
document.querySelector("figure:nth-of-type(1) figcaption").addEventListener("focus",function(){
    console.log("problem 5a focus")
    this.style.color="blue";
    this.style.border="20px solid red";
 })


 //i don't know that this works correctly because the color of the border is blue
document.querySelector("figure:nth-of-type(1) figcaption").addEventListener("blur",function(){
    console.log("problem 5b focus remove")
    this.style.color="black";
    this.style.border="none";
 })


// Problem 6
document.querySelector("figure:nth-of-type(2) figcaption").addEventListener("mouseover",function(){
  console.log("problem 6a font change")   
  this.style.fontStyle="italic";
 })

document.querySelector("figure:nth-of-type(2) figcaption").addEventListener("mouseout",function(){
  console.log("problem 6b font reset")   
  this.style.fontStyle="normal";
 })

// Problem 7





// Problem 8



// Problem 9