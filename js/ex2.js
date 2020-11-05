

document.querySelector('#btn').addEventListener('click',()=>{
    let n1,n2,soma,subtracao,multiplicacao,divisao;
    n1=parseInt(document.getElementById('n1').value);
    n2=parseInt(document.getElementById('n2').value); 
    
    soma = n1+n2;
    subtracao = n1-n2;
    multiplicacao = n1*n2;

    
    if (n2 == 0) 
    {
       divisao='impossivel dividir por 0!'; 
    }
    else
    {
        divisao = n1/n2;
    }

    alert('soma= ' + soma+ '\n'+
    'subtração= '+ subtracao + '\n'+
    'multiplicação= '+ multiplicacao + '\n'+
    'divisão= '+ divisao);

})


document.querySelector('#btn1').addEventListener('click',()=>{

    let numh,numm,idh,idm,vlh,vlm;

    numh= parseInt(document.getElementById('h').value);
    numm= parseInt(document.getElementById('m').value);

    idh= parseInt(document.getElementById('idh').value);
    idm=parseInt(document.getElementById('idm').value);


    if (idh>20){

       vlh=80*numh; 
    }
     else 
    {
       vlh=100*numh; 
    }

    if (idm >= 20) {
        vlm=120*numm;
    } 
    else 
    {
        vlm=130*numm;
    }

    vlh= vlh.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    vlm= vlm.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    alert("Valor a ser gasto com os meninos: "+vlh+'\n'+
          "Valor a ser gasto com as meninas: "+vlm);



})