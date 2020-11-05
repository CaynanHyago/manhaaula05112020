document.querySelector('#btn').addEventListener('dblclick', () =>{
    //corpo da função

    let  nome, sobrenome, dep,total;

    //atribuindo valores as variaveis
    nome = document.getElementById('nome').value;
    sobrenome = document.getElementById('sobrenome').value;

    dep = parseInt(document.getElementById('dependentes').value);
    total = dep*150;

    total= total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    //document.write('A pessoa '+nome+' '+sobrenome+' tem '+' '+dep+' dependentes.');
    document.write(total);
})    