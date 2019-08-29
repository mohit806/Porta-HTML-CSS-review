$(document).ready(onReady);

function onReady() {
    console.log("hello");
    // select pizzaPrices and remove it
    $("#pizzaPrices").remove();
    // DOM traversal - lets us navigate to other elements down or up the tree
    // .addClass lets us manipulate the class...
    // this is the preferred way of manipulating the DOM as opposed to applying CSS directly from JS (using .css)
    $('ul').children().addClass('bold');
    // selecting the h1 and using a getter to get the value
    let val = $("#pizzeriaName").text();
    console.log("this is the value of the h1: ", val)
    // selecting the h1 and use a setter to set the value
    $("#pizzeriaName").text(`Casie's NEW Pizza Place`);
    // attaching an onClick event to the orderBtn
    $("#orderBtn").on('click', function(){
        handleClick()
    });
    $("header").on('click', '#clickMe', function(){
        secondHandleClick()
    });
}

function handleClick(){
    console.log('button clicked!')
    $("#orderBtn").toggleClass('updateOrderBtn');
    $("header").append(`<button id="clickMe">does this work?</button>`)
}

function secondHandleClick(){
    alert('WOWOWOWOWOWWWWWWW');
}
