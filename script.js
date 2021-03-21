var attempts = 3;
function validateForm() {
    var x = document.forms["password-form"]["password"].value;
    console.log(attempts);
    if (x.toLowerCase()=="kronos" && (attempts>0)) {
        changeTo("white");
    } else {
        if (attempts > 0) {
            attempts -= 1;
        }
        colors = ["red", "black"];
        // for (i = 0; i <= 5; i++) {
        //     setTimeout(function() {
        //         j = i % 2;
        //         changeTo(colors[0]);
        //     }, 300*i);
        // }
        var gap = 250;
        for (i = 0; i <= 2; i++) {
            setTimeout(function() {
                changeTo(colors[0]);
            }, 2 * gap * i);
        }
        for (i = 0; i <= 2; i++) {
            setTimeout(function() {
                changeTo(colors[1]);
            }, gap * (1 + 2 * i));
        }

        var message = `WARNING: ${attempts} attempts remaining before self-destruct.`
        switch (attempts) {
            case 1: 
                message = "WARNING: 1 attempt remaining before self-destruct.";
                break;
            case 0:
                message = "Self-destruct sequence initiated.";
                break;
        }
        document.getElementById("error-message").innerHTML = message;
        if (attempts == 0) {
            selfDestructAudio = document.getElementById("self-destruct");
            selfDestructAudio.play();
            setTimeout(showImg, 17500)
        }
    }
    return (x.toLowerCase()=="kronos" && attempts > 0);
}


function showImg() {

}

function changeTo(c) {
    document.getElementById("password").style.color = c;
}


var i=0;
function toggle() {
  var doc = document.getElementById("password");
  var color = ["black","red"];
  doc.style.color = color[i];
  i = 1 - i;
}

function mouseOver(c) {
    var images = document.getElementById("icon"+c.slice(-1));
    images.style.filter = "invert(1)";
    var all = document.getElementsByClassName(c);
    for (var i = 0; i < all.length; i++) {
        all[i].style.color = "white";
        all[i].style.backgroundColor = "#97ADAE";

    }
    
}

function mouseOut(c) {
    var images = document.getElementById("icon"+c.slice(-1));
    images.style.filter = "invert(0)";
    var all = document.getElementsByClassName(c);
    for (var i = 0; i < all.length; i++) {
        all[i].style.color = 'black';
        all[i].style.backgroundColor = "transparent";
    }
}