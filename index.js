//To convert first letter of string into Capital

function toProper(string) {
    string = removeWhiteSpace(string);
    let pieces = string.split(" ");
    for (let i = 0; i < pieces.length; i++) {
        let j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
    }
    return pieces.join(" ");
}

//To remove multiple white spaces from the string
function removeWhiteSpace(string) {
    if (string != null) {
        string = string.replace(/\s\s+/g, ' ');
    }
    return string;
}

module.exports = { toProper, removeWhiteSpace };