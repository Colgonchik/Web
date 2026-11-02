export const createButtonTemplate = (title) => {
    return`
    <button class="startBtn">
      ${title}
    </button>
    `;
};

export const createDescriptionTemplate = (description) => {
  return `
    <p class="reg_description">
      ${description}
    </p>
  `;
};

export const createHeaderTemplate = (header) => {
  return `
    <h3 class="reg_header">
      ${header}
    </h3>
  `;
};

export const regTemplate = ({
    title,
    description,
    header,
}) => {
    const headerTemplate = createHeaderTemplate(header);
    const descriptionTemplate = createDescriptionTemplate(description);
    const buttonTemplate = createButtonTemplate(title);

    const resultTemplate = `
        <div class="reg_section_left">
            ${descriptionTemplate}
        </div>
        <div class="reg_section_right">
            ${headerTemplate}
            ${buttonTemplate}
        </div>
        `;

    return resultTemplate;
};