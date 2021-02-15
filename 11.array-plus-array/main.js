// ให้ สร้ าง Function เพื่ อหาค่ าผลรวมในแต่ ละลำดั บของอาร์ เรย์ 2 อาร์ เรย์
// โดยให้ นำค่ าแรกของอาร์ เรย์ ที่ 1 บวกกั บค่ าที่ n ของอาร์ เรย์ ที่ 2
// และในลำดั บถั ดมาคือให้ นำค่ าที่ 2 ของอาร์ เรย์ ที่ 1 บวกกั บลำดั บที่ n - 1 ของอาร์ เรย์ ที่ 2
// ข้ อนี้ ให้ เขียน code เป็ น 4 กรณี คือ
// ใช้ For loop
// ใช้ While loop
// ใช้ Array.prototype.map()
// ใช้ Array.prototype.reduce()

// Input: plusArray([1, 2, 3], [4, 8, 5])
// Output: [6, 10, 7](มาจาก 1 + 5 = 6, 2 + 8 = 10 และ 3 + 4 = 7)
// Input: plusArray([1, 2, 3, 4], [5, 6, 7, 8])
// Output: [9, 9, 9, 9](มาจาก 1 + 8 = 9, 2 + 7 = 9, 3 + 6 = 9 และ 4 + 5 = 9)


function plusArray1(arr1, arr2) {
    let result = [], j = (arr2.length - 1);
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[j]); j--;
    }
    return result
}

/**
 * @param { Array<number> } arr1
 * @param { Array<number> } arr2
 * @return { Array<number> }
 */
function plusArray2(arr1, arr2) {
    // Implement by WHILE LOOP
    let result = [], i = 0, j = arr2.length - 1;
    while (i < arr1.length && j >= 0) {
        result.push(arr1[i++]+ arr2[j--]);
    }
    return result

}

/**
 * @param { Array<number> } arr1
 * @param { Array<number> } arr2
 * @return { Array<number> }
 */
function plusArray3(arr1, arr2) {
    // Implement by Array.prototype.map()
    let i2 = arr2.length
    return arr1.map((el) => el + arr2[--i2])
}

/**
 * @param { Array<number> } arr1
 * @param { Array<number> } arr2
 * @return { Array<number> }
 */
function plusArray4(arr1, arr2) {
    // Implement by Array.prototype.reduce()
    let i2 = arr2.length
    return arr1.reduce((acc, cur) => [...acc, cur + arr2[--i2]], [])
}

module.exports = { plusArray1, plusArray2, plusArray3, plusArray4 }