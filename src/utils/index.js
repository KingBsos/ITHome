function commonNumberFormat(num) {
    let companys = ["万", "亿", "兆", '京'];
    let [numInt, numFloat] = `${num}`.split(".");
    numInt = numInt.split("");
    let newNumInt = "";
    let companyNum = 0;
    while (1) {
        if (numInt.length > 4) {
            newNumInt = `${companys[companyNum]}${numInt.splice(numInt.length - 4).join('')}` + newNumInt;
        } else {
            newNumInt = numInt.slice().join('') + newNumInt;
            break;
        }
        companyNum++;
        if (companyNum > companys.length) break;
    }
    return `${newNumInt}${numFloat ? `.${numFloat}` : ""}`;
}
function enhanceGuid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + " - " + S4() + " - " + S4() + " - " + S4() + " - " + S4() + S4() + S4());
}
export { commonNumberFormat, enhanceGuid };