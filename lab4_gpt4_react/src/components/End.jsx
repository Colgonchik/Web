import { endData } from "../mockData/endData";

export const Header = ({ header }) => (
  <h1 className="end_header">{header}</h1>
);

export const Button = ({ title }) => (
    <button className="endBtn">{title}</button>
);

const FooterColumn = ({ title, items }) => (
  <div className="column">
    <h3>{title}</h3>
    <ul>
      {items.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  </div>
);

const End = () => {
    const { header, title, columnFirst, columnSecond, columnThird } = endData;

    return (
        <>
          <div className="end_section">
            <Header header={header} />
            <Button title={title} />
          </div>
          <div className="column_section">
                <div className="column">
                    <h3>GPT-3</h3>
                    <p>ул. Профессора Поздеева, 13, к.Г, Пермь, Пермский край, 614013</p>
                    <p>Все права защищены</p>
                </div>
                <div className="first_column">
                    <FooterColumn title="Ссылки" items={columnFirst} />
                </div>
                <div className="second_column">
                    <FooterColumn title="Компания" items={columnSecond} />
                </div>
                    <div className="third_column">
                    <FooterColumn title="Контакты" items={columnThird} />
                </div>
            </div>
            <section className="section copy">
                <p>© 2023 GPT-3. Все права защищены.</p>
            </section>
        </>
    );
};

export default End;