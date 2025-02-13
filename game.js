const player1 = prompt("Nome do jogador 1");
const player2 = prompt("Nome do jogador 2");
var playTime = player1;
var gameOver = false;
var pontos1 = 0
var pontos2 = 0
 

atualizaMostrador();
inicializarEspacos();

function atualizaMostrador(){

   if(gameOver) {return;}
   
   
   if(playTime == player1) {

       var player = document.querySelectorAll("div#mostrador img")[0];
       player.setAttribute("src", "/JogoDaVelha/imagens/x.png");
   }else{
       var player = document.querySelectorAll("div#mostrador img")[0];
       player.setAttribute("src", "/JogoDaVelha/imagens/O.png");
   }
}

function inicializarEspacos(){

    var espacos = document.getElementsByClassName("espaco");
    for (var i = 0; i < espacos.length; i++){
        
        espacos[i].addEventListener("click", function(){

            if (gameOver) {return;}

            if(this.getElementsByTagName("img").length == 0){

                if (playTime == player1) {

                    this.innerHTML = "<img src='/JogoDaVelha/imagens/X.png' border='0' height='100'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2;

                }else{
                    this.innerHTML = "<img src='/JogoDaVelha/imagens/O.png' border='0' height='100'>";
                    this.setAttribute("jogada", player2);
                    playTime = player1;

                }
                atualizaMostrador();
                verificarVencedor();
            }
        });       
    }
        
}

placar();


async function verificarVencedor(){

    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = "";

    if((a1==b1 && a1==c1 && a1 !="" ) || ( a1==a2 && a1==a3 && a1 !="") || (a1==b2 && a1==c3 && a1 !="" ))
        {
            vencedor = a1;

        }else if((b2==b1 && b2==b3 && b2 !="") || (b2==a2 && b2==c2 && b2 !="" ) || (b2==a3 && b2==c1 && b2 !=""))
        {
            vencedor = b2;

        }else if(((c3==c2 && c3==c1) || (c3==a3 && c3==b3)) && c3!="")
        {
            vencedor= c3;

        }else if(a1&&a2&&a3&&b1&&b2&&b3&&c1&&c2&&c3 !=""){
            await sleep(50);
            alert("empate")
        }
            




    if (vencedor!=""){
        gameOver = true;

        await sleep(50);
        console.log("Parabéns " + vencedor + " você venceu!")
      

    } 

    if (vencedor == player1){
        pontos1 = pontos1 + 1 ;
        
    }
    
    if (vencedor == player2){
        pontos2 = pontos2 + 1;
        
    }

    
}

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
}


function restart() {
    
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";

    document.getElementById("a1").setAttribute("jogada", "");
    document.getElementById("a2").setAttribute("jogada", "");
    document.getElementById("a3").setAttribute("jogada", "");
    document.getElementById("b1").setAttribute("jogada", "");
    document.getElementById("b2").setAttribute("jogada", "");
    document.getElementById("b3").setAttribute("jogada", "");
    document.getElementById("c1").setAttribute("jogada", "");
    document.getElementById("c2").setAttribute("jogada", "");
    document.getElementById("c3").setAttribute("jogada", ""); 

    placar();   
    
    gameOver = false; 
        
}   

function placar() {

    /*document.getElementById("placar").innerHTML = "placar:" ; */
    document.getElementById("pontos1").innerHTML = player1 + ": " + pontos1 ;
    document.getElementById("pontos2").innerHTML = player2 + ": " + pontos2 ;

}

