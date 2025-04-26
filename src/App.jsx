import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { Results } from "./components/Results";

export function App() {
  const [capital, setCapital] = useState(0);
  const [sellRate, setSellRate] = useState(0);
  const [buyRate, setBuyRate] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "capital":
        setCapital(value);
        break;
      case "sellRate":
        setSellRate(value);
        break;
      case "buyRate":
        setBuyRate(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main className="flex items-center flex-col justify-center gap-6">
        <div className="fixed -z-10 top-0 h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          </div>
        </div>

        <section className="w-full flex flex-col items-center h-full pt-[6rem]">
              <Fade direction="up" triggerOnce>
                <form
                  className="bg-slate-700/70 rounded-2xl p-6 flex flex-col gap-6 items-center justify-center shadow-lg shadow-slate-900/80"
                  onSubmit={handleSubmit}
                >
                  <Input
                    type={"text"}
                    id={"capital"}
                    name={"capital"}
                    onChange={handleInputChange}
                    label={"Capital"}
                    placeholder={"Initial capital"}
                  />
                  <Input
                    type={"text"}
                    id={"sellRate"}
                    name={"sellRate"}
                    onChange={handleInputChange}
                    label={"Sell rate"}
                    placeholder={"USDT Sell rate"}
                  />
                  <Input
                    type={"text"}
                    id={"buyRate"}
                    name={"buyRate"}
                    onChange={handleInputChange}
                    label={"Buy Rate"}
                    placeholder={"USDT Buy rate"}
                  />

                  <button className="bg-slate-600/60 text-slate-200 w-full h-[2.5rem] rounded-lg mt-4 hover:bg-slate-900/30 transition-all duration-300 cursor-pointer shadow-md">
                    Calculate
                  </button>
                </form>
              </Fade>
            </section>

            <Results capital={capital} sellRate={sellRate} buyRate={buyRate}/>
            
      </main>
    </>
  );
}
