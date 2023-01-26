class App
{
    runApplication()
    {
        console.log("hello world");
        //code gaat hier!
    }
}

let app = new App();
app.runApplication();

let canvas = document.getElementById("js--canvasID");
console.log(canvas);

let g = canvas.getContext("2d");

//text
g.font = "30px Comic Sans MS";
g.fillStyle = "yellow";
g.fillText("Merry Christmas", 200, 50);


//huis0

//dak
g.beginPath();
g.fillStyle = "blue";
g.moveTo(30,10);
g.lineTo(70,20);
g.lineTo(60,40);
g.lineTo(20,30);
g.lineTo(30,10);
g.closePath()
g.fill();
g.stroke();

//lichte muur
g.beginPath();
g.fillStyle = "lightgray";
g.moveTo(20,30);
g.lineTo(20,50);
g.lineTo(60,60);
g.lineTo(60,40);
g.lineTo(20,30);
g.closePath();
g.fill();
g.stroke();

//dak muur
g.beginPath();
g.fillStyle = "gray";
g.moveTo(60,40);
g.lineTo(70,20);
g.lineTo(80,30);
g.lineTo(60,40);
g.closePath();
g.fill();
g.stroke();

//donkere muur
g.beginPath();
g.fillStyle = "gray";
g.moveTo(60,40);
g.lineTo(60,60);
g.lineTo(80,50);
g.lineTo(80,30);
g.lineTo(60,40);
g.closePath();
g.fill();
g.stroke();


//huis1

//dak
g.beginPath();
g.fillStyle = "blue";
g.moveTo(130,110);
g.lineTo(170,120);
g.lineTo(160,140);
g.lineTo(120,130);
g.lineTo(130,110);
g.closePath()
g.fill();
g.stroke();

//lichte muur
g.beginPath();
g.fillStyle = "lightgray";
g.moveTo(120,130);
g.lineTo(120,150);
g.lineTo(160,160);
g.lineTo(160,140);
g.lineTo(120,130);
g.closePath();
g.fill();
g.stroke();

//dak muur
g.beginPath();
g.fillStyle = "gray";
g.moveTo(160,140);
g.lineTo(170,120);
g.lineTo(180,130);
g.lineTo(160,140);
g.closePath();
g.fill();
g.stroke();

//donkere muur
g.beginPath();
g.fillStyle = "gray";
g.moveTo(160,140);
g.lineTo(160,160);
g.lineTo(180,150);
g.lineTo(180,130);
g.lineTo(160,140);
g.closePath();
g.fill();
g.stroke();


//huis2

//dak
g.beginPath();
g.fillStyle = "blue";
g.moveTo(530,10);
g.lineTo(570,20);
g.lineTo(560,40);
g.lineTo(520,30);
g.lineTo(530,10);
g.closePath()
g.fill();
g.stroke();

//lichte muur
g.beginPath();
g.fillStyle = "lightgray";
g.moveTo(520,30);
g.lineTo(520,50);
g.lineTo(560,60);
g.lineTo(560,40);
g.lineTo(520,30);
g.closePath();
g.fill();
g.stroke();

//dak muur
g.beginPath();
g.fillStyle = "gray";
g.moveTo(560,40);
g.lineTo(570,20);
g.lineTo(580,30);
g.lineTo(560,40);
g.closePath();
g.fill();
g.stroke();

//donkere muur
g.beginPath();
g.fillStyle = "gray";
g.moveTo(560,40);
g.lineTo(560,60);
g.lineTo(580,50);
g.lineTo(580,30);
g.lineTo(560,40);
g.closePath();
g.fill();
g.stroke();



//huis3

//dak
g.beginPath();
g.fillStyle = "blue";
g.moveTo(30,450);
g.lineTo(70,460);
g.lineTo(60,480);
g.lineTo(20,470);
g.lineTo(30,450);
g.closePath()
g.fill();
g.stroke();

