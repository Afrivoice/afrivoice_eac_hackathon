import type { ColumnDef } from "@tanstack/react-table";

// Components
import Title from "../title";
import { DataTable } from "../table";

type Type = {
  category: string;
  prize: string;
};

const columns: ColumnDef<Type>[] = [
  {
    header: "Prize category",
    accessorKey: "category",
  },
  {
    header: "Prizes",
    accessorKey: "prize",
  },
];

const Prizes = () => {
  const prizes: Type[] = [
    {
      category: "🥇 1st Place",
      prize: "1000 USD",
    },
    {
      category: "🥈 2nd Place",
      prize: "600 USD",
    },
    {
      category: "🥉 Local 1st Place (EAC)",
      prize: "600 USD",
    },
    {
      category: "Community champion award",
      prize: "300 USD",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">Prizes</Title>
      <div className="flex flex-col gap-4">
        <DataTable columns={columns} data={prizes} />
      </div>
    </div>
  );
};

export default Prizes;
