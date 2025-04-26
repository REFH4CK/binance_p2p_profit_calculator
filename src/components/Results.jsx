import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";

export function Results({ capital = 0, sellRate = 0, buyRate = 0 }) {
  const buyComission = 0.002; // 0.2% al comprar
  const sellComission = 0.002; // 0.2% al vender

  // Vende USDT a VES (se resta otro 0.2%)
  const vesFromSell = capital * sellRate * (1 - sellComission) || 0;

  let finalUsdt = 0;
  let profit = 0
  
  if ( buyRate != 0) {
    // Compra USDT nuevamente con los VES (otra comisión del 0.2%)
    finalUsdt = (vesFromSell / buyRate) * (1 - buyComission) || 0;
  }
  
  if (sellRate != 0 && buyRate != 0) {
    profit = finalUsdt - capital || 0;
  }

  return (
    <>
      <Fade triggerOnce direction="up">
        <section className="w-[18rem] h-[10rem] bg-slate-700/70 rounded-2xl p-4 shadow-lg shadow-slate-900/80 text-[#fff]/70 font-['Ubuntu']">
          <h2 className="mb-2 text-lg font-light underline font-['Ubuntu']">Results: </h2>
          <p>
            <span className="font-bold">VES</span> obtenidos:{" "}
            <span className="bg-[#88964a] px-2 rounded font-bold text-slate-800">
              {vesFromSell.toFixed(2)} Bs
            </span>
          </p>
          <p>
            <span className="font-bold">USDT</span> finales:{" "}
            <span className="bg-[#88964a] px-2 rounded font-bold text-slate-800">
              {finalUsdt.toFixed(3)} $
            </span>
          </p>
          <p>
            <span className="font-bold">Profit</span> USDT:{" "}
            <span className="bg-[#88964a] px-2 rounded font-bold text-slate-800">
              {profit.toFixed(3)} $
            </span>
          </p>
        </section>
      </Fade>
    </>
  );
}

Results.PropTypes = {
  capital: PropTypes.number.isRequired,
  sellRate: PropTypes.number.isRequired,
  buyRate: PropTypes.number.isRequired,
};
