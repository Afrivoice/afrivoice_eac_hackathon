import type { ColumnDef } from "@tanstack/react-table";

// Components
import Title from "../title";
import { DataTable } from "../table";

type Type = {
  date: string;
  milestone: string;
};

const columns: ColumnDef<Type>[] = [
  {
    header: "Milestone",
    accessorKey: "milestone",
  },
  {
    header: "Date",
    accessorKey: "date",
  },
];

const Dates = () => {
  const data: Type[] = [
    // {
    //   date: "June 05, 2026",
    //   milestone: "Hackathon announcement",
    // },
    {
      date: "June 15, 2026",
      milestone: "Hackathon Launch",
    },
    {
      date: "July 15, 2026",
      milestone: "Submission Deadline",
    },
    {
      date: "July 15–31, 2026",
      milestone: "Review and Validation",
    },
    {
      date: "August 3, 2026",
      milestone: "Winners Announced",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">
        Important Dates (Africa/Kigali, UTC+02)
      </Title>
      <div className="flex flex-col gap-4">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Dates;
