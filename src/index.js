function inStr(str, bracketsConfig) {
    let strOut = str;
    for (let bracketTemplate of bracketsConfig) {
        let pos = strOut.indexOf(bracketTemplate[0] + bracketTemplate[1]);

        if (pos !== -1) {
            strOut = strOut.slice(0, pos) + strOut.slice(pos + 2);
            strOut = inStr(strOut, bracketsConfig);
        }
    }
    return strOut;
}

module.exports = function check(str, bracketsConfig) {
    if (inStr(str, bracketsConfig) === '') {
        return true;
    } else {
        return false;
    }
}
