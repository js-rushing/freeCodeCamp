document.getElementById('unitTitle').innerHTML = "javaScript Projects";
document.getElementById('pageTitle').innerHTML = "Cash Register";

// Challenge
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]


// My Solution
function checkCashRegister(price, cash, cid) {
    var cidTotal = ((cid[0][1]) + (cid[1][1]) + (cid[2][1]) + (cid[3][1]) + (cid[4][1]) + (cid[5][1]) + (cid[6][1]) + (cid[7][1]) + (cid[8][1])),
        correctChange = (cash - price),
        // makeTheChange = [],
        currentTotal;
    penny = .01,
        nickel = .05,
        dime = .1,
        quarter = .25,
        one = 1,
        five = 5,
        ten = 10,
        twenty = 20,
        hundred = 100,
        hundreds = 0,
        twentys = 0,
        tens = 0,
        fives = 0,
        ones = 0,
        quarters = 0,
        dimes = 0,
        nickels = 0,
        pennys = 0,
        changeTotal = 0,
        changeArr = [],
        drawerStatus = "OPEN",
        enough = true;

    const coinArr = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];

    // const theStatus = (cidTotal) => cidTotal == (correctChange) ? "CLOSED" : cidTotal > (correctChange) ? "OPEN" : "INSUFFICIENT_FUNDS";

    // const theChangeIs = (currentTotal) => currentTotal >= 100 ? hundreds = calculate(currentTotal, hundred) : currentTotal >= 20 ? twentys = calculate(currentTotal, twenty) : currentTotal >= 10 ? tens = calculate(currentTotal, ten) : currentTotal >= 5 ? fives = calculate(currentTotal, five) : currentTotal >= one ? ones = calculate(currentTotal, one) : currentTotal >= quarter ? quarters = calculate(currentTotal, quarter) : currentTotal >= dime ? dimes = calculate(currentTotal, dime) : currentTotal >= nickel ? nickels = calculate(currentTotal, nickel) : currentTotal >= penny ? pennys = calculate(currentTotal, penny) : currentTotal = 0;

    function Drawer(cid) {
        this.penny = cid[0][1] / penny,
            this.nickel = Math.round(cid[1][1] / nickel),
            this.dime = Math.round(cid[2][1] / dime),
            this.quarter = cid[3][1] / quarter,
            this.one = cid[4][1] / one,
            this.five = cid[5][1] / five,
            this.ten = cid[6][1] / ten,
            this.twenty = cid[7][1] / twenty,
            this.hundred = cid[8][1] / hundred
    };

    // function Cashback() {
    //     this.pennys = pennys,
    //         this.nickels = nickels,
    //         this.dimes = dimes,
    //         this.quarters = quarters,
    //         this.ones = ones,
    //         this.fives = fives,
    //         this.tens = tens,
    //         this.twentys = twentys,
    //         this.hundreds = hundreds
    // };

    // function calculate(correctChange, coin) {
    //     let mod = (Math.round(Math.trunc((correctChange % coin) * 1000) / 10)) / 100;
    //     console.log(mod);
    //     let coins = (Math.round(Math.trunc(((correctChange - (mod)) / coin) * 1000) / 10) / 100);
    //     currentTotal = (Math.round(Math.trunc((currentTotal - (coins * coin)) * 1000) / 10) / 100);
    //     return coins;
    // }

    // do {
    //     console.log(currentTotal);
    //     theChangeIs(currentTotal);
    // } while (currentTotal > 0);

    // changeTotal = ((hundreds*hundred)+(twentys*twenty)+(tens*ten)+(fives*five)+(ones*one)+(quarters*quarter)+(dimes*dime)+(nickels*nickel)+(pennys*penny));

    // let cashReturned = new Cashback();
    // console.log(cashReturned);


    // function yourChange() {
    //     this.status = theStatus(cidTotal),
    //         this.change = getTheChange(correctChange, newDrawer)
    // };

    let newDrawer = new Drawer(cid);
    
    function getTheChange(correctChange, newDrawer) {
        currentTotal = correctChange * 100;
        if (currentTotal >= 10000) {
            while (currentTotal >= 10000 && newDrawer.hundred != 000) {
                hundreds += 1;
                currentTotal -= 10000;
                newDrawer.hundred -= 1;
            }
        }

        if (currentTotal >= 2000) {
            while (currentTotal >= 2000 && newDrawer.twenty != 0) {
                twentys += 1;
                currentTotal -= 2000;
                newDrawer.twenty -= 1;
            }
        }

        if (currentTotal >= 1000) {
            while (currentTotal >= 1000 && newDrawer.ten != 0) {
                tens += 1;
                currentTotal -= 1000;
                newDrawer.ten -= 1;
            }
        }

        if (currentTotal >= 500) {
            while (currentTotal >= 500 && newDrawer.five != 0) {
                fives += 1;
                currentTotal -= 500;
                newDrawer.five -= 1;
            }
        }

        if (currentTotal >= 100) {
            while (currentTotal >= 100 && newDrawer.one != 0) {
                ones += 1;
                currentTotal -= 100;
                newDrawer.one -= 1;
            }
        }

        if (currentTotal >= 25) {
            while (currentTotal >= 25 && newDrawer.quarter != 0) {
                quarters += 1;
                currentTotal -= 25;
                newDrawer.quarter -= 1;
            }
        }

        if (currentTotal >= 10) {
            while (currentTotal >= 10 && newDrawer.dime != 0) {
                dimes += 1;
                currentTotal -= 10;
                newDrawer.dime -= 1;
            }
        }

        if (currentTotal >= 5) {
            while (currentTotal >= 5 && newDrawer.nickel != 0) {
                nickels += 1;
                currentTotal -= 5;
                newDrawer.nickel -= 1;
            }
        }

        if (currentTotal >= 1) {
            while (currentTotal >= 1 && newDrawer.penny != 0) {
                pennys += 1;
                currentTotal -= 1;
                newDrawer.penny -= 1;
            }
        }
        changeArr = [hundreds, twentys, tens, fives, ones, quarters, dimes, nickels, pennys];
        let finalChangeArr = [];
        if (currentTotal == 0) {
            for (let i = 0; i < coinArr.length; i++) {
                switch (i) {
                    case 0:
                        multiplier = 100;
                        break;
                    case 1:
                        multiplier = 20;
                        break;
                    case 2:
                        multiplier = 10;
                        break;
                    case 3:
                        multiplier = 5;
                        break;
                    case 4:
                        multiplier = 1;
                        break;
                    case 5:
                        multiplier = .25;
                        break;
                    case 6:
                        multiplier = .1;
                        break;
                    case 7:
                        multiplier = .05;
                        break;
                    case 8:
                        multiplier = .01;
                        break;
                }
                if (changeArr[i] != 0) {
                    finalChangeArr.push([coinArr[i], changeArr[i] * multiplier]);
                }
            }
        } else {
            drawerStatus = "INSUFFICIENT_FUNDS";
            finalChangeArr = [];
        }
        if (correctChange === cidTotal) {
            drawerStatus = "CLOSED";
            finalChangeArr = cid;
        }
        return {status: drawerStatus, change: finalChangeArr};
    }
    
    return getTheChange(correctChange, newDrawer);
}

// Testing
// console.log("a)");
// console.log(checkCashRegister(20, 450, [["PENNY", 2.04], ["NICKEL", 3.25], ["DIME", 5.60], ["QUARTER", 7.75], ["ONE", 150], ["FIVE", 105], ["TEN", 160], ["TWENTY", 160], ["ONE HUNDRED", 800]]));


console.log("1)");
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.


console.log("2)");
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}


console.log("3)");
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// should return {status: "INSUFFICIENT_FUNDS", change: []}


console.log("4)");
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// should return {status: "INSUFFICIENT_FUNDS", change: []}


console.log("5)");
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}