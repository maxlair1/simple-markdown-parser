export function charRegexType(char) {
  if (/[a-zA-Z]/.test(char)) {
    return "letter";
  } else if (/[0-9]/.test(char)) {
    return "number";
  } else {
    return "neither";
  }
}
// By Char number
export function charType(char) {
  const code = char.charCodeAt(0);
  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return "letter";
  } else if (code >= 48 && code <= 57) {
    return "number";
  } else if (code === 32) {
    return "space";
  } else {
    return "neither";
  }
}

const commonTypes = [
  { type: "letter", code: 32 },
  { type: "dash", code: 45 }, 
  { type: "period", code: 46 },
  { type: "hash", code: 35 },
];

// function isLetter(char) {
//   const code = char.charCodeAt(0);
//   return (code >= 65 && code <= 90) || (code >= 97 && code <= 122); // A-Z or a-z
// }

// function isNumber(char) {
//   const code = char.charCodeAt(0);
//   return code >= 48 && code <= 57; // 0-9
// }