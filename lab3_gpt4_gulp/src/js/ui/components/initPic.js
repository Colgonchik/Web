import { picData } from "../../mockData/picData.js";
import { picTemplate } from "../templates/picTemplate.js";

const initPic = (picNode) => {
  picNode.insertAdjacentHTML("beforeend", picTemplate(picData));
};

export default initPic;
