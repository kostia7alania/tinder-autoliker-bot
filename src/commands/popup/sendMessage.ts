export const sendMessageToCurrentTab = (message: string | number, callback: any): any => {
  return chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    const activeTab = tabs[0] as { id: number }
    console.log({ activeTab })
    chrome.tabs.sendMessage(activeTab.id, message, callback)
  })
}
