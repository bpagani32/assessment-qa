

const {shuffleArray} = require('./utils')

const testArr1 = [1,2,3,4]
const testArr2 = []
const testArr3 = [45,64,1,35,5]

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr2))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr3))).toBe(true)
    })

    test('have its output array have the same length as its input array', () => {
        expect(shuffleArray(testArr1).length).toBe(testArr1.length)
        expect(shuffleArray(testArr2).length).toBe(testArr2.length)
        expect(shuffleArray(testArr3).length).toBe(testArr3.length)
    })
})

test('shuffleArray should', () => {
    expect(shuffleArray.shuffleArray()).toBe([])
})

test('does it return array length' , () => {
    expect(shuffleArray.array()).toBe("")})
    
    
    // test('2 should equal 2', () => {
    //     expect(2).toBe(2)
    //   })
    
    //   test('first name should be Patten', () => {
    //     expect(testData.firstName).toBe('Patten')
    //   })
    
    //   describe('format title test', () => {
    
    //     test('', () => {
    //       let formattedTitle = formatTitle(testData.title)
    //       expect(typeof formattedTitle).toBe("string")
    //     })
    //     test('', () => { 
    //       let formattedTitle = formatTitle(testData.title)
    //       expect(formattedTitle).toBe('Nulla Ac')
    
    //     })
    //   })