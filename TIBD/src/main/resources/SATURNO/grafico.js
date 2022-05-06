let ctx = document.getElementById('container').getContext('2d');
let labels =  ['Tarefas Concluidas', 'Tarefas a serem concluidas'];
let colorHex = ['#43AA8B', '#FF0000', '#EFCA08'];

let tarefasC;
let tarefas;

if(JSON.parse(sessionStorage.getItem("usuarioCorrente")).tarefasCriadas == null || JSON.parse(sessionStorage.getItem("usuarioCorrente")).tarefasConcluidas == null){
  tarefasC = 0;
  tarefas = 0;
  localStorage.setItem('quantidade', tarefasC);
  localStorage.setItem('aConcluir', tarefas);
}else{
  tarefasC = JSON.parse(sessionStorage.getItem("usuarioCorrente")).tarefasConcluidas;
  tarefas = JSON.parse(localStorage.getItem("db")).tarefas.filter(tarefa=>tarefa.autor===JSON.parse(sessionStorage.getItem("usuarioCorrente")).id).length
}




let myChart = new Chart(ctx, { 
    type: 'pie',
    data: {
      datasets: [{
        data: [`${tarefasC}`,`${tarefas}`],
        backgroundColor: colorHex
      }],
      labels: labels
    },
    options: {
      responsive: true,
      legend: {
        position: 'bottom'
      },
      plugins: {
        datalabels: {
          color: '#fff',
          anchor: 'end',
          align: 'start',
          offset: -10,
          borderWidth: 2,
          borderColor: '#fff',
          borderRadius: 25,
          backgroundColor: (context) => {
            return context.dataset.backgroundColor;
          },
          font: {
            weight: 'bold',
            size: '10'
          },
          formatter: (value) => {
            return value + ' %';
          }
        }
      }
    }
  })