var cat;
var cat_Img,runningCat_Img,stopCat_Img;

var mouse;
var mouse_Img,mouse_Img1,mouse_Img3;

var bk,bk_Img;

function preload() {
    //load the images here
    cat_Img = loadImage("cat1.png");
    runningCat_Img = loadAnimation("cat2.png","cat3.png");
    //runningCat_Img1 = loadImage("cat3.png");
    stopCat_Img = loadImage("cat4.png");
    mouse_Img = loadImage("mouse1.png");
    mouse_Img1 = loadAnimation("mouse2.png","mouse3.png");
    //mouse_Img2 = loadImage("mouse3.png");
    mouse_Img2 = loadImage("mouse4.png");
    bk_Img = loadImage("garden.png");
}

function setup(){
    createCanvas(600,600);
    bk = createSprite(300,300,500,500);
     bk.addImage("garden.png",bk_Img);

    cat = createSprite(500,500,20,20);
    cat.addImage("cat1.png",cat_Img);
    cat.scale = 0.1;
    console.log(cat.y);

    mouse = createSprite(80,500,20,20);
    mouse.addImage("mouse1.png",mouse_Img);
    mouse.scale = 0.1;

}

function draw() {

    background(0);
    keyPressed();

    if(isTouching(mouse,cat)){
        cat.addAnimation("cat4.png",stopCat_Img);
        cat.changeAnimation("cat4.png");
        cat.x = 160;
        cat.velocityX=0;

         mouse.addAnimation("mouse4.png",mouse_Img2);
        mouse.changeAnimation("mouse4.png")
         }
    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    text(cat.x + ',' + mouseY,10,45);
}


function keyPressed(){

if(keyDown(LEFT_ARROW) ){
    cat.velocityX = -5;
    cat.addAnimation("running",runningCat_Img);
    cat.changeAnimation("running");

    mouse.addAnimation("Teasing",mouse_Img1);
    mouse.changeAnimation("Teasing");
}
}

function isTouching(object1,object2){
    if(object1.x > object2.x){
        
      return true;
       
    }
    else{
        return false;
    }

}