import { charType as getCharType } from './utils.js'

const markdown = `# Welcome to mblog
## We are working on a simple parser, might take 2,000 years!
Cheers!
- Test`
function getLines(input) {
    return input.split('\n')
}

function getParagraphs(input) {}

function parseMarkdown(input) {
    const lines = getLines(input)
    for (let i = 0; i < lines.length; i++) {
        console.log(lines[i])
        for (let j = 0; j < lines[i].length; j++) {
            let char = lines[i][j]
            let charCode = char.charCodeAt(0)
            let charType = getCharType(char)
            console.log(char, charCode, charType)
        }
    }
}

parseMarkdown(markdown);
