/**
 * ให้สร้าง Function ผลรวมของตัวเลขเฉพาะที่เป็นเลขคี่ของจำนวนตั้งแต่ 1 ถึง n โดยที่ n เป็น input
 * @param { number } n
 * @return number
 */
function sumOnlyOdds(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            sum += i;
        }
    }
    return sum;
}

module.exports = sumOnlyOdds