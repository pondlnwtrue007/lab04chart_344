// แสดง Pie Chart
const pieLabels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"];
const pieData = [7, 5, 0, 6, 7];
const pieBackgroundColors = [
    "rgba(255, 99, 132, 0.6)",
    "rgba(54, 162, 235, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)"
];

const pieCtx = document.getElementById("pieChart").getContext("2d");
const pieChart = new Chart(pieCtx, {
    type: "pie",
    data: {
        labels: pieLabels,
        datasets: [
            {
                data: pieData,
                backgroundColor: pieBackgroundColors,
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

// แสดง Bar Chart
const barLabels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
const barData = [300, 150, 180, 190, 220, 100, 400];
const barBackgroundColors = [
    "rgba(255, 99, 132, 0.6)",
    "rgba(54, 162, 235, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)"
];

const barCtx = document.getElementById("barChart").getContext("2d");
const barChart = new Chart(barCtx, {
    type: "bar",
    data: {
        labels: barLabels,
        datasets: [
            {
                data: barData,
                backgroundColor: barBackgroundColors,
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
