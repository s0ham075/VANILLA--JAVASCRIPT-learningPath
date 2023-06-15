const  colors = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
var x = 1;

function getrandom(){
    let c="#";
    for( let i =0;i<6;i++){
      c+=colors[Math.floor(Math.random() * colors.length)];
    }
    return c;
}
let button = document.getElementById("btn");
button.addEventListener("click",change_bk);
let time = 10;
function change_bk(){
    let c = getrandom();
    document.getElementById("color").innerText=c;
    let canva = document.getElementById("canvas");
    //  "+time+"%
    if(x==1){
          clearInterval(timeout);
        canva.style.backgroundColor=c;
    }
    else{
        canva.style.backgroundImage="radial-gradient(circle,"+c+" "+time+"%,black)";
        var timeout =setInterval(increment,100);
        function increment (){
            time+=10;
            if(time>=90){
                time=10;
                c= getrandom();
                document.getElementById("color").innerText=c;
            }
            canva.style.backgroundImage="radial-gradient(circle,"+c+" "+time+"%,black)";
        }
        
    }
}
document.getElementById("radial").addEventListener("click",change1);
function change1(){
    x=0;
    document.getElementById("radial").style.color="#03d5bc";
    document.getElementById("normal").style.color="black";
}
document.getElementById("normal").addEventListener("click",change2);
function change2(){
    x=1;
    document.getElementById("canvas").style.backgroundImage="none";
    document.getElementById("normal").style.color="#03d5bc";
    document.getElementById("radial").style.color="black";  
}
