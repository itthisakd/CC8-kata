/**
 * ให้สร้าง Function หาตัวเลขตัวแรกที่ไม่ต่อเนื่อง ถ้าหาค่าไม่ได้ ให้ return ค่า null
 * @param { Array<number> } nums
 * @return { number | null }
 */
function findFirstNonConsecutive(nums) {
    if (nums.length < 2) {
        return null
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] != 1) {
            return nums[i]
        } else {
            return null
        }
    }
    return null
}

module.exports = findFirstNonConsecutive