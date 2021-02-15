/**
 * \
 * @param { Array<number> }classScores
 * @param { number } yourScore
 * @return { boolean }
 */
function isHigherThanAverage(classScores, yourScore) {
    let sum = 0
    for (let i = 0; i < classScores.length; i++) {
        sum += classScores[i]
    }
    let average = sum / classScores.length

    return yourScore > average
}

module.exports = isHigherThanAverage