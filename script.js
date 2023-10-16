
function run() {
    let htmlCode = document.getElementById("htmlCode").value;
    let cssCode = document.getElementById("cssCode");
    let jsCode = document.getElementById("jsCode");
    let output = document.getElementById("output");

    cssCode = `<style>${cssCode.value}</style>`;
    jsCode = `<script>${jsCode.value}</script>`;
    const fullOutput = `
    <html>
        <head>
        ${cssCode}
        </head>
        <body>
            ${htmlCode}
            ${jsCode}
        </body>
    </html>
    `;
    output.srcdoc = fullOutput;
}

/*
 if we want a Run button and after clicking this button 
 then update our output, we can addEventListener like this
*/

/*
let runButton = document.getElementById('runButton');
let htmlCode = document.getElementById('htmlCode');
let cssCode = document.getElementById('cssCode');
let jsCode = document.getElementById('jsCode');
let output = document.getElementById('output');

runButton.addEventListener('click', () => {
    let htmlContent = htmlCode.value;
    let cssContent = `<style>${cssCode.value}</style>`;
    let jsContent = `<script>${jsCode.value}</script>`;

    const fullHTML = `
        <html>
            <head>
                ${cssContent}
            </head>
            <body>
                ${htmlContent}
                ${jsContent}
            </body>
        </html>
    `;

    output.srcdoc = fullHTML;
});
*/