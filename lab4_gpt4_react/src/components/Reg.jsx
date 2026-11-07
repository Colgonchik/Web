import { regData } from "../mockData/regData";

export const Header = ({ header }) => (
  <h2 className="reg_header">{header}</h2>
);

export const Description = ({ description }) => (
  <p className="reg_description">{description}</p>
);

export const Button = ({ title }) => (
    <button className="startBtn">{title}</button>
);

const Reg = () => {
    const { description, header, title } = regData;

    return (
        <>
          <div class="reg_section_left">
            <Description description={description} />
          </div>
          <div class="reg_section_right">
            <Header header={header} />
            <Button title={title} />
          </div>
        </>
    );
};

export default Reg;