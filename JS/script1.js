var Banner = $("#banner"),
    timmer = null,
    index = 0,
    pics = $("#banner div"),
    len = pics.length,
    dots = $("#dots li");
function slideImg() {
    Banner.onmouseover = function () {
        if (timer) clearInterval(timer);
    }
    Banner.onmouseout = function () {
        timer = setInterval(function () {
            index++;
            if (index >= len) {
                index = 0;
            }
            changeImg();
        }, 3000)
    }
    Banner.onmouseout();
    for (var d = 0; d < len; d++) {
        dots[d].id = d;
        dots[d].onclick = function () {
            index = this.id;
            changeImg();
        }
    }
}

function changeImg() {
    for (var i = 0; i < len; i++) {
        pics[i].style.display = "none";
        dots[i].className = "";
    }
    pics[index].style.display = "block";
    dots[index].className = "active";
}
slideImg();