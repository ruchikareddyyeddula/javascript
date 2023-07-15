function countchocolates (money, cost) {
    let total=money/cost;
    let wrappers = total;
    
    while (wrappers >=3) {
        const additionalchocolates = Math.floor(wrappers / 3);
        total+= additionalchocolates;
        wrappers = wrappers %3 + additionalchocolates;
        
    }
    return total;
    
}

const totalchocolates = countchocolates(68,2);
console.log(totalchocolates);