// Assets
import logo from "../../assets/logo.svg";
import mcaai from "../../assets/mcaai.svg";

// Components
import Width from "../width";
import Title from "../title";

const Hero = () => {
  return (
    <Width className="h-[800px] bg-[#009263] sm:rounded-lg relative flex flex-col items-center overflow-hidden mb-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/waves.svg')] bg-cover bg-no-repeat opacity-35 bg-fixed"
      />
      <div className="z-10 xl:w-3/5 w-full flex flex-col items-center justify-center gap-5 md:mt-56 mt-40">
        <Title className="text-white">
          AfriVoices Automatic Speech Recognition Hackathon.
        </Title>
        <p className="text-white text-center w-5/6">
          AfriVoices is a multilingual speech hackathon designed to accelerate
          research and innovation in Automatic Speech Recognition (ASR) for
          select East African languages —{" "}
          <span className="font-bold">Swahili</span>,{" "}
          <span className="font-bold">Kikuyu (Gĩkũyũ)</span>,{" "}
          <span className="font-bold">Luo (Dholuo)</span>,{" "}
          <span className="font-bold">Somali</span>,{" "}
          <span className="font-bold">Maasai</span>, and{" "}
          <span className="font-bold">Kalenjin</span>.
        </p>
      </div>
      <div className="z-10 absolute bottom-4 md:right-auto right-4 left-4 w-auto p-6 h-auto bg-white rounded gap-8 flex flex-wrap flex-row items-center">
        <p>Organized by:</p>
        <img src={mcaai} alt="mcaai" className="w-[200px]" />
        <img src={logo} alt="gates" className="w-[150px]" />
      </div>
    </Width>
  );
};

export default Hero;
