/**
 * @param { number } hours
 * @param { number }  minutes
 * @param { number }  seconds
 * @return { number }
 */
function convertToMilliseconds(hours, minutes, seconds) {
    let result = hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;
    return result;
}

module.exports = convertToMilliseconds