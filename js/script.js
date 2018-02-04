var a = 5;
var h = 6;
var TriangleArea = a * h / 2;
function getTriangleArea(a, h) {
    if (a < 0 || h < 0) {
        alert("Nieprawid³owe dane");
    } else {
        return a * h / 2;
    }
}
console.log(getTriangleArea(10, 6));