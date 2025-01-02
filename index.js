$(function () {
    $(".menu").click(function () {
        $(".list-form").fadeToggle(1000);
    })
})

// JQUERY ANIMATION
// $(function () {
//     $(".btn3").click(function () {
//         $(".btn3").animate({opacity:0.5})
//     })
// })

// import express from "express";
// const app = express();
// const port = 3000;
// app.listen(port,()=>{
//     console.log("Server running on "+port);
// })

// VANILLA JAVASCRIPT

// const menu = document.querySelector(".menu");
// menu.addEventListener('click',()=>{
//     const list = document.querySelector(".list-form");
//     list.classList.toggle("class");
// })


$(function () {
    $(".hero-section").slideDown(3000) 
})

