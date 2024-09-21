<script setup>
import { Chart } from 'chart.js/auto';
import { onMounted } from 'vue';

const labels = ["1% Code review", "2% Issues", "9% Pull requests", "88% Commits"];
const data = {
  labels: labels,
  datasets: [{
    label: "A graph representing Djoufson's contributions",
    data: [1, 2, 9, 88],
    fill: true,
    backgroundColor: '#006d32',
    borderColor: '#39d353',
    pointBackgroundColor: '#ffffff',
    pointBorderColor: '#39d353',
    pointHoverBackgroundColor: '#39d353',
    pointHoverBorderColor: '#39d353'
  }]
};
const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
  spanGaps: false
};

onMounted(() =>{
  const ctx = document.getElementById("activity-chart");
  new Chart(ctx, config);
});
</script>

<template>
  <canvas id="activity-chart"></canvas>
</template>