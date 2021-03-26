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
    toFixedFix = function (n, prec) {
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
// Bar chart
var ctx = document.getElementById("myBarChart1A");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Current Hygiene Level"],
    datasets: [{
      label: '# of Votes',
      data: [75, 25],
      backgroundColor: [
        'rgba(0, 230, 64, 1)',
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
      text: '75%',
      fontSize: 15,
      position: 'bottom'
    },

    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
        }
      }
    }

  }
});
var ctx = document.getElementById("myBarChart1B");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Current Hygiene Level"],
    datasets: [{
      label: '# of Votes',
      data: [65, 35],
      backgroundColor: [
        'rgba(0, 230, 64, 1)',
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
      text: '65%',
      fontSize: 15,
      position: 'bottom'
    },
    layout: {
      margin: {
        left: 0,
        right: 0,
        top: 50,
        bottom: 0
      }
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
        }
      }
    }
  }

});

var ctx = document.getElementById("myBarChart1C");
var myChart = new Chart(ctx, {
  
  type: 'doughnut',
  data: {
    labels: ["Current Hygiene Level"],
    datasets: [{
      label: '# of Votes',
      data: [43, 57],
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
      text: '43%',
      fontSize: 15,
      position: 'bottom'
    },

    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
        }
      }
    }
  }

});

var ctx = document.getElementById("myBarChart1D");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Current Hygiene Level"],
    datasets: [{
      label: '# of Votes',
      data: [80, 20],
      backgroundColor: [
        'rgba(0, 230, 64, 1)',
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
      text: '80%',
      fontSize: 15,
      position: 'bottom'
    },

    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
        }
      }
    }
  }

});
var ctx = document.getElementById("myBarChart1E");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Current Hygiene Level"],
    datasets: [{
      label: '# of Votes',
      data: [55, 45],
      backgroundColor: [
        'rgba(0, 230, 64, 1)',
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
      text: '55%',
      fontSize: 15,
      position: 'bottom'
    },

    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
        }
      }
    }
  }

});
var ctx = document.getElementById("myBarChart1F");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Current Hygiene Level"],
    datasets: [{
      label: '# of Votes',
      data: [75, 25],
      backgroundColor: [
        'rgba(0, 230, 64, 1)',
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
      text: '75%',
      fontSize: 15,
      position: 'bottom'
    },

    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
        }
      }
    }
  }

});