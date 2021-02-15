/**
 * ให้สร้าง Function หาว่าคำที่มีความยาวมากที่สุดมีขนาดกี่ตัวอักษร จากประโยคที่กำหนดให้
เครื่องหมาย comma (,) dot (.) examination (!) และ question mark (?) ไม่นับว่าเป็นตัวอักษรในคำใดๆ

 * @param { string } phrase
 * @return { number }
 */
function findLongestWord(phrase) {
    let arr = phrase.split(/[,?!. ]/)
    console.log(arr)
    let longest = arr[0].length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= longest) longest = arr[i].length
    }
    return longest
}

module.exports = findLongestWord