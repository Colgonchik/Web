import { expData } from "../mockData/expectationsData";

export const Illustration = ({ illustration: { alt, src } }) => (
  <img src={src} alt={alt} />
);

export const Header = ({ header }) => (
  <h2 className="exp_header">{header}</h2>
);

export const Description = ({ description }) => (
  <p className="exp_description">{description}</p>
);

const Expectation = () => {
  const { header, description, illustration } = expData;

  return (
    <>
      <div className="exp_section">
        <div className="exp_section_left">
            <Illustration illustration={illustration} />
        </div>
        <div className="exp_section_right">
            <a href="#" className="up_cta">Запросить ранний доступ</a>
            <Header header={header} />
            <Description description={description} />
            <a href="#" className="down_cta">Запросить ранний доступ</a>
        </div>
      </div>
    </>
  );
};

export default Expectation;