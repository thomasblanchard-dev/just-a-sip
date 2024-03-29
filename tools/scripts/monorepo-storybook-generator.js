const generateLinks = (package) => `
  <a href="${package.name}" target="_blank" rel="noopener noreferrer" class="sptx-btn">
    ${package.name}
  </a>
`;

const generateHTML = (packages) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Just a Sip Design System</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap"
      rel="stylesheet"
    />
    <style>
      .sptx-container {
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center;
        min-height: 100vh;
      }

      .sptx-btn {
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 1.5rem;
        font-family: 'Roboto', 'system-ui', '-apple-system', sans-serif;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5;
        color: #285192;
        text-align: center;
        vertical-align: middle;
        text-decoration: none;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        border: 0 solid none;
        background-color: #e3ebf7;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      }

      .sptx-btn:hover {
        color: #285192;
        background-color: #d8dfeb;
      }
    </style>
  </head>
  <body>
    <div class="sptx-container">
      ${packages.map(generateLinks).join('')}
  </body>
  </html>
`;

module.exports = function buildMonorepoIndex(packages) {
  return generateHTML(packages);
};
