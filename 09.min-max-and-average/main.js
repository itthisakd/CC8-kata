/**
 * ให้สร้าง Function หาค่า Min, Max และ Average ของ Input จากอาร์เรย์ของตัวเลขที่กำหนดให้
ห้ามใช้ Function sort() หรือ reverse() ของ Array

Input: findMinMaxAndAvg([0, 2, 4, 6, 8, 10])
Output: { min: 0, avg: 5, max: 10, avg: 5 }
Input: findMinMaxAndAvg([5, 2, 1, 4, 8, -1, 0])
Output: { min: -1, avg: 3, max: 8 }
Input: findMinMaxAndAvg([88, 45, 13, 32, 57, 99, 101])
Output: { min: 13, avg: 62, max: 101 }

 * @param { Array<number> } numbers
 * @return { {min: number, max: number, avg: number } }
 */
function findMinMaxAndAvg(numbers) {
    let min = numbers[0];
    let max = numbers[0];
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        let k = numbers[i];
        sum += k;
        if (k >= max) max = k
        if (k <= min) min = k
    }
    let average = Math.round(sum / numbers.length)
    return {
        min,
        max,
        avg: average
    }



}

module.exports = findMinMaxAndAvg