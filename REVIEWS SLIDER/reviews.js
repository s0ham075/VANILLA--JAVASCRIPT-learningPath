const h1= {
    img:"22.jpg",
    title:"FIRST HOKAGE",
    description:"Hashirama Senju (千手柱間, Senju Hashirama) was a member of the famed Senju clan. He himself was hailed as the 'God of Shinobi' for his unmatched ninja prowess. Hashirama sought peace for the shinobi world, and to that end founded Konohagakure with his clan"
};
const h2 ={
    img:"second image.jpg",
    title:"SECOND HOKAGE",
    description:"Tobirama Senju (千手扉間, Senju Tobirama) was a member of the renowned Senju clan, who, together with his elder brother and the Uchiha clan, founded the first shinobi village: Konohagakure. Throughout his lifetime, Tobirama would work tirelessly to achieve political stability and implement the institutions that made the village system work"
};
const h3={
    img:"third hokagr.jpg",
    title:"THIRD HOKAGE",
    description:"Hiruzen Sarutobi (猿飛ヒルゼン, Sarutobi Hiruzen) was the Third Hokage (三代目火影, Sandaime Hokage, literally meaning: Third Fire Shadow) of Konohagakure.  Though he was only ever directly the teacher of the Sannin, generations of Konoha shinobi benefited from his wisdom during his lifetime."
};
const h4={
    img:"minato.jpg",
    title:"FORTH HOKAGE",
    description:"Minato Namikaze (波風ミナト, Namikaze Minato) was the Fourth Hokage (四代目火影, Yondaime Hokage, literally meaning: Fourth Fire Shadow) of Konohagakure. He was renowned all over the world as Konoha's Yellow Flash  He died during the Nine-Tailed Demon Fox's Attack, sacrificing his life to seal a part of the Nine-Tails into his newborn son, Naruto Uzumaki."
};
const h5={
    img:"fifth hokage.jpg",
    title:"FIFTH HOKAGE",
    description:"Tsunade (綱手, Tsunade) is a descendant of the Senju and Uzumaki Clan, and is one of Konohagakure's Sannin. She is famed as the world's strongest kunoichi and its greatest medical-nin. The repeated loss of her loved ones caused Tsunade to later abandon the life of a shinobi for many years. She is eventually persuaded to return to Konoha and take on the mantle of Fifth Hokage"
};
const h6={
    img:"sixth hokage.jpg",
    title:"SIXTH HOKAGE",
    description:"Kakashi Hatake (はたけカカシ, Hatake Kakashi) is a shinobi of Konohagakure's Hatake clan. Famed as Kakashi of the Sharingan, Sharingan no Kakashi, he is one of Konoha's most talented ninja, regularly looked to for advice and leadership despite his personal dislike of responsibility. "
};
const h7={
    img:"seventh hokage.jpg",
    title:"SEVENTH HOKAGE",
    description:"Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. "
};
const arr=[h1,h2,h3,h4,h5,h6,h7];
var i=0;
document.getElementById("left").addEventListener("click",back);
function hello(){
    window.alert("sdghfgfdh");
} 
document.getElementById("right").addEventListener("click",forward);
function back(){
    if(i==0){
        return ;
    }
    i--;
    document.getElementById("logo").src=arr[i].img;
    document.getElementById("tt").innerText=arr[i].title;
    document.getElementById("des").innerText=arr[i].description;
}
function forward(){
    if(i==6){
        return ;
    }
    i++;
    document.getElementById("logo").src=arr[i].img;
    document.getElementById("tt").innerText=arr[i].title;
    document.getElementById("des").innerText=arr[i].description;
}