
import * as fs from 'fs'

const createCardBackSVG = () => {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="300" viewBox="0 0 200 300">
        <rect width="200" height="300" fill="#004080" />
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="3" fill="white" />
        </pattern>
        <rect width="200" height="300" fill="url(#dots)" />
        <polygon points="100,50 150,150 100,250 50,150" fill="#ffcc00"/>
    </svg>
    `;
};

const saveCardBackSVG = (filePath) => {
    const svgContent = createCardBackSVG();
    fs.writeFileSync(filePath, svgContent);
};

saveCardBackSVG('card-back.svg');
