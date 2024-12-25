const tela1 = document.getElementById("tela1");
pop1 = 1;


function acitve1(){
    if(pop1 % 2 === 1){
        tela1.classList.remove("telapergunta1pff");
        tela1.classList.remove("telapergunta1");
        tela1.classList.add("telapergunta1on");
    }
    else{
        tela1.classList.remove("telapergunta1on");
        tela1.classList.add("telapergunta1");
    }
    pop1++;
}



const tela2 = document.getElementById("tela2");
pop2 = 1;


function acitve2(){
    if(pop2 % 2 === 1){
        tela2.classList.remove("telapergunta2pff");
        tela2.classList.remove("telapergunta2");
        tela2.classList.add("telapergunta2on");
    }
    else{
        tela2.classList.remove("telapergunta2on");
        tela2.classList.add("telapergunta2pff");
    }
    pop2++;
}


const tela3 = document.getElementById("tela3");
pop3 = 1;


function acitve3(){
    if(pop3 % 2 === 1){
        tela3.classList.remove("telapergunta3pff");
        tela3.classList.remove("telapergunta3");
        tela3.classList.add("telapergunta3on");
    }
    else{
        tela3.classList.remove("telapergunta3on");
        tela3.classList.add("telapergunta3pff");
    }
    pop3++;
}


const tela4 = document.getElementById("tela4");
pop4 = 1;


function acitve4(){
    if(pop4 % 2 === 1){
        tela4.classList.remove("telapergunta4pff");
        tela4.classList.remove("telapergunta4");
        tela4.classList.add("telapergunta4on");
    }
    else{
        tela4.classList.remove("telapergunta4on");
        tela4.classList.add("telapergunta4pff");
    }
    pop4++;
}





const tellprimaria = document.querySelector(".tellprimaria");

function remove(){
tellprimaria.remove("tellprimaria")
}
