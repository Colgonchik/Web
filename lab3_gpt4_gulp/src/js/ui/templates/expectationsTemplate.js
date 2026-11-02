
export const createIllustrationTemplate = ({ src, alt }) => {
  return `
    <img src="${src}" alt="${alt}" />
  `;
};

export const createHeaderTemplate = (header) => {
  return `
    <h2 class="exp_header">
      ${header}
    </h2>
  `;
};

export const createDescription = (description) => {
    return `
    <p class="exp_description">
      ${description}
    </p>
  `;
}

export const expTemplate = ({
    illustration,
    description,
    header,
}) => {
    const illustrationTemplate = createIllustrationTemplate(illustration);
    const headerTemplate = createHeaderTemplate(header);
    const descriptionTemplate = createDescription(description)

    const resultTemplate = `
    <div class="exp_section">
        <div class="exp_section_left">
            ${illustrationTemplate}
        </div>
        <div class="exp_section_right">
            <a href="#" class="up_cta">Запросить ранний доступ</a>
            ${headerTemplate}
            ${descriptionTemplate}
            <a href="#" class="down_cta">Запросить ранний доступ</a>
        </div>
    </div>
    `;

    return resultTemplate;
};