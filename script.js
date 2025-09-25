// JavaScript for Virtual Tax Museum

// Function to initialize the history chart
function initHistoryChart() {
  const ctx = document.getElementById('historyChart');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [1900, 1920, 1940, 1960, 1980, 2000, 2020],
      datasets: [{
        label: 'Global tax revenue (% of GDP)',
        data: [6, 8, 12, 18, 22, 27, 33],
        borderColor: '#204080',
        backgroundColor: 'rgba(32,64,128,0.2)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '% of GDP'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Year'
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.formattedValue + '%';
            }
          }
        }
      }
    }
  });
}

// Function to initialize the corporate tax rates chart
function initRatesChart() {
  const ctx = document.getElementById('ratesChart');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['UAE', 'Russia', 'United States', 'United Kingdom', 'Canada', 'India', 'Germany', 'Sierra Leone', 'Puerto Rico', 'Zambia'],
      datasets: [{
        label: 'Corporate tax rate (%)',
        data: [9, 20, 21, 25, 15, 30, 30, 30, 37.5, 35],
        backgroundColor: '#c62828',
        borderColor: '#a32222',
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Corporate tax rate (%)'
          }
        },
        y: {
          title: {
            display: false,
            text: 'Country'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.parsed.x + '%';
            }
          }
        }
      }
    }
  });
}

// Initialize charts on page load
document.addEventListener('DOMContentLoaded', function() {
  initHistoryChart();
  initRatesChart();
});