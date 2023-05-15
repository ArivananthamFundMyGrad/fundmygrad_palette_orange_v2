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
import { useMediaQuery } from '@chakra-ui/react'
import screens from "@/utils/screens";
const data = [
  {
    name: "APR 20",
    CALLED: 20,
    ANSWERED: 10,
  },
  {
    name: "APR 21",
    CALLED: 25,
    ANSWERED: 15,
  },
  {
    name: "APR 22",
    CALLED: 20,
    ANSWERED: 10,
  },
  {
    name: "APR 23",
    CALLED: 40,
    ANSWERED: 25,
  },
  {
    name: "APR 24",
    CALLED: 35,
    ANSWERED: 30,
  },
  {
    name: "APR 25",
    CALLED: 50,
    ANSWERED: 30,
  }
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
    return (
      <div style={{ width: "200px" }} className="custom-tooltip">
        <p className="label text-[#949494] font-gola font-semibold mb-2">{`${getLabel(label)}`}</p>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div
              style={{
                height: "6px",
                width: "6px",
                backgroundColor: "#205ED7",
              }}
            ></div>
            <h1 className="text-sm font-gola ml-3">Called</h1>
          </div>
          <p className="desc"> {`${payload[0].value}`}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div
              style={{
                height: "6px",
                width: "6px",
                backgroundColor: "#1BB621",
              }}
            ></div>
            <h1 className="text-sm font-gola ml-3">Answered</h1>
          </div>
          <p className="desc"> {`${payload[1].value}`}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default function TelemarketingBarChart1() {
  const {isMobile,isTablet} = screens()

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
          right: isMobile? 0 :10,
          left: 10,
          bottom: 5,
        }}
        barGap={isMobile ? -10  : isTablet ? -40 : -25}
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
            value="No. of Calls"
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
          dataKey="CALLED"
          fill="#205ED7"
        />
        <Bar
          radius={[3, 3, 0, 0]}
          maxBarSize={10}
          dataKey="ANSWERED"
          fill="#1BB621"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
