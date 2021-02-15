/**
 * ให้สร้าง Function เพื่อหาคำตอบว่า มีค่าที่ต้องการค้นหา (parameter ที่ 2) อยู่ในอาร์เรย์ที่เป็น parameter ที่ 1 หรือไม่
ข้อนี้ให้เขียน code เป็น 3 กรณี คือ
ใช้ Array.prototype.forEach()
ใช้ Array.prototype.reduce()
ใช้ Array.prototype.filter()
ใช้ Array.prototype.some()
Input: findItem([1, 2, 3, 4, 6, 7, 8, 9, 10], 4)
Output: true
Input: findItem([1, 2, 3, 4, 6, 7, 8, 9, 10], 5)
Output: false
 * 
 * @template T
 * @param { Array<T> } items
 * @param { T } keyword
 * @return boolean
 */
function findItem_forEach(items, keyword) {
  // Implement by Array.prototype.forEach()
  let contains = false 
  items.forEach(() => contains = items.includes(keyword))
  return contains
}

console.log(findItem_forEach([1, 2, 3, 4, 5], 9))
/**
 * @template T
 * @param { Array<T> } items
 * @param { T } keyword
 * @return boolean
 */
function findItem_reduce(items, keyword) {
  // Implement by Array.prototype.reduce()

}

/**
 * @template T
 * @param { Array<T> } items
 * @param { T } keyword
 * @return boolean
 */
function findItem_filter(items, keyword) {
  // Implement by Array.prototype.filter()

}

/**
 * @template T
 * @param { Array<T> } items
 * @param { T } keyword
 * @return boolean
 */
function findItem_some(items, keyword) {
  // Implement by Array.prototype.some()

}

module.exports = {
  findItem_reduce,
  findItem_forEach,
  findItem_filter,
  findItem_some
}
