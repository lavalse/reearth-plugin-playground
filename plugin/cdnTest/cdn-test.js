
const html = `
<canvas id="chart" width="400" height="400"></canvas>
<canvas id="chart2" width="400" height="400"></canvas>
<script id="chartjs" src="https://cdn.jsdelivr.net/npm/chart.js@3.6.1/dist/chart.min.js"></script>
<script>
  let property, chart, chart2, fetchedData;

  document.getElementById("chartjs").addEventListener("load", () => {

    console.log("hello");

    const ctx = document.getElementById('chart').getContext('2d');
    const ctx2 = document.getElementById('chart2').getContext('2d');
    chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["male", "female"],
        datasets: [
          {
            label: "Label!!",
            data: [30, 70],
            backgroundColor: ["blue", "red"]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "男女比"
          }
        }
      }
    });
    chart2 = new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ["-10", "10", "20", "30", "40", "50", "60-64", "65+" ],
        datasets: [
          {
            label: "Label!!",
            data: [10,10,10,10,10,10,10,30],
            backgroundColor: ["red", "blue", "yellow", "green", "pink", "purple", "gray", "white"]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "年齢比"
          }
        }
      }
    });
    updateChart();
  });

</script>
`;

reearth.ui.show(html);
reearth.on("update", send);
send();

function send() {
  if (reearth.block?.property?.default) {
    reearth.ui.postMessage(reearth.block.property.default);
  }
}