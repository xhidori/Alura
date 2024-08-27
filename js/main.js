function encriptar(objectEnc){

    document.querySelector("#alert").removeAttribute("style");
     
    
    let textarea = document.querySelector("#textarea");
    let text = textarea.value
    let defect = document.querySelector("#defect");
    let result = document.querySelector("#result");
    let textOut = document.getElementById("salida");

    

    if (text != ""){

        var out = "";

         for (let i = 0; i < text.length; i++){
              if((text[i]< 'a' || text[i]>'z') && text[i] != ' ' ){

                document.querySelector("#alert").style.color = "red";
                document.querySelector("#alert").style.fontSize = "15px";
                return;

            } else if((text.length == 1 && text == " ") || text.replace(/ /g, "") == ""){

                defect.classList.remove("hidden");
                result.classList.add("hidden");
                return;
            }

        

            if(text[i]=='a'){
                out+=objectEnc['a'];
            } else if(text[i] == 'e'){
                out+=objectEnc['e'];
            } else if(text[i] == 'i'){
                out+=objectEnc['i'];
            }else if(text[i] == 'o'){
                out+=objectEnc['o'];
            }else if(text[i] == 'u'){
                out+=objectEnc['u'];
            } else {
                out+= text[i];
            }

        }

        defect.classList.add("hidden");
        result.classList.remove("hidden");
        textOut.innerHTML = out;

    }
    return
}

function desencriptar(objectEnc){

    document.querySelector("#alert").removeAttribute("style");

    let textarea = document.querySelector("#textarea");
    let text = textarea.value;
    let show = document.querySelector("#defect");
    let hidden = document.querySelector("#result");
    let salida = document.querySelector("#salida");

    if (text != ""){


        for (let i = 0; i<text.length; i++){

            if(( text[i] < "a" || text[i] > "z" ) && text[i]!= ' '){

                document.querySelector("#alert").style.color = "red";
                document.querySelector("#alert").style.fontSizecolor = "16px";

            } else if ( ( text.length == 1 && text == ' ' ) || text.replace(/ /g, "") == " "){

                show.classList.remove("hidden");
                hidden.classList.add("hidden");
                return

            }

        }

        show.classList.add("hidden");
        hidden.classList.remove("hidden");

        text = text.replace(new RegExp(objectEnc['a'], 'g'), 'a');
        text = text.replace(new RegExp(objectEnc['e'], 'g'), 'e');
        text = text.replace(new RegExp(objectEnc['i'], 'g'), 'i');
        text = text.replace(new RegExp(objectEnc['o'], 'g'), 'o');
        text = text.replace(new RegExp(objectEnc['u'], 'g'), 'u');

      
        salida.innerHTML = text;
    }

    return
}

function copy(){

    let salida = document.querySelector("#salida");
    navigator.clipboard.writeText(salida.value)
}

const objectEnc = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}


const encryptar = document.querySelector("#encrypt");
const decrypt = document.querySelector("#decrypt");
const copyText = document.querySelector("#copy");


encryptar.addEventListener("click", function(){ 
    encriptar(objectEnc)
});

decrypt.addEventListener("click", function(){
    desencriptar(objectEnc);
});

copyText.addEventListener("click", function(){
    copy();
});