
import { charType as getCharType } from './utils.js'
// will be used for each character, i.e. token.
// Each will be constructed with all relational data for highest value.

// We will need each tokens location (row, col), value, id (unique). Maybe more but lets start with that.
// First goal is to convert this string:
// ## I am a title
// into tokens, then 

// Maybe we break it up overtime to save performance. It runs on a portion of the text, then returns the values,
// and on change we maintain the id so we can check via debounce just that line again.

const NeighborOffsets = {
    "below": [0, -1],
    "before": [1, 0],
    "after": [0, 1],
    "above": [-1, 0],
}

export class Token {
    value;
    id;
    row;
    col;
    constructor(
        value: string, id: number, row: number, col: number, code: number, type: string
     ) {
        this.value = value;
        this.id = id;
        this.row = row;
        this.col = col;
    }
    // [x, y] = [col, row]
    getNeighbor(axis: "above" | "below" | "before" | "after") {
        const where = NeighborOffsets[axis] ?? [0, 0];
        const n = [this.row + where[0]!, this.col + where[1]!];
    }
    getLocation() {
        return [this.row, this.col];
    }
    getCode = () => {
        return this.value.charCodeAt(0);
    }
    getType = () => {
        return getCharType(this.value);
    }
    getColorCode = () => {
        switch (this.getType()) {
            case "letter":
                return Bun.color("green", "ansi-16m");
            case "number":
                return Bun.color("blue", "ansi-16m");
            case "neither":
                return Bun.color("yellow", "ansi-16m");
            default:
                return "\x1b[31m";
        }
    }
}
