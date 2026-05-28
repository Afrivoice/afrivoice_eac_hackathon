// Components
import Title from "../title";

const EvaluationAndLeaderboard = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">
        Evaluation and Leaderboard
      </Title>
      <div className="flex flex-col gap-4">
        <p className="text-justify">
          Submissions will be evaluated based on{" "}
          <span className="font-black">Word Error Rate (WER)</span>.
        </p>
        <p className="text-justify">
          A <span className="font-black">Kaggle leaderboard</span> will display
          participant rankings in real time.
        </p>
      </div>
    </div>
  );
};

export default EvaluationAndLeaderboard;