//lichte muur
g.beginPath();
g.fillStyle = "lightgray";
g.moveTo(20,470);
g.lineTo(20,490);
g.lineTo(60,500);
g.lineTo(60,480);
g.lineTo(20,470);
g.closePath();
g.fill();
g.stroke();

//dak muur
g.beginPath();
g.fillStyle = "gray";
g.moveTo(60,480);
g.lineTo(70,460);
g.lineTo(80,470);
g.lineTo(60,480);
g.closePath();
g.fill();
g.stroke();

//donkere muur
g.beginPath();
g.fillStyle = "gray";
g.moveTo(60,480);
g.lineTo(60,500);
g.lineTo(80,490);
g.lineTo(80,470);
g.lineTo(60,480);
g.closePath();
g.fill();
g.stroke();



//tree0

//leaves
g.beginPath();
g.fillStyle = "green";
g.arc(150, 40, 30, 0, 2 * Math.PI);
g.stroke();
g.closePath();
g.fill();

//wood
g.beginPath();
g.fillStyle = "brown";
g.moveTo(140, 60);
g.lineTo(140, 90);
g.lineTo(160, 90);
g.lineTo(160, 60);
g.lineTo(140, 60);
g.stroke();
g.fill();


//tree1

//leaves
g.beginPath();
g.fillStyle = "green";
g.arc(250, 140, 30, 0, 2 * Math.PI);
g.stroke();
g.closePath();
g.fill();

//wood
g.beginPath();
g.fillStyle = "brown";
g.moveTo(240, 160);
g.lineTo(240, 190);
g.lineTo(260, 190);
g.lineTo(260, 160);
g.lineTo(240, 160);
g.stroke();
g.fill();


//snowman0

//body
g.beginPath();
g.fillStyle = "white";
g.arc(350, 160, 25, 0, 2 * Math.PI);
g.stroke();
g.fill();

//head
g.beginPath();
g.fillStyle = "white";
g.arc(350, 130, 20, 0, 2 * Math.PI);
g.stroke();
g.fill();

//left eye
g.beginPath();
g.fillStyle = "black";
g.arc(340, 130, 2, 0 ,2 * Math.PI);
g.stroke();
g.fill();

//right eye
g.beginPath();
g.fillStyle = "black";
g.arc(360, 130, 2, 0 ,2 * Math.PI);
g.stroke();
g.fill();

//mouth
g.beginPath();
g.fillStyle = "black";
g.arc(350, 140, 2, 0 ,2 * Math.PI);
g.stroke();
g.fill();


//snowman1

//body
g.beginPath();
g.fillStyle = "white";
g.arc(450, 160, 25, 0, 2 * Math.PI);
g.stroke();
g.fill();

//head
g.beginPath();
g.fillStyle = "white";
g.arc(450, 130, 20, 0, 2 * Math.PI);
g.stroke();
g.fill();

//left eye
g.beginPath();
g.fillStyle = "black";
g.arc(440, 130, 2, 0 ,2 * Math.PI);
g.stroke();
g.fill();

//right eye
g.beginPath();
g.fillStyle = "black";
g.arc(460, 130, 2, 0 ,2 * Math.PI);
g.stroke();
g.fill();

//mouth
g.beginPath();
g.fillStyle = "black";
g.arc(450, 140, 2, 0 ,2 * Math.PI);
g.stroke();
g.fill();



//road

g.beginPath();
g.fillStyle = "gray";
g.moveTo(30, 100);
g.lineTo(30, 400);
g.lineTo(1000, 400);
g.lineTo(1000, 350);
g.lineTo(600, 350);
g.lineTo(600, 100);
g.lineTo(550, 100);
g.lineTo(550, 350);
g.lineTo(170, 350);
g.lineTo(170, 200);
g.lineTo(120, 200);
g.lineTo(120, 350);
g.lineTo(80, 350);
g.lineTo(80, 100);
g.stroke();
g.fill();