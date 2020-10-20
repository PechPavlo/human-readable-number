module.exports = function toReadable(number) {

    let getUnitName = (num) => {
        let name;
        switch (num) {
            case 1:
                name = "one";
                break;
            case 2:
                name = "two";
                break;
            case 3:
                name = "three";
                break;
            case 4:
                name = "four";
                break;
            case 5:
                name = "five";
                break;
            case 6:
                name = "six";
                break;
            case 7:
                name = "seven";
                break;
            case 8:
                name = "eight";
                break;
            case 9:
                name = "nine";
                break;
            default:
                name = "";
                break;
        }
        return name;
    };

    let getTeenName = (num) => {
        let name;
        switch (num) {
            case 10:
                name = "ten";
                break;
            case 11:
                name = "eleven";
                break;
            case 12:
                name = "twelve";
                break;
            case 13:
                name = "thirteen";
                break;
            case 14:
                name = "fourteen";
                break;
            case 15:
                name = "fifteen";
                break;
            case 16:
                name = "sixteen";
                break;
            case 17:
                name = "seventeen";
                break;
            case 18:
                name = "eighteen";
                break;
            case 19:
                name = "nineteen";
                break;
            default:
                name = "";
                break;
        }
        return name;
    };

    let getDozenName = (num) => {
        let name;
        switch (num) {
            case 2:
                name = "twenty";
                break;
            case 3:
                name = "thirty";
                break;
            case 4:
                name = "forty";
                break;
            case 5:
                name = "fifty";
                break;
            case 6:
                name = "sixty";
                break;
            case 7:
                name = "seventy";
                break;
            case 8:
                name = "eighty";
                break;
            case 9:
                name = "ninety";
                break;
            default:
                name = "";
                break;
        }
        return name;
    };

    if (number === 0) { return "zero" };
    if (number < 10) { return getUnitName(number) };
    if (number < 20) { return getTeenName(number) };
    if (number < 100) {
        if (number % 10) {
            return `${getDozenName(Math.floor(number / 10))} ${getUnitName(number % 10)}`
        } else {
            return getDozenName(Math.floor(number / 10))
        }
    };
    if (number < 1000) {
        if (number % 100) {
            if (number % 100 < 10) { return `${getUnitName(Math.floor(number / 100))} hundred ${getUnitName(number % 100)}` };
            if (number % 100 < 20) { return `${getUnitName(Math.floor(number / 100))} hundred ${getTeenName(number % 100)}` };
            if ((number % 100) % 10) {
                return `${getUnitName(Math.floor(number / 100))} hundred ${getDozenName(Math.floor((number % 100) / 10))} ${getUnitName((number % 100) % 10)}`
            } else {
                return `${getUnitName(Math.floor(number / 100))} hundred ${getDozenName(Math.floor((number % 100) / 10))}`
            }
        } else {
            return `${getUnitName(Math.floor(number / 100))} hundred`
        }
    };
}
