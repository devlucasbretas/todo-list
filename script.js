
function adicionar() {

    let tarefa = document.getElementById("txtarefa")
    let selects = document.getElementById("selt")
    let criarTarefa1 = document.createElement("option")
    if (tarefa.value =="") {
        window.alert("Por favor digite uma tarefa a ser adicionada!")
    } else {
        criarTarefa1.text = ` \u{1F7E6} ${tarefa.value}`
        selects.appendChild(criarTarefa1)
        tarefa.value =""
        txtarefa.focus()
    }
}
  
function addprior() {
    let tarefa = document.getElementById("txtarefa")
    let selects = document.getElementById("selt")
    let criarTarefa1 = document.createElement("option")
    if (tarefa.value =="") {
        window.alert("Por favor digite uma tarefa a ser adicionada!")
    } else {
        criarTarefa1.text = ` \u{1F7E5} ${tarefa.value}`
        selects.appendChild(criarTarefa1)
        tarefa.value =""
        txtarefa.focus()
    }
}

function excluir() {
    let tarefa = document.getElementById("txtarefa")
    let selects = document.getElementById("selt")
    let criarTarefa1 = document.createElement("option")
    if (selects.length =="") {
        window.alert("Não há tarefas a serem excluidas!")
    } else {
        selects.remove(criarTarefa1.lastElementChild)
        tarefa.value =""
        txtarefa.focus()
    }
}
    

setInterval(function(){
    
    let novaHora = new Date();
    // getHours trará a hora
    // geMinutes trará os minutos
    // getSeconds trará os segundos
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    // Chamamos a função zero para que ela retorne a concatenação
    // com os minutos e segundos
    minuto = zero(minuto);
    segundo = zero(segundo);
    // Com o textContent, iremos inserir as horas, minutos e segundos
    // no nosso elemento HTML
    document.getElementById('hora').textContent = hora+':'+minuto+'';
},1000)

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x; 

}