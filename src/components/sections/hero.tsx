// Assets
import logo from "../../assets/logo.svg";
import mcaai from "../../assets/mcaai.svg";
import maseno from "../../assets/maseno.png";

// Components
import Width from "../width";
import Title from "../title";

export const OrganizerCard = ({ className = "" }: { className?: string }) => (
  <Width>
    <div className={`p-6 bg-white rounded gap-8 flex flex-wrap flex-col sm:flex-row items-center ${className}`}>
      <p>Organized by:</p>
      <div className="flex items-center gap-6 flex-wrap justify-center">
        <a href="https://mcaai.maseno.ac.ke/" target="_blank" rel="noopener noreferrer">
          <img src={mcaai} alt="mcaai" className="w-[200px]" />
        </a>
        <a href="https://www.maseno.ac.ke/" target="_blank" rel="noopener noreferrer">
          <img src={maseno} alt="maseno university" className="w-[160px]" />
        </a>
        <a href="https://digitalumuganda.com/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="digital umuganda" className="w-[150px]" />
        </a>
      </div>
    </div>
  </Width>
);

const Hero = () => {
  return (
    <Width className="h-[800px] bg-[#009263] sm:rounded-lg relative flex flex-col items-center overflow-hidden mb-4 md:mb-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/waves.svg')] bg-cover bg-no-repeat opacity-35 bg-fixed"
      />
      <div className="z-10 xl:w-3/5 w-full flex flex-col items-center justify-center gap-5 mt-56">
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
      <OrganizerCard className="z-10 absolute bottom-4 left-4 w-auto hidden md:flex" />
    </Width>
  );
};

export default Hero;
