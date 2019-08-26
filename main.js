"use strict";
//Globale Variablen
let round=0;

//Spielfeldklasse
class Board {
    constructor(grid){
        this.grid = [
            ["","",""],
            ["","",""],
            ["","",""]
        ]
    }

    //Zelle updaten und Figuren eintragen
    updateCell(e){
        //Var
        let symbol;
        let divClass;
        let element= document.getElementById(e.target.id);        

        console.log(e.target.id);
        this.isFull(e);
        if (this.isFull(e)===false){
            //Solange das Feld noch nicht voll ist
            if(round <9){
                if(round % 2 ==0){
                    //Spieler 1 am Zug
                    symbol="X";
                    divClass="circle";
                }else{
                    //Spieler 1 am Zug
                    symbol="O";
                    divClass="cross";
                }
                //Updaten des Spielfelds / Grids
                this.grid[e.target.id.charAt(0)][e.target.id.charAt(1)]=symbol;
                if(e.target.id.length==2){
                    let neuesDiv = document.createElement("div");
                    neuesDiv.classList.add(divClass);
                    element.appendChild(neuesDiv);
                    this.checkWin();
                }
            //Ende des Spiels
            }else{
                let result= document.getElementById("result");
                result.innerHTML="GAME OVER";
            }
        }
    }

    //Spielfeld voll?
    isFull(e){
        if (this.grid[e.target.id.charAt(0)][e.target.id.charAt(1)]==""){
            console.log("leer");
            return false;
        }else{
            console.log("voll");
            return true;
        }
    }

    //checken auf Dreier-Reihen
    checkWin(){
    //Aktuelle Baustelle --->
    //Check der Reihen 
        for(let i=0; i<3; i++){
            console.log(this.grid[i][0]);
            if (this.grid[i][0]=="X" && this.grid[i][0]=="X" && this.grid[i][0]=="X") {
                console.log("nfkwen");
            }
        }
    }

}


//Objekt erstellen
let spiel = new Board();

let clicked=(e)=>{
    spiel.updateCell(e);
    round++;    
}



