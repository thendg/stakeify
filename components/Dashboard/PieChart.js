import ReactECharts from "echarts-for-react";

export default function Piechart() {
  const PieChartOptions = {
    //backgroundColor: '#FFFFFF',
    title: {
      text: "Stakeholders",
      left: "center",
      textStyle: {
        color: "#000000",
      },
    },
    tooltip: {
      trigger: "item",
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: [
          { value: 335, name: "Team 1" },
          { value: 310, name: "Team 2" },
          { value: 274, name: "Team 3" },
          { value: 235, name: "Team 4" },
          { value: 400, name: "Team 5" },
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: "radius",
        label: {
          color: "rgba(108, 122, 137, 1)",
        },
        labelLine: {
          lineStyle: {
            color: "rgba(108, 122, 137, 1)",
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: "#8247e5",
          shadowBlur: 200,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function (idx) {
          return Math.random() * 200;
        },
      },
    ],
  };
  return <ReactECharts option={PieChartOptions} />;
}
