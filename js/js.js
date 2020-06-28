let activeItem = (e) => {
    let item = document.getElementsByClassName('BrandItem')
    for (let i = 0; i < item.length; i++) {
        item[i].classList.remove('activeBrand')
        item[i].childNodes[1].style.opacity='.25'


    }
    e.classList.add('activeBrand')
    e.childNodes[1].style.opacity='1'
}
let activeModel = (e) => {
    let item = document.getElementsByClassName('item_model')
    for (let i = 0; i < item.length; i++) {
        item[i].classList.remove('activeBrand')

    }
    e.classList.add('activeBrand')
}
function search_brand() {
    var input = document.getElementById("search_brand");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName('BrandItem');
    for (i = 0; i < nodes.length; i++) {
        if (nodes[i].innerText.toLowerCase().includes(filter)) {
            nodes[i].style.display = "inline-block";
        } else {
            nodes[i].style.display = "none";
        }
    }
}
function search_model() {
    var input = document.getElementById("search_brand");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName('item_model');
    for (i = 0; i < nodes.length; i++) {
        if (nodes[i].innerText.toLowerCase().includes(filter)) {
            nodes[i].style.display = "inline-block";
        } else {
            nodes[i].style.display = "none";
        }
    }
}


let flag_login = true
let openlogin = () => {
    let box = document.getElementsByClassName('login_box')[0]
    if (flag_login) {
        box.style.display = "flex";
        flag_login = false

    } else {
        box.style.display = "none";
        flag_login = true

    }
}
let x = 0
let next_landing = () => {

    let crosel = document.getElementsByClassName('item_order')

    for (let croselKey in crosel) {
        x = x + 10
        crosel[croselKey].style.transform = `translateX(${x}px)`

    }


}
let back_landing = () => {

    let crosel = document.getElementsByClassName('item_order')

    for (let croselKey in crosel) {
        x = x - 10
        crosel[croselKey].style.transform = `translateX(${x}px)`

    }

}
let nextfun = () => {
    x = x + 100
    let crosel = document.getElementsByClassName('Marquee-content')[0];

    crosel.style.transform = `translateX(${x}px)`

}
let backfun = () => {
    x = x - 100
    let crosel = document.getElementsByClassName('Marquee-content')[0];

    crosel.style.transform = `translateX(${x}px)`


}
let bigImg = () => {
    let post = document.getElementsByClassName('postblog')[3]
    post.style.backgroundImage = "url('img/matheo-jbt-kutWwEGYFo-1@2x.png')"
    let img = document.getElementById('imgpost1')
    img.style.opacity = "0"
    let a = document.getElementById('apost1')
    a.classList.add("aStyle")

}
let normalImg = () => {
    let post = document.getElementsByClassName('postblog')[3]
    post.style.background = "white"
    let img = document.getElementById('imgpost1')
    img.style.opacity = "1"
    let a = document.getElementById('apost1')
    a.classList.remove("aStyle")
}

//birthday -------------------
$(function () {
    $("#birthday, #span1").persianDatepicker();
});

$(".fileSend").change(function () {
    filename = this.files[0].name
});
//birthday -------------------

//post data landing
function post() {

    dict = {
        kind: $('#insurance-kind').val(),
        phone: $('#phonenumber').val(),
        date: $('#birthday').val()
    }
    console.log(dict)
    let json = JSON.stringify(dict)
    console.log(json)
    $.ajax({
        url: "http://sadasdasd.com",
        // crossDomain: true,
        type: "Post",
        data: json,
        // headers: {
        //     'Access-Control-Allow-Headers': '*',
        //     'Content-Type': 'application/json'
        // }
    }).done((response) => {
        console.log(response)
    })
}

// optional

// hower post



