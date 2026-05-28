// Components
import Title from "../title";

const Motivation = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">Motivation</Title>
      <div className="flex flex-col gap-4">
        <p className="text-justify">
          Kinyarwanda is spoken by more than 12 million people, yet high‑quality
          ASR systems remain scarce. This dataset and accompanying hackathon aim
          to:
        </p>
        <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
          <li className="text-justify">
            Accelerate speech-to-text research and open-source toolkits for
            Kinyarwanda.
          </li>
          <li className="text-justify">
            Provide diverse, real-world audio covering critical societal
            domains.
          </li>
          <li className="text-justify">
            Benchmark ASR systems under both supervised and semi-supervised
            settings.
          </li>
          <li className="text-justify">
            Support the development of{" "}
            <span className="font-black">digital public goods</span> by
            releasing resources under open licenses, thereby enabling public
            institutions, developers, and researchers to build inclusive voice
            technologies.
          </li>
          <li className="text-justify">
            Strengthen the{" "}
            <span className="font-black">local AI and NLP ecosystem</span> in
            Rwanda and across Africa by engaging academia, startups, and
            established companies in building language technologies.
          </li>
          <li className="text-justify">
            Promote <span className="font-black">linguistic equity</span> by
            ensuring that native Kinyarwanda speakers can interact with
            technology in their own language.
          </li>
          <li className="text-justify">
            <span className="font-black">Create robust ASR models</span> capable
            of performing reliably across various domains (healthcare,
            education, agriculture, financial services, and government) and
            supporting a wide range of real-world use cases.
          </li>
        </ul>
        <p className="text-justify">
          This initiative is aligned with global efforts to democratize AI and
          ensure equitable access to digital infrastructure through the creation
          and dissemination of openly licensed datasets, benchmarks, and
          evaluation tools.
        </p>
        <p className="text-justify">
          By providing three tracks of increasing size and difficulty, we
          encourage both newcomers (Track A) and experienced teams with stronger
          compute resources (Tracks B & C) to contribute models that generalize
          across domains (news, conversational, educational, medical).
        </p>
      </div>
    </div>
  );
};

export default Motivation;
