img = "";
status = "";
function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status - Detecting the objects!";

}
function modelLoaded()
{
    console.log("Model is Loaded!");
    status = true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
    console.log(results);
    }
}
function preload()
{
    img = loadImage("dog_cat.jpg");
}
function draw()
{
    image(img,0,0,640,420);
    fill("purple");
    text("Dog",45,75);
    noFill();
    stroke("purple");
    rect(30,60,450,350);

    fill("white");
    text("Cat",320,120);
    noFill();
    stroke("#008000");
    rect(300,90,270,320);
}