import { picData } from "../mockData/picData";

export const Card = ({item}) => {
    const {src, date, title, link} = item;

    return (
        <div className="card">
            <img src={src} alt="GPT-3 и Openai" />
            <div className="card-content">
                <div className="card-date">{date}</div>
                <h3 className="card-title">{title}</h3>
                <a href="#" className="card-link">{link}</a>
            </div>
        </div>  
    );
};

export const Grid = ({cards}) => {

    return(
        <div className="grid">
            {cards.map((card, index) => (
          <Card key={index} item={card} />
        ))}
        </div>
    );
};

export const Header = ({ header }) => (
  <h2 className="pic_header">{header}</h2>
);

const Pic = () => {
    const { header, gridCards } = picData;

    return(
        <>
          <Header header={header} />
          <Grid cards={gridCards} />
        </>
    );
};

export default Pic;