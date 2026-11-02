import { regData } from "../../mockData/regData.js";
import { regTemplate } from "../templates/regTemplate.js";

const initReg = (regNode) => {
  regNode.insertAdjacentHTML("beforeend", regTemplate(regData));
};

export default initReg;