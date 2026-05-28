// Components
import Width from "./components/width";
import Nav from "./components/sections/nav";
import Hero from "./components/sections/hero";
import Dates from "./components/sections/dates";
import Rules from "./components/sections/rules";
import Prizes from "./components/sections/prizes";
import Tracks from "./components/sections/tracks";
import License from "./components/sections/license";
import Overview from "./components/sections/overview";
import Structure from "./components/sections/structure";
import EvaluationAndLeaderboard from "./components/sections/evaluation";

function App() {
  return (
    <main className="w-full h-auto flex flex-col items-center">
      <Nav />
      <Hero />
      <Width className="flex flex-col gap-10 px-4">
        <Overview />
        <Tracks />
        <Structure />
        <EvaluationAndLeaderboard />
        <Rules />
        <Dates />
        <Prizes />
      </Width>
      <div className="w-full bg-[#E0EEE9] mt-10 py-10 flex flex-col items-center">
        <Width>
          <License />
        </Width>
      </div>
    </main>
  );
}

export default App;
