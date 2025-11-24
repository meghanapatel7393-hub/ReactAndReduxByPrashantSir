import "./AppCalculator.css";
import style from "./AppCalculator.module.css";
import ButtonContainer from "./calculator_component/ButtonContainer";
import Display from "./calculator_component/Display";
function AppCalculator() {
  return (
    <div id="calculator" className={style["calculator"]}>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default AppCalculator;
