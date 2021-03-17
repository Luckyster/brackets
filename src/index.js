function inStr(str, bracketsConfig) {
    let strOut = str;
    for (const bracketTemplate of bracketsConfig) {
        let pos = strOut.indexOf(bracketTemplate[0] + bracketTemplate[1]);

        if (pos !== -1) {
            strOut = strOut.slice(0, pos) + strOut.slice(pos + 2);
            strOut = inStr(strOut, bracketsConfig);
        }
    }
    return strOut;
}

module.exports = (str, bracketsConfig) => inStr(str, bracketsConfig) === '';
