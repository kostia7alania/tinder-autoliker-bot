// import { IHeaderData, IDataItem } from '@/typings/dataTypes.ts'

/* Has nodes or not */
// const hasNodes = (selector: string): boolean => !!document.querySelectorAll(selector).length

/* Content DOM Change Handlers */
// export const domChangeHandler = (): Array<StringMap> => {
//   console.log('[contentHelpers] domChangeHandler')
//   return getDataBySections()
// }
let tm: number
const timeout = 1000

let isStarted = false

const LIKE_COUNT_KEY = 'LIKES'

const setCount = () => {
  chrome.storage.sync.get([LIKE_COUNT_KEY], result => {
    const currentCount = result[LIKE_COUNT_KEY] || 0
    console.log(`${LIKE_COUNT_KEY} = ${currentCount}`)
    chrome.storage.sync.set({ [LIKE_COUNT_KEY]: currentCount + 1 })
    //   , e => {
    //   console.log(`likes is set to ${currentCount + 1}`, e)
    // })
  })
}

const closeSuperLike = () => {
  const nodes = document.querySelectorAll('.button ') as NodeListOf<HTMLElement>
  const node = [...nodes].find(e => e.textContent === 'No Thanks')
  if (node) node.click()
}
const doLike = (): boolean => {
  const selector = `.recsCardboard__cardsContainer>div>div:nth-child(${isStarted ? 5 : 4})>div>div button`
  const nodes = document.querySelectorAll(selector) as NodeListOf<HTMLElement>
  const node = nodes?.[3] as HTMLElement
  if (node) {
    node.click()
    return true
  }
  return false
}

export const startLikes = (): void => {
  tm = setTimeout(() => {
    const isLiked = doLike()
    if (isLiked) setCount()
    else console.warn('[startLikes] liked=', isLiked)
    isStarted = true
    closeSuperLike()
    startLikes()
  }, timeout)
}

export const stopLikes = (): void => {
  isStarted = false
  clearTimeout(tm)
}
export const getIsStarted = (): boolean => {
  return isStarted
}
