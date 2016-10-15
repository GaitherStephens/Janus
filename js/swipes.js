function detectswipe(el, func) {
    var data = {
            sX: 0,
            sY: 0,
            eX: 0,
            eY: 0,
            mXY: ''
        },
        min_x = 30, //min x swipe for horizontal swipe
        max_x = 50, //max x difference for vertical swipe
        min_y = 50, //min y swipe for vertical swipe
        max_y = 70, //max y difference for horizontal swipe
        direction = "",
        ele = document.querySelector(el);
    ele.addEventListener('touchstart', function (e) {
        var t = e.touches[0];
        data.sX = t.screenX;
        data.sY = t.screenY;
    }, false);
    ele.addEventListener('touchmove', function (e) {
        e.preventDefault();
        var t = e.touches[0];
        data.eX = t.screenX;
        data.eY = t.screenY;
        data.movedXY = "yes";
    }, false);
    ele.addEventListener('touchend', function () {
        if (data.movedXY === 'yes') {
            if ((((data.eX - min_x > data.sX) || (data.eX + min_x < data.sX)) && ((data.eY < data.sY + max_y) && (data.sY > data.eY - max_y)))) {
                if (data.eX > data.sX) {
                    direction = "r";
                } else if (data.eX < data.sX) {
                    direction = "l";
                }
            }
            if ((((data.eY - min_y > data.sY) || (data.eY + min_y < data.sY)) && ((data.eX < data.sX + max_x) && (data.sX > data.eX - max_x)))) {
                if (data.eY > data.sY) {
                    direction = "d";
                } else if (data.eY < data.sY) {
                    direction = "u";
                }
            }
        }
        if (direction !== "") {
            if (typeof func === 'function') {
                func(direction);
            }
        }
        direction = "";
        data.movedXY = "";
    }, false);
}
