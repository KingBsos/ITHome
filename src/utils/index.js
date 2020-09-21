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

export { commonNumberFormat };