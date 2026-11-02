
export const cardTemplate = ({src, date, title, link}) => {
  return `
    <div class="card">
      <img src="${src}" alt="GPT-3 и Openai">
      <div class="card-content">
        <div class="card-date">${date}</div>
        <h3 class="card-title">${title}</h3>
        <a href="#" class="card-link">${link}</a>
      </div>
    </div>
  `;
};

export const createGridTemplate = (cards) => {
  const cardsHTML = cards.map(card => cardTemplate(card)).join('');
  
  const template = `
    <div class="grid">
      ${cardsHTML}
    </div>
  `;

  return template;
};

export const createHeaderTemplate = (header) => {
  return `
    <h2 class="pic_header">
      ${header}
    </h2>
  `;
};

export const picTemplate =({
    header,
    gridCards,
}) => {
    const headerTemplate = createHeaderTemplate(header);
    const gridTemplate = createGridTemplate(gridCards);

    const resultTemplate = `
        ${headerTemplate}
        ${gridTemplate}
    `;

    return resultTemplate;
};