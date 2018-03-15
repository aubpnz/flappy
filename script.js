function Saut() {
$('#flappy').css({
    'margin-bottom' : '300px'
});
}

$(document).keydown(function(e){
    if (e.keyCode == 38){
        e.preventDefault();
        $("#flappy").animate({marginBottom: '+=150px'},speed=100, easing="swing");
    }
})

$(document).keydown(function(e){
    if (e.keyCode == 39){
        e.preventDefault();
        $("#flappy").animate({marginLeft: '+=150px'},speed=100, easing="swing");
    }
})

$(document).keydown(function(e){
    if (e.keyCode == 40){
        e.preventDefault();
        $("#flappy").animate({marginTop: '+=150px'},speed=100, easing="swing");
    }
})

$(document).keydown(function(e){
    if (e.keyCode == 37){
        e.preventDefault();
        $("#flappy").animate({marginRight: '+=150px'},speed=100, easing="swing");
    }
});

$(document).keydown(function(e){
});

    $("#pipe").animate({marginRight: "+=520px"},speed=2080);

function genererpipe() {
      $("section").append("#pipe");

}
