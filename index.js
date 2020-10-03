let mainDiv=document.querySelector('#main')
let secDiv=document.querySelector('#second')
let thirdDiv=document.querySelector('#third')

function drawShapeOne(){
    let shapeOne=document.createElement('div')
    shapeOne.id="heart"
    shapeOne.style.display="block"
    mainDiv.append(shapeOne)
}
function drawShapeTwo(){
    drawshapeThree();
    let shapeTwo=document.createElement('div')
    shapeTwo.id="circle"
    shapeTwo.style.display="block"
    secDiv.append(shapeTwo)

}
function drawshapeThree(){
    let shapeThree=document.createElement('div')
    shapeThree.id="star-five"
    shapeThree.style.display="block"
    secDiv.append(shapeThree)
}
function drawShapeFour(){
    drawshapeThree(drawShapeOne(drawShapeTwo()));
    let shapeFour=document.createElement('div')
    shapeFour.id="moon"
    shapeFour.style.display="block"
    thirdDiv.append(shapeFour)

}
drawShapeOne(drawshapeThree(drawShapeTwo(drawShapeFour())));
// drawShapeFour();
// drawShapeOne(drawShapeFour());
// drawshapeThree(drawShapeFour(drawShapeOne(drawShapeFour())));
// drawShapeFour();