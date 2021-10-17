import { IHeaderData, IDataItem } from '@/typings/dataTypes.ts'

interface NumberMap {
  [key: string]: number
}

interface StringMap {
  [sex_fuck_sex: string]: string
}

/* Pass Selector - Returns Content */
const getContent = (selector: string, context: HTMLElement | Document = document): string =>
  context.querySelector(selector)?.textContent?.trim() || ''

const parseHeaderData = (context: HTMLElement): IHeaderData => {
  const name = getContent('.completed-tournament-detail-header-tourney-name', context)
  const dateTime = getContent('.completed-tournament-detail-header-time', context)
  const prizePool = getContent('.text-prize', context)
  const playersCount = getContent(
    '.completed-tournament-detail-header-info-area>div:nth-child(2) .completed-tournament-detail-header-info-value',
    context
  )
  const duration =
    context.querySelectorAll('.completed-tournament-detail-header-info-value-sub')?.[2]?.textContent?.trim() || ''

  return { Name: name, DateTime: dateTime, 'Prize Pool': prizePool, 'Players Count': playersCount, Duration: duration }
}

// info tab
const getInfoData = (context: HTMLElement) => {
  const requiredProps = ['Game Type', 'Starting Time', 'Buy-in', 'Late Reg.', 'Min Players', 'Max Players', 'Re-entry']
  // supports only ENGLISH UI
  const info = [...context.querySelectorAll('.completed-tournament-detail-info>div')].reduce(
    (acc: IHeaderData, node) => {
      const key = node.querySelector('.completed-tournament-detail-info-label')?.textContent?.trim() || ''
      const value = node.querySelector('.completed-tournament-detail-info-value')?.textContent?.trim() || ''
      if (requiredProps.includes(key)) acc[key] = value
      return acc
    },
    {}
  ) as IHeaderData
  const [date, time] = info['Starting Time']?.split(', ') || []
  delete info['Starting Time']

  return { ...info, 'Starting Date': date, 'Starting Time': time }
}

// players tab
const getPlayerData = (context: HTMLElement) => {
  /**
   * Players Tab Change Handler
   * */
  const sumReEntryCount = [...context.querySelectorAll('.re-entry-count')].reduce(
    (acc, e) => +(e?.textContent || 0) + acc,
    0
  )

  const flagsCount = [...context.querySelectorAll('.country-flag-rect')].reduce((acc: NumberMap, el) => {
    const flag = el?.getAttribute('code') || 'n/a'
    acc[flag] = acc[flag] ? acc[flag] + 1 : 1
    return acc
  }, {})

  const flagsUniq = Object.keys(flagsCount).length

  if (!flagsUniq) return {} // the players tab is inactive

  const playersTable = {
    sumReEntryCount,
    flagsUniq,
    flagsCount,
  }
  console.log('isPlayers', { playersTable })
  return playersTable
}

// sections handler
export const getDataBySections = (): Array<IDataItem> => {
  const sections = document.querySelectorAll('.completed-tourney-list-detail') as NodeListOf<HTMLElement>

  const resData = [...sections].map((section: HTMLElement) => {
    // info handler
    const info = getInfoData(section)
    const players = getPlayerData(section)
    const headers = parseHeaderData(section)
    const sectionResult = { ...headers, info, players }

    return sectionResult
  })

  console.log('section result', resData)
  return resData
}

/* Has nodes or not */
// const hasNodes = (selector: string): boolean => !!document.querySelectorAll(selector).length

/* Content DOM Change Handlers */
// export const domChangeHandler = (): Array<StringMap> => {
//   console.log('[contentHelpers] domChangeHandler')
//   return getDataBySections()
// }
