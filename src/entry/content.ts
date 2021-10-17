import { /* domChangeHandler, */ getDataBySections } from '@/commands/content/contentHelpers.ts'

console.log('hello world content todo something~')

chrome.runtime.onMessage.addListener(msgObj => {
  // do something with msgObj
  console.log({ file: '[content.ts] ', msgObj })
  return 2131312312
})

// const target = document.querySelector('body') as HTMLBodyElement

// Конфигурация observer (за какими изменениями наблюдать)
// const config = {
//   attributes: true,
//   childList: true,
//   subtree: true,
// }

// let tm: number

// Колбэк-функция при срабатывании мутации
// const callback = (mutationsList: any, observer: any): any => {
//   console.log(mutationsList)
//   clearTimeout(tm)
//   tm = setTimeout(domChangeHandler, 500)
// for (const mutation of mutationsList) {
// if (mutation.type === 'childList') {
//   console.log('A child node has been added or removed.')
// } else if (mutation.type === 'attributes') {
//   console.log(`The ${mutation.attributeName} attribute was modified.`)
// }
// }
// }

// Создаём экземпляр наблюдателя с указанной функцией колбэка
// const observer = new MutationObserver(callback)

// Начинаем наблюдение за настроенными изменениями целевого элемента
// observer.observe(target, config)

// Позже можно остановить наблюдение
// observer.disconnect()

// Inform the background page that
// this tab should have a page-action.
chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction',
})

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if (msg.from === 'popup' && msg.subject === 'DOMInfo') {
    // Collect the necessary data.
    // const domInfo = {
    //   total: document.querySelectorAll('*').length,
    //   inputs: document.querySelectorAll('input').length,
    //   buttons: document.querySelectorAll('button').length,
    // }

    // Directly respond to the sender (popup),
    // through the specified callback.
    const res = getDataBySections()
    response(res)
  }
})
