const { describe, it, expect } = require('@jest/globals')
const isPalindrome = require('./main')

describe('Palindrome', function() {
  it(`should return true when input 'anna'`, function() {
    expect(isPalindrome('anna')).toBe(true)
  })
  it(`should return false when input 1011`, function() {
    expect(isPalindrome(1011)).toBe(false)
  })
  it(`should return true when input 11011`, function() {
    expect(isPalindrome(11011)).toBe(true)
  })
  it(`should return true when input 110011`, function() {
    expect(isPalindrome(110011)).toBe(true)
  })
  it(`should return true when input 36063`, function() {
    expect(isPalindrome(36063)).toBe(true)
  })
  it(`should return true when input 360063`, function() {
    expect(isPalindrome(360063)).toBe(true)
  })
  it(`should return false when input 36036`, function() {
    expect(isPalindrome(36036)).toBe(false)
  })
  it(`should return true when input 'racecar'`, function() {
    expect(isPalindrome('racecar')).toBe(true)
  })
})
