function checkResult() {
    let sum = 0;
    answer1 = document.getElementById("option2");
    answer2 = document.getElementById("option5");
    answer3 = document.getElementById("option10");
    answer4 = document.getElementById("option13");
    answer5 = document.getElementById("option18");

    if(answer1.checked==true){
        sum++;
        document.getElementById("check1").innerHTML='&#10004';
        document.getElementById("check1").style.color="green";
    }else{
        document.getElementById("check1").innerHTML='&#10006'; 
        document.getElementById("check1").style.color="red";
    }

    if(answer2.checked==true){
        sum++;
        document.getElementById("check2").innerHTML='&#10004';
        document.getElementById("check2").style.color="green";
    }else{
        document.getElementById("check2").innerHTML='&#10006';
        document.getElementById("check2").style.color="red"; 
    }

    if(answer3.checked==true){
        sum++;
        document.getElementById("check3").innerHTML='&#10004';
        document.getElementById("check3").style.color="green";
    }else{
        document.getElementById("check3").innerHTML='&#10006';
        document.getElementById("check3").style.color="red"; 
    }

    if(answer4.checked==true){
        sum++;
        document.getElementById("check4").innerHTML='&#10004';
        document.getElementById("check4").style.color="green";
    }else{
        document.getElementById("check4").innerHTML='&#10006'; 
        document.getElementById("check4").style.color="red";
    }

    if(answer5.checked==true){
        sum++;
        document.getElementById("check5").innerHTML='&#10004';
        document.getElementById("check5").style.color="green";
    }else{
        document.getElementById("check5").innerHTML='&#10006';
        document.getElementById("check5").style.color="red"; 
    }
    document.getElementById("score").innerHTML="Score : " +sum;

    let percentage=sum*100/5;
    document.getElementById("percentage").innerHTML=percentage+"%";
    document.getElementById("percentage").style.color="green";
    if(percentage<50){
        document.getElementById("percentage").style.color="red";
    }
    if(percentage=='100'){
        document.getElementById("percentage").innerHTML=percentage+"%  Well done!";
    }
 }