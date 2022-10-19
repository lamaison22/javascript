
document.addEventListener("DOMContentLoaded", function() {  
    const bt1 = document.getElementById("bt1");
    bt1.addEventListener("click", olaMundo)
    

    const bt2 = document.getElementById("bt2");
    bt2.addEventListener("click", mudarCor)
    const bt3 = document.getElementById("bt3");
    bt3.addEventListener("click", seqCores)
    var cont=0;
    movimenta()
    const bt4 = document.getElementById("bt4");
    bt4.addEventListener("click", addBtn)
    var contbtn=0

    function olaMundo() {
        window.alert("Olá mundo!")
        document.getElementById("texto").innerHTML = "Olá Mundo!";
    }

    function mudarCor() {
        let cor = window.prompt('Digite uma cor: ')
        document.getElementById("bt2").style.backgroundColor = cor
        document.getElementById("texto").innerHTML = 
        `<p>A cor escolhida foi <strong>${cor}</strong>!</p>`



    }
    function seqCores() {
        //(cyan, red, purple, yellow, gray, blue)
        const cores=["cyan","red","purple","yellow","gray","blue"];
        
        if(cont==5){
            cont=0;
        }
        else{
            document.getElementById("bt3").style.backgroundColor=cores[cont]
           
            cont+=1;
        }

    }

    function seqCores() {
        //(cyan, red, purple, yellow, gray, blue)
        const cores=["cyan","red","purple","yellow","gray","blue"];
        
        if(cont==5){
            cont=0;
        }
        else{
            document.getElementById("bt3").style.backgroundColor=cores[cont];
            cont++;
        }

    }
    function addBtn() {
        if(contbtn==0){
            let btn = document.createElement("button");
            btn.innerHTML = "cria";
            btn.id="bt5";
            document.getElementById("buttons").appendChild(btn);
            contbtn++;
        }
        

        bt5.addEventListener("click", embaralha)
    }
    function movimenta() {
        let id = null;
        const elem = document.getElementById("animate");
        let pos = 0;
        
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
            setInterval(() => {
                if (pos == 0) {
                    movimenta()
        
                  } else {
                    pos--;
                    elem.style.top = pos + 'px';
                    elem.style.left = pos + 'px';           
                  }
                
        
              },5)


          } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';           
          }

        }
    
        
      }

    function embaralha() {
        const btnTela=document.getElementById('buttons')
        const buttons=document.getElementsByTagName('button')
        let listabuttons=Array.prototype.slice.call(buttons)
        
        var buttonListText=[]
        for(i=0; i<buttons.length;i++){
            const j=Math.floor(Math.random()*(i+1));
            [listabuttons[i],listabuttons[j]]=[listabuttons[j],listabuttons[i]];

        }
        for(i=0;i<buttons.length,i++;){
            btnTela.removeChild(buttons[i]);
        }
        for(i=0;i<listabuttons.length;i++){
            buttonListText[i]=listabuttons[i].innerText;
        }
        for(i=0;i<buttonListText.length;i++){
            const j=Math.floor(Math.random()*(i+1));
            [buttonListText[i],buttonListText[j]]=[buttonListText[j],buttonListText[i]];

        }
        for(i=0;i<buttonListText.length;i++){
            listabuttons[i].innerText=buttonListText[i]
        }
        for(i=0;i<listabuttons.length;i++){
            btnTela.appendChild(listabuttons[i])
        }
       
    }
});


