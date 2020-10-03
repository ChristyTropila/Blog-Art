let mainDiv=document.querySelector('#main')
let secDiv=document.querySelector('#second')
let thirdDiv=document.querySelector('#third')


setTimeout(function drawShapeFive(){
    console.log("in shape five")
    let shapeFive=document.createElement('div')
    shapeFive.id="circle-2"
    shapeFive.style.display="block"
    mainDiv.append(shapeFive)
},1000);

setTimeout(function drawShapeOne(){
    console.log("in shape one")
    let shapeOne=document.createElement('div')
    shapeOne.id="heart"
    shapeOne.style.display="block"
    mainDiv.append(shapeOne)
},500);
 
 
function drawShapeTwo(){
    
    console.log("in shape two")
    let shapeTwo=document.createElement('div')
    shapeTwo.id="circle"
    shapeTwo.style.display="block"
    secDiv.append(shapeTwo)

}
document.addEventListener("click", (e) => {
    console.log("in click event")
    drawShapeTwo();
    let shapeSix=document.createElement('div')
    shapeSix.id="moon-3"
    shapeSix.style.display="block"
    secDiv.append(shapeSix)
})
function drawshapeThree(){
    console.log("in shape three")
    let shapeThree=document.createElement('div')
    shapeThree.id="star-five"
    shapeThree.style.display="block"
    secDiv.append(shapeThree)
}
function drawShapeFour(){
    console.log("in shape four")
    drawshapeThree();
    drawShapeTwo();
    let shapeFour=document.createElement('div')
    shapeFour.id="moon"
    shapeFour.style.display="block"
    thirdDiv.append(shapeFour)

}
setTimeout(function drawShapeSix(){
    console.log("in shape six")
    let shapeSix=document.createElement('div')
    shapeSix.id="moon-2"
    shapeSix.style.display="block"
    mainDiv.append(shapeSix)
},500);
drawShapeTwo(drawshapeThree(drawShapeTwo()));

// drawShapeFour();
// drawShapeOne(drawShapeFour());
// drawshapeThree(drawShapeFour(drawShapeOne(drawShapeFour())));
// drawShapeFour();