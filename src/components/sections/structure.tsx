import type { ColumnDef } from "@tanstack/react-table";

// Components
import Title from "../title";
import { DataTable } from "../table";

type Language = {
  language: string;
  dialects: string;
  iso: string;
  read: string;
  spontaneous: string;
  total: string;
};

const columns: ColumnDef<Language>[] = [
  {
    header: "Language",
    accessorKey: "language",
    cell: ({ row }) => (
      <div className="max-w-[200px]">{row.getValue("language")}</div>
    ),
  },
  {
    header: "Dialects",
    accessorKey: "dialects",
    cell: ({ row }) => (
      <div className="max-w-[400px]">{row.getValue("dialects")}</div>
    ),
  },
  {
    header: "ISO",
    accessorKey: "iso",
    cell: ({ row }) => (
      <div className="max-w-[200px] text-[#009263]">{row.getValue("iso")}</div>
    ),
  },
  {
    header: "Collected using the Read method (Hrs)",
    accessorKey: "read",
    cell: ({ row }) => (
      <div className="max-w-[200px]">{row.getValue("read")}</div>
    ),
  },
  {
    header: "Collected using the spontaneous method (Hrs)",
    accessorKey: "spontaneous",
    cell: ({ row }) => (
      <div className="max-w-[200px]">{row.getValue("spontaneous")}</div>
    ),
  },
  {
    header: "Total No. Hours",
    accessorKey: "total",
    cell: ({ row }) => (
      <div className="max-w-[200px]">{row.getValue("total")}</div>
    ),
  },
];

const Structure = () => {
  const data: Language[] = [
    {
      language: "Swahili",
      dialects:
        "Swahili-english (nairobi, kisi, wajir, mombasa, nakuru), Swahili Tanzania",
      iso: "Swa",
      read: "0",
      spontaneous: "2979",
      total: "2979",
    },
    {
      language: "Dholuo",
      dialects: "Nyijuodwet, Ntlambo",
      iso: "Luo",
      read: "185",
      spontaneous: "528",
      total: "723",
    },
    {
      language: "Kikuyu",
      dialects: "Gi-Kabete, Ki-Mathira, Ki-Muranga, Ki-Kibi & Gi-Githugu",
      iso: "Kik",
      read: "183",
      spontaneous: "571",
      total: "754",
    },
    {
      language: "Somali",
      dialects: "Maadino, Mugdishu",
      iso: "som",
      read: "118",
      spontaneous: "884",
      total: "1002",
    },
    {
      language: "Kalenjin",
      dialects: "Nandi & Kipsigis",
      iso: "kal",
      read: "122",
      spontaneous: "399",
      total: "521",
    },
    {
      language: "Maasai",
      dialects: "Kimasasi & Kioamburu",
      iso: "mas",
      read: "31",
      spontaneous: "494",
      total: "525",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">Dataset Structure</Title>
      <div className="flex flex-col gap-4">
        <p className="text-justify">
          The <span className="font-black">AfriVoices-KE dataset</span> consists
          of both <span className="font-black">scripted</span> and{" "}
          <span className="font-black">unscripted</span> speech samples recorded
          across multiple dialects and regions.
        </p>
        <p className="text-justify">
          It supports development of ASR models in diverse linguistic and
          environmental conditions.
        </p>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Structure;
