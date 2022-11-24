function towerBuilder(nFloors) {
    let tower = [];
    function generateStr(amountElem, valueElem) {
        let str = "";
        for (let i = 0; i < amountElem; i++) { 
            str += valueElem;
        }
        return str;
    }
    for (let i = 0; i < nFloors; i++) {
        let str = generateStr((nFloors - i - 1), " ") + generateStr(2 * i + 1, "*") + generateStr((nFloors - i - 1), " ");
        tower.push(str);
    }
    return tower;
}
let result = towerBuilder(5);
console.log(result);