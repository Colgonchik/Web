export const createHeaderTemplate = (header) => {
    return `
    <h1 class="end_header">
      ${header}
    </h1>
  `;
};

export const createButtonTemplate = (title) => {
    return`
    <button class="endBtn">
      ${title}
    </button>
    `;
};

export const endTemplate = ({
  header,
  title,
  columnFirst,
  columnSecond,
  columnThird,
}) => {
  const headerTemplate = createHeaderTemplate(header);
  const buttonTemplate = createButtonTemplate(title);

  const resultTemplate = `
  <div class="end_section">
    ${headerTemplate}
    ${buttonTemplate}
  </div>
  <div class="column_section">
    <div class="column">
      <h3>GPT-3</h3>
      <p>ул. Профессора Поздеева, 13, к.Г, Пермь, Пермский край, 614013</p>
      <p>Все права защищены</p>
    </div>
    <div class="first_column">
      <h3>Ссылки</h3>
      ${columnFirst.map(text => `<li>${text}</li>`).join('')}
    </div>
    <div class="second_column">
      <h3>Компания</h3>
      ${columnSecond.map(text => `<li>${text}</li>`).join('')}
      </div>
    <div class="third_column">
      <h3>Контакты</h3>
      ${columnThird.map(text => `<li>${text}</li>`).join('')}
    </div>
  </div>
  <section class="section copy">
    <p>© 2023 GPT-3. Все права защищены.</p>
  </section>
  `;

  return resultTemplate;
};