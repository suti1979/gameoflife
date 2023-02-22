import { assert, expect, test, beforeAll } from 'vitest'
import { countLiveNeighbors, checkEnd, updateGrid, randomSetup } from './gameLogic'



test('randomSetup', () => {
    const randomTable = randomSetup(10, true)
    const emptyTable = randomSetup(10, false)

    expect(randomTable).toHaveLength(10)
    expect(checkEnd(randomTable)).toBe(false)

    expect(emptyTable).toHaveLength(10)
    expect(checkEnd(emptyTable)).toBe(true)
    
})
