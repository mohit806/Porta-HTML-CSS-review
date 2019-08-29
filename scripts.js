console.log('script');

$(document).ready(onReady);

function onReady(){
    console.log('hello from jquery');
    // select #pizzaPrices and remove it
    $('#pizzaPrices').remove();

    $('ul').children().addClass('boldThis');

    let val = $('#pizzeriaName').text();
    console.log("this is val: ", val);
    $('#pizzeriaName').text(`Casie's Place`);

    $('#orderBtn').on('click', function(){
        handleClick();
    })

    $('header').on('click', '#secretBtn', function(){
        secretFunction();
    })
}

function handleClick(){
    console.log('button clicked');
    $('#orderBtn').toggleClass('updateOrderBtn');
    $('header').append(`<button onClick=" " id="secretBtn">secret button</button>`)
}

function secretFunction(){
    alert(`shhhhhhhh hhh sh, it's a secret`);
    $('#secretBtn').remove();
}
