// Components
import Title from "../title";

const Rules = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">Hackathon Rules</Title>
      <div className="flex flex-col gap-6">
        <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
          <li className="text-justify">
            <span className="font-black">Team size</span> ≤ 5 participants.
          </li>
          <li className="text-justify">
            <span className="font-black">One leaderboard account</span> per
            team.
          </li>
          <li className="text-justify">
            <span className="font-black">No manual transcription</span> or
            human correction of test audio.
          </li>
          <li className="text-justify">
            All submitted <span className="font-black">code</span>,{" "}
            <span className="font-black">
              trained model checkpoints/weights
            </span>
            , and <span className="font-black">training scripts</span> must be{" "}
            <span className="font-black">made publicly available</span> (e.g.,
            in a GitHub repository or huggingface) and released under a
            permissive open source license (Apache 2.0, MIT, BSD-3 Clause, or
            MPL-2.0).
          </li>
          <li className="text-justify">
            The <span className="font-black">top 5</span> teams per track must
            provide a short technical report;{" "}
            <span className="font-black">track winners</span> must publish a
            detailed blog post or workshop paper.
          </li>
          <li className="text-justify">
            Organizers may request{" "}
            <span className="font-black">reproducibility artifacts</span>{" "}
            (training logs, checkpoints, hardware specs).
          </li>
          <li className="text-justify">
            Any <span className="font-black">data or model cards</span> provided
            by organizers must accompany the final submission.
          </li>
          <li className="text-justify">
            External pre-trained models are allowed, provided they are properly
            cited and comply with the dataset's license.
          </li>
          <li className="text-justify">
            <span className="font-black">
              Under 1 Billion parameters in total.
            </span>
          </li>
          <li className="text-justify">
            Capable of running inference on a{" "}
            <span className="font-black">
              Raspberry Pi device with &gt;= 8 GB RAM
            </span>{" "}
            (eg. Raspberry Pi 4) or run on a{" "}
            <span className="font-black">smartphone with &gt;=8GB RAM</span>.
          </li>
          <li className="text-justify">
            Submissions must include a{" "}
            <span className="font-black">hardware validation report</span>{" "}
            showing inference latency for all the test set.
          </li>
          <li className="text-justify">
            Models exceeding the parameter or memory constraints will be{" "}
            <span className="font-black">automatically disqualified</span>.
          </li>
          <li className="text-justify">
            For the winning teams to be validated, organizers will run the model
            to ensure it adheres to the standard mentioned above.
          </li>
        </ul>

        <div className="flex flex-col gap-4 items-start">
          <Title className="text-2xl text-[#009263]">Submission Format</Title>
          <p>Participants must submit:</p>
          <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
            <li className="text-justify">
              Plain text transcripts for the test set (one file per audio or a
              consolidated{" "}
              <span className="text-[#009263] font-black">.tsv/.csv</span>)
            </li>
            <li className="text-justify">
              A URL link to their{" "}
              <span className="font-black">public GitHub repository</span>{" "}
              containing source code and instructions
            </li>
            <li className="text-justify">
              A URL link to a{" "}
              <span className="font-black">
                technical blog post or workshop paper (PDF)
              </span>{" "}
              explaining their methodology
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rules;
