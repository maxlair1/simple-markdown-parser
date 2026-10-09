import { charType as getCharType } from './utils.js';
import { Token } from './token.js';

const markdown = `# Welcome to mblog
## We are working on a simple parser, might take 2,000 years but that is okay!!!!
Cheers! This tab        This dual tab.
- Test`

function getLines(input: string) {
    return input.split('\n')
}

// Note: each line indicates a /n at the end; wrapping does no occur in <pre> text
function parseMarkdown(input: string) {
    let characterIndex = 0; // Number of read characters in the full md read
    let tokens: Token[] = [];
    const lines = getLines(input);

    // Tokenize
    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            characterIndex++;
            tokens.push(new Token(lines[i][j], j, i, characterIndex, lines[i][j].charCodeAt(0), getCharType(lines[i][j])));
            // console.log(`${t.getColorCode()}${t.value}\x1b[0m`, t.getCode(), t.getType())
        }
    }

    return {input, tokens};
}

const coloredInput = (input: string) => {
    let tmp = []
    let lines = []
    parseMarkdown(input).tokens.forEach((t) => {
        if (t.row !== t.getNeighbor("before")?.[0]) {
            tmp.push('\n');
        }
        tmp.push(`${t.getColorCode()}${t.value}\x1b[0m`);
    });
    return tmp.join('\n');
};

console.log(coloredInput(markdown));
