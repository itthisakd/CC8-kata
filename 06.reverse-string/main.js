/**
 * ให้สร้าง Function สลับตัวอักษรของข้อความที่กำหนดให้ตามตัวอย่างข้างล่างนี้
ห้ามใช้ Function sort() หรือ reverse() ของ Array
 * @param { string } str
 * @return { string }
 */
function reverseString(str) {
    let newString = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newString += `${str[i]}`
    }
    return newString
}

module.exports = reverseString