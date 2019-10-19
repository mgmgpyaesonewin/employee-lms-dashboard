<script>
import { Doughnut } from 'vue-chartjs';

export default {
  extends: Doughnut,
  data() {
    return {};
  },
  mounted() {
    this.renderChart(
      {
        labels: ['Engagement', 'Reach', 'Accuracy'],
        datasets: [
          {
            data: [20, 30, 10],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
          },
        ],
      },
      {
        hoverBorderWidth: 20,
      },
    );
  },
};
</script>
