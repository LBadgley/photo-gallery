function makeImagesTemplate(image) {
    const html = /*html*/`
    <li>
        <h1>${image.title}</h1>
        <img src = "${image.url}">
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
} 
export default makeImagesTemplate;