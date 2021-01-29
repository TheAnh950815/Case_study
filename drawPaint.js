var Paint = function () {
    this.c = document.getElementById("myCanvas")
    this.width = 1000;
    this.height = 550;
    this.ctx = this.c.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.drawing = false;
    this.lineWidth = 1;
    this.color = "#000000";

    var self = this

    this.init = function () {
        this.c.width = this.width;
        this.c.height = this.height;
        this.drawWhiteBackground();

        this.c.addEventListener('mousedown', function (event) {
            self.mouseDown(event);
        });
        this.c.addEventListener('mouseup', function (event) {
            self.mouseUp(event);
        });
        this.c.addEventListener('mousemove', function (event) {
            self.mouseMove(event);
        });
    }

    this.mouseDown = function (event) {
        var position = this.getMouse(event);
        this.x = position.x;
        this.y = position.y;
        this.drawing = true;
    }
    this.mouseUp = function (event) {
        this.drawing = false;
    }
    this.mouseMove = function (event) {
        if (this.drawing) {
            var newMouse = this.getMouse(event);
            this.drawLine(this.x, this.y, newMouse.x, newMouse.y);
            this.x = newMouse.x;
            this.y = newMouse.y;
        }
    }
    this.drawWhiteBackground = function () {
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
this.getMouse = function (event) {
    var rect = this.c.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}
    this.drawLine = function (startX, startY, endX, endY) {
        this.ctx.beginPath();
        this.ctx.lineCap = "round"
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.color;
        this.ctx.stroke();
    }
}
var paint = new Paint();
paint.init();
function sizeLine(a) {
    this.lineWidth = a;
    a = document.getElementById("sizeline").value;
    paint.lineWidth = a;
}