function validateForm() {
    var x = document.forms["password-form"]["password"].value;
    
    if (x.toLowerCase()=="kronos") {
        changeTo("white");
    } else {
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

        // setTimeout(function() {
        //     changeTo("black");
        // },300);
        // setTimeout(function() {
        //     changeTo("red");
        // },600);
        // setTimeout(function() {
        //     changeTo("black");
        // },900);
        // setTimeout(function() {
        //     changeTo("red");
        // },1200);
        // setTimeout(function() {
        //     changeTo("black");
        // },1500);
    }
    return (x.toLowerCase()=="kronos");
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
    console.log(c);
    var all = document.getElementsByClassName(c);
    for (var i = 0; i < all.length; i++) {
        all[i].style.color = "white";
        all[i].style.backgroundColor = "#97ADAE";
    }
    
}

function mouseOut(c) {
    console.log(c);
    var all = document.getElementsByClassName(c);
    for (var i = 0; i < all.length; i++) {
        all[i].style.color = 'black';
        all[i].style.backgroundColor = "transparent";
    }
}