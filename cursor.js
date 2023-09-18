import {convertAniBinaryToCSS} from 'ani-cursor';

async function applyCursor(selector, aniUrl) {
    const response = await fetch(aniUrl);
    const data = new Uint8Array(await response.arrayBuffer());

    const style = document.createElement('style');
    style.innerText = convertAniBinaryToCSS(selector, data);

    document.head.appendChild(style);
}

const h1 = document.createElement('h1');
h1.id = 'pizza';
h1.innerText = 'Pizza Time!';
document.body.appendChild(h1);

applyCursor("#pizza", "/vs/cursor/2.ani");