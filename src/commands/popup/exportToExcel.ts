import XLSX from 'xlsx'
import { IDataItem } from '@/typings/dataTypes.ts'

const prepareData = (data: Array<IDataItem>) => {
  return data.map(({ info, players, ...e }: IDataItem) => {
    const infoObj = Object.entries(info).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
    const res = { ...e, ...infoObj }
    if (!players?.flagsCount) return res
    const { sumReEntryCount, flagsUniq } = players || {}
    const flagsCountObj = Object.entries(players.flagsCount).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {}
    )
    return { ...res, sumReEntryCount, flagsUniq, ...flagsCountObj }
  })
}

export const exportToExcel = async (dt: Array<IDataItem>): Promise<void> => {
  //
  // const data2 = [
  //   {
  //     name: 'Daily Hyper $80',
  //     time: 'Oct 11, 13:45 - Oct 11, 15:24',
  //     prizePool: '$3,680',
  //     players: {},
  //     info: {
  //       'Game Type': "No Limit  Hold'em",
  //       'Buy-in': '$73.6  + $6.4',
  //       'Late Reg.': 'for 50 minutes',
  //       'Min Players': '3',
  //       'Max Players': '3,000',
  //       'Re-entry': 'Re-entries available during the late registration period.',
  //     },
  //   },
  //   {
  //     name: 'Daily Hyper $80',
  //     time: 'Oct 11, 13:45 - Oct 11, 15:24',
  //     prizePool: '$3,680',
  //     players: {
  //       sumReEntryCount: 36,
  //       flagsUniq: 18,
  //       flagsCount: {
  //         EE: 3,
  //         TW: 2,
  //       },
  //     },
  //     info: {},
  //   },
  // ]
  // const transformedData = data2.map(e => [e.name, e.time, e.prizePool])

  // const d = {
  //   cols: [
  //     { name: 'A', key: 0 },
  //     { name: 'B', key: 1 },
  //     { name: 'C', key: 2 },
  //   ],
  //   data: [
  //     ['id', 'name', 'value'],
  //     [1, 'sheetjs', 7262],
  //     [2, 'js-xlsx', 6969],
  //   ],
  // }
  /* original data */
  /*
    Importing:
    aoa_to_sheet converts an array of arrays of JS data to a worksheet.
    json_to_sheet converts an array of JS objects to a worksheet.
    table_to_sheet converts a DOM TABLE element to a worksheet.
    sheet_add_aoa adds an array of arrays of JS data to an existing worksheet.
    sheet_add_json adds an array of JS objects to an existing worksheet.
  */

  if (typeof console !== 'undefined') console.log(new Date())

  const workbook = XLSX.utils.book_new()

  const worksheet = XLSX.utils.json_to_sheet(prepareData(dt), {
    header: [
      'Starting Date',
      'Starting Time',
      'Duration',
      'Name',
      'DateTime',
      'Prize Pool',
      'Players Count',
      'Game Type',
      'Buy-in',
      'Late Reg.',
      'Min Players',
      'Max Players',
      'Re-entry',
      'sumReEntryCount',
      'flagsUniq',
      // other flags..
    ],
  })

  /* add worksheet to workbook */
  const filename = 'write.xlsx'
  XLSX.utils.book_append_sheet(workbook, worksheet, filename)

  /* write workbook */

  XLSX.writeFile(workbook, filename)

  /* notice the hole where cell "B1" would be */
  // const data = [
  //   ['sd', '1', '2', 's'],
  //   [1, 2, 3, 4],
  //   ['a', 'b', 'c', 'd'],
  // ]

  /* merge cells A1:B1 */
  // const merge = { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }
  // const merge = XLSX.utils.decode_range('A1:C1') // this is equivalent

  // /* generate worksheet */
  // const ws = XLSX.utils.aoa_to_sheet(data)

  /* add merges */
  // if (!ws['!merges']) ws['!merges'] = []
  // ws['!merges'].push(merge)

  /* generate workbook */
  // const wb = XLSX.utils.book_new()
  // XLSX.utils.book_append_sheet(wb, ws, 'sheet1')
  //
  // XLSX.writeFile(wb, filename)

  // /* convert from workbook to array of arrays */
  // const first_worksheet = workbook.Sheets[workbook.SheetNames[0]]
  // const data = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 })

  // /* convert from array of arrays to workbook */
  // const worksheet = XLSX.utils.aoa_to_sheet(data)
  // const new_workbook = XLSX.utils.book_new()
  // XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS')

  // window.workbook = workbook
  console.log('isLoadingExport', JSON.stringify(dt))
}
