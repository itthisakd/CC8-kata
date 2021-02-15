/**
 * ให้สร้าง Function หาค่าจาก Input ที่ป้อนเข้ามา โดยตัดเลข 0 ที่ต่อท้ายออกทั้งหมด
ถ้า Input เป็น 0 ให้ return ค่า null

 * @param { number } num
 * return { number | null }
 */
function zeroDoesNotExist(num) {
    if (num == 0) {
        return null;
    }

    let temp = num.toString().split("")
    console.log(temp)

    for (let i = temp.length - 1; i > 0; i--) {
        if (temp[i] == "0") {
            temp.pop();
        } else {
            break;
        }
    }
    let hold = temp.join('').toString()


    return Number(hold);

}

module.exports = zeroDoesNotExist