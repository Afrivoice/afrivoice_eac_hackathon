// Components
import Title from "../title";

const Overview = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">Overview</Title>
      <div className="flex flex-col gap-4">
        <p className="text-justify">
          East Africa's linguistic diversity is one of its greatest strengths,
          yet most modern speech technologies are available only for global
          languages such as English or French. This creates a digital divide
          that excludes millions of native speakers.
        </p>
        <p className="text-justify">
          The hackathon invites participants to develop inclusive and robust ASR
          models that reflect the region's linguistic richness and improve access
          to voice-driven technology for all.
        </p>
        <p className="text-justify">
          The initiative is part of the{" "}
          <span className="font-black">Africa Next Voice</span> effort and
          builds upon the{" "}
          <span className="font-black">KenCorpus Consortium</span>, a
          partnership between{" "}
          <span className="font-black">Kenyan universities, research centres</span>
          , and <span className="font-black">Digital Umuganda</span>.
        </p>
        <p className="text-justify">The hackathon aims to:</p>
        <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
          <li className="text-justify">
            Democratize access to high-quality ASR resources for local languages.
          </li>
          <li className="text-justify">
            Encourage innovation in multilingual and low-resource ASR.
          </li>
          <li className="text-justify">
            Foster collaboration among African researchers, students, startups,
            and open-source communities.
          </li>
          <li className="text-justify">
            Create reusable open datasets and baseline models that advance
            research and real-world deployment.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
