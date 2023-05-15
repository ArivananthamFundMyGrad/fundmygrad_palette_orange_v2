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
} from "recharts";
import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { useMediaQuery } from "@chakra-ui/react";
const data = [
  {
    name: "JAN",
    OFFERED: 50,
    ACCEPTED: 90,
    days: 20,
  },
  {
    name: "FEB",
    OFFERED: 50,
    ACCEPTED: 85,
    days: 45,
  },
  {
    name: "MAR",
    OFFERED: 65,
    ACCEPTED: 110,
    days: 50,
  },
  {
    name: "APR",
    OFFERED: 65,
    ACCEPTED: 90,
    days: 30,
  },
  {
    name: "MAY",
    OFFERED: 55,
    ACCEPTED: 110,
    days: 100,
  },
  {
    name: "JUN",
    OFFERED: 60,
    ACCEPTED: 120,
    days: 220,
  },
  {
    name: "JUL",
    OFFERED: 55,
    ACCEPTED: 70,
    days: 230,
  },
  {
    name: "AUG",
    OFFERED: 65,
    ACCEPTED: 90,
    days: 210,
  },
  {
    name: "SEP",
    OFFERED: 65,
    ACCEPTED: 70,
    days: 170,
  },
  {
    name: "OCT",
    OFFERED: 70,
    ACCEPTED: 50,
    days: 250,
  },
  {
    name: "NOV",
    OFFERED: 65,
    ACCEPTED: 40,
    days: 2100,
  },
  {
    name: "DEC",
    OFFERED: 55,
    ACCEPTED: 50,
    days: 190,
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
            <h1 className="text-sm font-gola ml-3">Accepted</h1>
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
            <h1 className="text-sm font-gola ml-3">Offered</h1>
          </div>
          <p className="desc"> {`${payload[1].value}`}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default function BarChart1() {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const [isTablet] = useMediaQuery("(max-width: 1023px)");


  return (
    <ResponsiveContainer
      minWidth={isMobile ? 300 : 400}
      maxHeight={500}
      minHeight={300}
      width={isMobile ? "95%" : "100%"}
      height="80%"
    >
      <BarChart
        width={300}
        height={200}
        data={isMobile ? data.slice(0,5) :isTablet ? data.slice(0,7) : data}
        margin={{
          top: 30,
          right: isMobile ? 0 : 10,
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
          radius={[3, 3, 0, 0]}
          maxBarSize={10}
          dataKey="ACCEPTED"
          fill="#33CDD7"
        />
        <Bar
          radius={[3, 3, 0, 0]}
          maxBarSize={10}
          dataKey="OFFERED"
          fill="#205ED7"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
