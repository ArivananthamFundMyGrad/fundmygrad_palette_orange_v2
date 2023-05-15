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
    OFFEREDON: 50,
    ACCEPTEDON: 90,
    days: 20,
  },
  {
    name: "FEB",
    OFFEREDON: 50,
    ACCEPTEDON: 85,
    days: 45,
  },
  {
    name: "MAR",
    OFFEREDON: 65,
    ACCEPTEDON: 110,
    days: 50,
  },
  {
    name: "APR",
    OFFEREDON: 65,
    ACCEPTEDON: 90,
    days: 30,
  },
  {
    name: "MAY",
    OFFEREDON: 55,
    ACCEPTEDON: 110,
    days: 100,
  },
  {
    name: "JUN",
    OFFEREDON: 60,
    ACCEPTEDON: 120,
    days: 220,
  },
  {
    name: "JUL",
    OFFEREDON: 55,
    ACCEPTEDON: 70,
    days: 230,
  },
  {
    name: "AUG",
    OFFEREDON: 65,
    ACCEPTEDON: 90,
    days: 210,
  },
  {
    name: "SEP",
    OFFEREDON: 65,
    ACCEPTEDON: 70,
    days: 170,
  },
  {
    name: "OCT",
    OFFEREDON: 70,
    ACCEPTEDON: 50,
    days: 250,
  },
  {
    name: "NOV",
    OFFEREDON: 65,
    ACCEPTEDON: 40,
    days: 2100,
  },
  {
    name: "DEC",
    OFFEREDON: 55,
    ACCEPTEDON: 50,
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

export default function BarChart3() {
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
          name="ACCEPTED ON"
          radius={[3, 3, 0, 0]}
          maxBarSize={10}
          dataKey="ACCEPTEDON"
          fill="#33CDD7"
        />
        <Bar
          name="OFFERED ON"
          radius={[3, 3, 0, 0]}
          maxBarSize={10}
          dataKey="OFFEREDON"
          fill="#205ED7"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
