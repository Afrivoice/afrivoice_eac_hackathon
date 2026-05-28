// Components
import Title from "../title";

const Tracks = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">Multilingual Edge ASR Track</Title>
      <div className="flex flex-col gap-4">
        <p className="text-justify">
          Participants will build a{" "}
          <span className="font-black">single unified ASR model</span> capable
          of recognizing speech across these languages, with a strong emphasis
          on <span className="font-black">edge deployment</span> and{" "}
          <span className="font-black">real-world usability</span>.
        </p>
        <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
          <li className="text-justify">
            <span className="font-black">Languages:</span> Swahili, Kikuyu
            (Gĩkũyũ), Luo (Dholuo), Somali, Kalenjin
          </li>
          <li className="text-justify">
            <span className="font-black">Objective:</span> Encourage
            lightweight, deployable ASR suitable for real-world African contexts
            (eg. mobile devices, offline use)
          </li>
        </ul>
        <p className="font-black">Edge model conditions:</p>
        <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
          <li className="text-justify">
            <span className="font-black">Offline Capability:</span> The model
            must fully offline (no dependency on cloud inference).
          </li>
          <li className="text-justify">
            <span className="font-black">Low Resource Footprint:</span> RAM
            usage ≤ <span className="font-black">8 GB</span> during inference.
            Model size &lt; <span className="font-black">1 Billion parameters</span>.
          </li>
          <li className="text-justify">
            <span className="font-black">Compute Efficiency:</span> Must run on{" "}
            <span className="font-black">CPU-only environments</span> (No GPU
            required). Target devices include{" "}
            <span className="font-black">Android smartphones</span>,{" "}
            <span className="font-black">Raspberry Pi</span>, and{" "}
            <span className="font-black">low-cost edge hardware</span>.
          </li>
          <li className="text-justify">
            <span className="font-black">Latency Requirements:</span> Real time
            or near real-time transcription (≤ 2x audio duration)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tracks;
