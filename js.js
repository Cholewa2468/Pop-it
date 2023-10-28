var Left = document.getElementById("left").addEventListener("click", zmiana1) //left
var Right = document.getElementById("right").addEventListener("click", zmiana2) //right
var tImg = ['images/square.png','images/amongus.png','images/round.png'];
var opis = ['Multicolored square','Among Us, marbled','Multicolored round'];
function zmiana1(){ //left
    document.getElementById("p1").src = tImg[1];
    document.getElementById("p2").src = tImg[2]
    document.getElementById("p3").src = tImg[0]
    document.getElementById("pt1").innerHTML = opis[1]
    document.getElementById("pt2").innerHTML = opis[2]
    document.getElementById("pt3").innerHTML = opis[0]
    tImg.push(tImg.shift())
    opis.push(opis.shift())
}
function zmiana2(){//right
    document.getElementById("p1").src = tImg[2];
    document.getElementById("p2").src = tImg[0]
    document.getElementById("p3").src = tImg[1]
    document.getElementById("pt1").innerHTML = opis[2]
    document.getElementById("pt2").innerHTML = opis[0]
    document.getElementById("pt3").innerHTML = opis[1]
    tImg.unshift(tImg.pop())
    opis.unshift(opis.pop())
}