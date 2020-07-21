function drag (selector){
    this.ele = document.querySelector(selector);
    this.x = true;
    this.y = true;
    this.side = {
        x1:"", x2:"", y1:"", y2:""
    }
}

drag.prototype = {
    move (){
        var that = this;
        this.ele.onmousedown = function(ev){
            var cx = ev.clientX;
            var cy = ev.clientY;
            var startX = that.ele.offsetLeft;
            var startY = that.ele.offsetTop;

            var downX = cx - startX;
            var downY = cy - startY;
            document.onmousemove = function (ev) {
                var moveX = ev.clientX;
                var moveY = ev.clientY;
                var x = moveX - downX;
                var y = moveY - downY;
                if(that.x){
                that.ele.style.left = x + "px";
                }
                if(that.y){
                that.ele.style.top = y + "px";
                }
                //终止浏览器的默认行为
                ev.preventDefault();
            }
            document.onmouseup = function (ev) {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    }
}