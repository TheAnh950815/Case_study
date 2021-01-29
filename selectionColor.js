function selectionColor(color) {
    var colorCode = "#000000"
    switch (color) {
        case "red":
            colorCode = "#ff0000";
            break
        case "black":
            colorCode = "#000000";
            break
        case "yellow":
            colorCode = "#FFF600";
            break
        case "blue":
            colorCode = "#5F0FF5";
            break
        case "white":
            colorCode = "#FFFFFF";
            break
    }
    paint.color = colorCode;
}