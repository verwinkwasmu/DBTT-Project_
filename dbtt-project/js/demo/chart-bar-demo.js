// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Bar Chart Example
var ctx = document.getElementById("myBarChart1A");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Number of Occupants",""],
    datasets: [{
      label: '# of Votes',
      data: [0, 15],
      backgroundColor: [
        '#4e73df',
        '#FFFFFF'
      ],
      borderColor: [
        '#9ea3a3',
        '#9ea3a3'
      ],
      borderWidth: 1
    }]
  },
  options: {
    maintainAspectRatio: false,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    title: {
      display: true,
      text: '0 / 15 Occupants',
      fontSize: 15,
      position: 'bottom'
    }
    
  }
});

var ctx = document.getElementById("myBarChart1B");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Number of Occupants",""],
    datasets: [{
      label: '# of Votes',
      data: [20 , 0],
      backgroundColor: [
        '#e74a3b',
        '#FFFFFF'

      ],
      borderColor: [
        '#9ea3a3',
        '#9ea3a3'

      ],
      borderWidth: 1
    }]
  },
  options: {
    maintainAspectRatio: false,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    title: {
      display: true,
      text: 'EXCEEDED',
      fontSize: 15,
      position: 'bottom'
    }
    
  }
});
var ctx = document.getElementById("myBarChart1C");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Number of Occupants",""],
    datasets: [{
      label: '# of Votes',
      data: [16, 4],
      backgroundColor: [
        '#4e73df',
        '#FFFFFF'

      ],
      borderColor: [
        '#9ea3a3',
        '#9ea3a3'

      ],
      borderWidth: 1
    }]
  },
  options: {
    maintainAspectRatio: false,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    title: {
      display: true,
      text: '16 / 20 Occupants',
      fontSize: 15,
      position: 'bottom'
    }
    
  }
});
var ctx = document.getElementById("myBarChart1D");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Number of Occupants",""],
    datasets: [{
      label: '# of Votes',
      data: [16, 4],
      backgroundColor: [
        '#4e73df',
        '#FFFFFF'

      ],
      borderColor: [
        '#9ea3a3',
        '#9ea3a3'

      ],
      borderWidth: 1
    }]
  },
  options: {
    maintainAspectRatio: false,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    title: {
      display: true,
      text: '16 / 20 Occupants',
      fontSize: 15,
      position: 'bottom'
    }
    
  }
});
var ctx = document.getElementById("myBarChart1E");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Number of Occupants",""],
    datasets: [{
      label: '# of Votes',
      data: [0, 20],
      backgroundColor: [
        '#4e73df',
        '#FFFFFF'

      ],
      borderColor: [
        '#9ea3a3',
        '#9ea3a3'

      ],
      borderWidth: 1
    }]
  },
  options: {
    maintainAspectRatio: false,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    title: {
      display: true,
      text: '0 / 20 Occupants',
      fontSize: 15,
      position: 'bottom'
    }
    
  }
});
var ctx = document.getElementById("myBarChart1F");
var chart = new Chart(ctx, {
    type:"doughnut",
    data: {
        labels : ["Number of Occupants",""],
        datasets: [{
            label: "Gauge",
            data : [0, 1],
            backgroundColor: [
              '#4e73df',
              '#FFFFFF'
                
            ],
            borderColor: [
              '#9ea3a3',
              '#9ea3a3'
      
            ],
            borderWidth: 1
        }]
    },
    options: {
        circumference: Math.PI,
        rotation : Math.PI,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: '0 / 20 Occupants',
          fontSize: 15,
          position: 'bottom'
        },
        plugins: {
					  datalabels: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
						  borderColor: '#ffffff',
            
						  font: function(context) {
                var w = context.chart.width;
                return {
                  size: w < 512 ? 18 : 20
                }
              },
              align: 'start',
              anchor: 'start',
              offset: 10,
						  borderRadius: 4,
						  borderWidth: 1,
              formatter: function(value, context) {
							  var i = context.dataIndex;
                var len = context.dataset.data.length - 1;
                if(i == len){
                  return null;
                }
							  return value+' mph';
						  }
            }
        }
        
        
    }
});


// function change_gauge(chart, label, data){
//   chart.data.datasets.forEach((dataset) => {
//     if(dataset.label == label){
//       dataset.data = data;
//     }  
//   });
//   chart.update();
// }

// var accelerating = false;
// function accelerate(){
//   accelerating = false;
//   window.setTimeout(function(){
//       change_gauge(chart,"Gauge",[7,3])
//       chart.options.title.text = "17 / 20 Occupants"
//       // chart.data.datasets[0].backgroundColor = ["#e74a3b", "#FFFFFF"]
//       chart.data.datasets[0].backgroundColor = ["#4e73df", "#FFFFFF"]
      
      
//     }, 1000);
    
//     window.setTimeout(function(){
//       change_gauge(chart,"Gauge",[8,2])
//       // chart.options.title.text = "EXCEEDED"
//       chart.options.title.text = "18 / 20 Occupants"
//       // chart.data.datasets[0].backgroundColor = ["#e74a3b", "#FFFFFF"]
//       chart.data.datasets[0].backgroundColor = ["#4e73df", "#FFFFFF"]

//   }, 3000);
  
// }

// // Start sequence
// accelerate();
// window.setInterval(function(){
//   if(!accelerating){
//     acelerating = true;
//     accelerate();
//   }
// }, 6000);