import ReactECharts from "echarts-for-react";

export default function DashboardTitle() {
  const titleOptions = {
    graphic: {
      elements: [
        {
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: "Dashboard",
            fontSize: 25,
            fontWeight: "bold",
            lineDash: [0, 200],
            lineDashOffset: 0,
            fill: "transparent",
            stroke: "#000",
            lineWidth: 1,
            innerHeight: 5,
          },
          keyframeAnimation: {
            duration: 2000,
            loop: false,
            keyframes: [
              {
                percent: 0.7,
                style: {
                  fill: "transparent",
                  lineDashOffset: 200,
                  lineDash: [200, 0],
                },
              },
              {
                // Stop for a while.
                percent: 0.8,
                style: {
                  fill: "transparent",
                },
              },
              {
                percent: 1,
                style: {
                  fill: "black",
                },
              },
            ],
          },
        },
      ],
    },
  };
  return (
    <ReactECharts
      option={titleOptions}
      style={{
        height: "100%",
        width: "100%",
      }}
    />
  );
}
