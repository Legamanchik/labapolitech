let ctx = document.getElementById('graph').getContext('2d');
let donut = new Chart(ctx,{
    type: 'doughnut',
    data: {

      datasets: [{ 
         data: [25, 23, 18, 16, 15, 10, 9] 
         
        }],
    },
    options: {
       
      plugins: {
        doughnutlabel: {
          labels: [{text:"bodya"}],
        },
      },
    },
  })

let line = document.getElementById('line').getContext('2d');
let linegraph = new Chart(line,{
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
})
