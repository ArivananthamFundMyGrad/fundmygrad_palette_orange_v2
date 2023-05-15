import screens from "@/utils/screens";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  TooltipProps,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const data = [
  {
    name: "JAN",
    CONVERTED: 100,
    SUCCESSFUL: 30,
  },
  {
    name: "FEB",
    CONVERTED: 120,
    SUCCESSFUL: 25,
  },
  {
    name: "MAR",
    CONVERTED: 90,
    SUCCESSFUL: 29,
  },
  {
    name: "APR",
    CONVERTED: 130,
    SUCCESSFUL: 32,
  },
  {
    name: "MAY",
    CONVERTED: 70,
    SUCCESSFUL: 30,
  },
  {
    name: "JUN",
    CONVERTED: 60,
    SUCCESSFUL: 35,
  },
  {
    name: "JUL",
    CONVERTED: 110,
    SUCCESSFUL: 25,
  },
  {
    name: "AUG",
    CONVERTED: 70,
    SUCCESSFUL: 30,
  },
  {
    name: "SEP",
    CONVERTED: 90,
    SUCCESSFUL: 35,
  },
  {
    name: "OCT",
    CONVERTED: 130,
    SUCCESSFUL: 30,
  },
  {
    name: "NOV",
    CONVERTED: 80,
    SUCCESSFUL: 25,
  },
  {
    name: "DEC",
    CONVERTED: 70,
    SUCCESSFUL: 25,
  },
];

function getLabel(label: string) {
  switch (label) {
    case "JAN":
      return "JANUARY";
    case "FEB":
      return "FEBRUARY";
    case "MAR":
      return "MARCH";
    case "APR":
      return "APRIL";
    case "MAY":
      return "MAY";
    case "JUN":
      return "JUNE";
    case "JUL":
      return "JULY";
    case "AUG":
      return "AUGUST";
    case "SEP":
      return "SEPTEMBER";
    case "OCT":
      return "OCTOBER";
    case "NOV":
      return "NOVEMBER";
    case "DEC":
      return "DECEMBER";
    default:
      return "";
  }
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload) {
    console.log(payload, active);

    return (
      <div style={{ width: "200px" }} className="custom-tooltip">
        <p className="label text-[#949494] font-gola font-semibold mb-2">{`${getLabel(
          label
        )}`}</p>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div
              style={{
                height: "6px",
                width: "6px",
                backgroundColor: "#33CDD7",
              }}
            ></div>
            <h1 className="text-sm font-gola ml-3">Converted</h1>
          </div>
          <p className="desc"> {`${payload[0].value}`}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div
              style={{
                height: "6px",
                width: "6px",
                backgroundColor: "#0057FF",
              }}
            ></div>
            <h1 className="text-sm font-gola ml-3">Successful</h1>
          </div>
          <p className="desc"> {`${payload[1].value}`}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default function TelemarketingBarChart2() {
  const {isMobile,isTablet} = screens()
  return (
    <ResponsiveContainer
    minWidth={isMobile ? 320 : 400}
    maxHeight={500}
      minHeight={300}
      width={isMobile ? "95%" : "100%"}
      height="80%"
    >
      <BarChart
        width={400}
        height={200}
        data={isMobile ? data.slice(0,5) :isTablet ? data.slice(0,7) : data}
        margin={{
          top: 30,
          right: isMobile? 0 :10,
          left: 10,
          bottom: 5,
        }}
        barGap={-10}
      >
        <CartesianGrid vertical={false} color="#DDDDDD" strokeWidth={0.5} />
        <XAxis
          opacity={0.5}
          strokeWidth={0.5}
          fontStyle={"#949494"}
          fontWeight={600}
          color="#DDDDDD"
          fontSize={11}
          axisLine={true}
          dataKey="name"
        />
        <YAxis
          opacity={0.5}
          strokeWidth={0.5}
          fontSize={11}
          fontStyle={"#949494"}
          fontWeight={600}
          color="#DDDDDD"
          axisLine={true}
        >
          <Label
            style={{
              color: "#949494",
              fontFamily: "Golos Text",
              fontSize: "11px",
            }}
            value="Days"
            angle={-90}
            position="left"
            dy={-10}
            dx={10}
          />
        </YAxis>
        <Tooltip
                cursor={{fill: 'transparent'}}

          wrapperStyle={{
            backgroundColor: "#fff",
            outline: "none",
            padding: "1rem",
            borderRadius: "10px",
          }}
          content={<CustomTooltip />}
        />
        <Legend style={{ fontSize: "11px" }} align="center" iconType="square" />
        <Bar
          name="CONVERTED"
          radius={[3, 3, 0, 0]}
          maxBarSize={10}
          dataKey="CONVERTED"
          fill="#33CDD7"

        />
        <Bar
          name="SUCCESSFUL"
          radius={[3, 3, 0, 0]}
          maxBarSize={10}
          dataKey="SUCCESSFUL"
          fill="#205ED7"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
