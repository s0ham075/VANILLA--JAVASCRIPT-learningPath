let counter =0;
document.getElementById("reset").onclick= function(){
    counter=0;
    document.getElementById("result").innerHTML=counter;
}
document.getElementById("decrease").onclick= function(){
    counter-=1;
    document.getElementById("result").innerHTML=counter;
}
document.getElementById("increase").onclick= function(){
    counter+=1;
    document.getElementById("result").innerHTML=counter;
}

