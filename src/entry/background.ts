/* eslint-disable no-alert */
// console.log('hello world background todo something~')
// console.log('hello world background todo something~')
// console.log('hello world background todo something~')

globalThis.chrome = chrome

chrome.runtime.onInstalled.addListener(() => {
  console.log('installed!')
})

chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  console.log('Hello from the background', { request, sender, sendResponse })
  // chrome.tabs.executeScript({
  //   file: "content-script.js",
  // });
})

// chrome.runtime.onInstalled.addListener(function () {
//   chrome.storage.sync.set({ color: "#3aa757" }, function () {
//     console.log("The color is green.");
//   });
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//     chrome.declarativeContent.onPageChanged.addRules([
//       {
//         conditions: [
//           new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: { hostEquals: "developer.chrome.com" },
//           }),
//         ],
//         actions: [new chrome.declarativeContent.ShowPageAction()],
//       },
//     ]);
//   });
// });

console.log('hi frm background.js', chrome)
// console.warn(chrome.commands)

function handleShown() {
  console.log('panel is being shown')
}

function handleHidden() {
  console.log('panel is being hidden')
}

let openCount = 0
chrome.runtime.onConnect.addListener(port => {
  if (port.name === 'devtools-page') {
    if (openCount === 0) {
      console.log('DevTools window opening.', { port })
    }
    openCount++

    port.onDisconnect.addListener(port2 => {
      openCount--
      if (openCount === 0) {
        console.log('Last DevTools window closing.', { port2, port })
      }
    })
  }
})

// chrome.commands.onCommand.addListener(command => {
//   console.log('Command:', command)
// })

chrome.runtime.onMessage.addListener((msg, sender) => {
  console.log('background.js', msg, sender)
  // First, validate the message's structure.
  if (msg.from === 'content' && msg.subject === 'showPageAction') {
    // Enable the page-action for the requesting tab.
    if (sender?.tab?.id && chrome.pageAction) chrome.pageAction.show(sender?.tab?.id)
    else console.warn('sender.tab.id =', sender?.tab?.id)
  }
})
