import { expData } from "../../mockData/expectationsData.js";
import { expTemplate } from "../templates/expectationsTemplate.js";

const initExp = (expNode) => {
  expNode.insertAdjacentHTML("beforeend", expTemplate(expData));
};

export default initExp;