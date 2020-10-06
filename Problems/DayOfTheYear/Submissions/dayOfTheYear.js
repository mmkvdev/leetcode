/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    const checkLeap = (year) => {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        } else {
            return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        }
    };

    const dayDeterminer = (year, month, day) => {
        if (month === 1) {
            return day;
        } else {
            let sum = 0;
            for (let i = 0; i < month - 1; i++) {
                sum += year[i];
            }

            return sum + day;
        }
    };

    const [year, month, day] = date.split('-').map((i) => +i);
    res_year = checkLeap(year);
    return dayDeterminer(res_year, month, day);
};
