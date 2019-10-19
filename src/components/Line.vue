<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  data() {
    return {
      datacollection: {
        labels: [
          'Question 1',
          'Question 2',
          'Question 3',
          'Question 4',
          'Question 5',
        ],
        datasets: [
          {
            label: 'Category',
            fill: false,
            backgroundColor: '#249EBF',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#249EBF',
            data: [40, 20, 30, 50, 90],
          },
          {
            label: 'Profiency',
            fill: false,
            backgroundColor: '#99CC66',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#99CC66',
            data: [50, 30, 20, 50, 80],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                gridLines: {
                  display: true,
                },
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: '',
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  },
};
</script>
