import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import {
  Clock,
  FirstAid,
  Mountains,
  PresentationChart,
  Circle,
  PiggyBank,
  ArrowDown,
} from "@phosphor-icons/react/dist/ssr";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

// HACK: Should be replaced with a proper database call in production.
const DATE = "23/05/2024";
const DESCRIPTION = "Accrual for 23/05/2024 to 20/11/2024";
const BALANCE = "3.00";
const history = [
  {
    usedDays: null,
    earnedDays: "3.00",
  },
  {
    usedDays: "-6",
    earnedDays: null,
  },

  {
    usedDays: null,
    earnedDays: "3.00",
  },

  {
    usedDays: null,
    earnedDays: "3.00",
  },

  {
    usedDays: "-6",
    earnedDays: null,
  },

  {
    usedDays: null,
    earnedDays: "3.00",
  },
];

function Info({
  title,
  desc,
  param,
  icon,
  footer,
  children,
}: {
  title: string;
  desc: string;
  param: string;
  icon: React.ReactNode;
  footer: string;
  children: React.ReactNode | undefined;
}) {
  return (
    <Card className="flex flex-col bg-gray-100 min-w-64 h-full text-center">
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <div>
          <span className="flex items-center justify-center gap-2 text-2xl">
            {icon} {param}
          </span>{" "}
          {desc}
        </div>
        {children}
      </CardContent>
      <div className="bg-white text-blue-700 rounded-b-lg px-4 py-2 mt-auto">
        <a href="#">{footer}</a>
      </div>
    </Card>
  );
}

export default function Page() {
  return (
    <div className="bg-white py-8 divide-y-2">
      <div className="flex justify-end lg:justify-between my-4 px-8">
        <h1 className="hidden lg:flex gap-2 items-center font-bold text-xl">
          <Clock weight="bold" />
          Time Off
        </h1>
        <div className="flex flex-col items-end gap-2 lg:flex-row lg:gap-8">
          <div>
            Accrual Level Start Date{" "}
            <time className="text-blue-700">03/09-2020</time>
          </div>
          <Button variant="outline">Add Time Off Policy</Button>
        </div>
      </div>
      <div className="my-4 py-4">
        <ul className="flex overflow-x-auto [&>*]:ml-8">
          <li>
            <Info
              title="Sick"
              desc="Days Available"
              param="3"
              icon=<FirstAid />
              footer="Sick Full Time"
            >
              <a href="#" className="text-blue-700">
                1 Day Scheduled
              </a>
            </Info>
          </li>
          <li>
            <Info
              title="Annual Leave"
              desc="Days Available"
              param="10.3"
              icon=<Mountains />
              footer="Holiday Full Time"
            />
          </li>
          <li>
            <Info
              title="Comp/In Lieu Time"
              desc="Human Used (YTD)"
              param="0"
              icon=<Clock />
              footer="Comp/In Lieu Time Flexible Policy"
            />
          </li>
        </ul>
      </div>
      <div className="my-4 px-8 py-4">
        <h2 className="flex items-center gap-2 font-bold">
          <Clock weight="bold" /> Upcoming Time Off
        </h2>
        <ul className="py-2 [&>*+*]:mt-2">
          <li className="grid grid-cols-[auto_minmax(0,_1fr)] gap-x-2">
            <FirstAid className="col-start-1 row-start-1 row-span-2 text-2xl place-self-center" />
            <div className="col-start-2 row-start-1">Jan 27</div>
            <div className="col-start-2 row-start-2 flex items-center gap-2">
              <Circle weight="fill" className="text-red-700" /> 1 day of Sick
            </div>
          </li>

          <li className="grid grid-cols-[auto_minmax(0,_1fr)] gap-x-2">
            <PiggyBank className="col-start-1 row-start-1 row-span-2 text-2xl place-self-center" />
            <div className="col-start-2 row-start-1">Jul 4</div>
            <div className="col-start-2 row-start-2 flex items-center gap-2">
              Independence Day
            </div>
          </li>
        </ul>
      </div>
      <div className="my-4 py-4">
        <div className="px-8">
          <h2 className="flex items-center gap-2 font-bold">
            <PresentationChart weight="bold" /> History
          </h2>
          <div className="grid grid-cols-4 gap-2 my-4 max-w-full">
            <Select>
              <SelectTrigger
                close={true}
                className="col-start-1 row-start-1 col-span-4 md:col-span-1"
              >
                <SelectValue placeholder="Sick" />
              </SelectTrigger>
            </Select>
            <Select>
              <SelectTrigger
                close={true}
                className="col-start-1 row-start-2 md:row-start-1 md:col-start-2"
              >
                <SelectValue placeholder="All" />
              </SelectTrigger>
            </Select>
            <Select>
              <SelectTrigger className="col-start-4 row-start-2 md:row-start-1">
                <SelectValue placeholder="Balance History" />
              </SelectTrigger>
            </Select>
          </div>
        </div>
        <Table className="ml-8 overflow-x-hidden">
          <TableHeader className="bg-blue-100 text-foreground">
            <TableRow>
              <TableHead className="flex items-center gap-2">
                Date{" "}
                <button>
                  <ArrowDown />
                </button>
              </TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Used Days [-]</TableHead>
              <TableHead>Earned Days [+]</TableHead>
              <TableHead>Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((e, i) => (
              <TableRow key={i}>
                <TableCell>{DATE}</TableCell>
                <TableCell>{DESCRIPTION}</TableCell>
                <TableCell>{e.usedDays}</TableCell>
                <TableCell>{e.earnedDays}</TableCell>
                <TableCell>{BALANCE}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
