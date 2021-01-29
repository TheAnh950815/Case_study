function clearPaint() {
    c = document.getElementById("myCanvas")
    ctx = c.getContext("2d")
    width = 1000
    height = 600
    ctx.clearRect(0, 0, width, height)
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
}
