/**
 * 
 * ห้สร้าง Function เพื่อหาคำตอบว่า มีค่าที่ต้องการค้นหา (parameter ที่ 2) ครบทุกตัว อยู่ในอาร์เรย์ที่เป็น parameter ที่ 1 หรือไม่
ข้อนี้ให้เขียน code เป็น 3 กรณี คือ
ใช้ Loop (for, while หรือ do...while ก็ได้) โดยข้อนี้อนุญาตให้ใช้ includes() ได้ด้วย
ไม่ใช้ Loop (เราใช้ Array.prototype.xxx() แทน Loop ได้)


ในกรณีไม่ใช้ Loop:
จะใช้ตัวอย่าง Input => Output เช่นเดียวกับสไลด์ที่แล้ว แต่จะมี test cases เพิ่มเติม คือ
Input: haveAllItems_noLoop([{}], [{}])
Output: true
Input: haveAllItems_noLoop([{}], [{}])
Output: false

 * 
 * @template T | object
 * @param { Array<T> } items
 * @param { Array<T> } keywords
 * @return { boolean }
 */
function haveAllItems_loop(items, keywords) {
  // Implement by for, while or do...while loop
  let temp = []
  for (let i = 0; i < keywords.length; i++) if (!keywords.includes(items[i])) temp.push(items[i])
  return (keywords.length == temp.length)

  // let contains = true;
  // for (let i = 0; i < items.length; i++) if (keywords.includes(items[i]) == false) contains = false
  // return contains

/**
 * @template T | object
 * @param { Array<T> } items
 * @param { Array<T> } keywords
 * @return { boolean }
 */
function haveAllItems_noLoop(items, keywords) {
  // Implement by Array.prototype.xxx() method instead loo

}

module.exports = { haveAllItems_loop, haveAllItems_noLoop }
