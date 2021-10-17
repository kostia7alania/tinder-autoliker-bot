<template>
  <div class="popup-app px-5 py-3 bg-gray-100">
    <div>
      <div class="mb-4 text-center font-bold flex items-center justify-center">
        <div>
          {{ defaultText }}
        </div>
        <button
          class="
            p-1
            ml-1
            rounded
            hover:bg-purple-700 hover:text-white
            focus:ring-red-500
            transform
            duration-700
            hover:scale-110
            active:scale-100
            motion-reduce:transform-none
          "
          @click="getLikes"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>
      <div class="flex justify-center bg-gray-300 p-2 my-5">
        {{ likesCount }}
      </div>
      <div class="flex justify-center" style="column-gap: 1em">
        <button
          v-if="!isStarted"
          @click="startClicked"
          class="bg-red-500 hover:bg-red-700 text-white text-center py-2 px-4 rounded"
        >
          Start
        </button>
        <button v-else @click="stopClicked" class="bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded">
          Stop
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/tailwind.css'
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { sendMessageToCurrentTab } from '@/commands/popup/sendMessage.ts'

const LIKE_COUNT_KEY = 'LIKES'

export default {
  name: 'popup',
  data() {
    return {
      targetData: -1,
      isStarted: false,
      [LIKE_COUNT_KEY]: 0,
    }
  },
  computed: {
    defaultText() {
      return chrome.i18n.getMessage('extName')
    },
    likesCount() {
      return this[LIKE_COUNT_KEY]
    },
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.initIsStarted()

      chrome.storage.sync.get([LIKE_COUNT_KEY], result => {
        const currentCount = result[LIKE_COUNT_KEY] || 0
        this.LIKES = currentCount
      })
      chrome.storage.onChanged.addListener((changes, namespace) => {
        for (const [key, { oldValue, newValue }] of Object.entries(changes)) {
          console.log(
            `Storage key "${key}" in namespace "${namespace}" changed.`,
            `Old value was "${oldValue}", new value is "${newValue}".`
          )
          // example:
          // Storage key "LIKES" in namespace "sync" changed. Old value was "23", new value is "24".
          if (key === LIKE_COUNT_KEY) {
            this.LIKES = newValue
          }
        }
      })
    },
    startClicked() {
      sendMessageToCurrentTab({ from: 'popup', subject: 'start-likes' }, this.callback)
      this.isStarted = true
    },

    stopClicked() {
      sendMessageToCurrentTab({ from: 'popup', subject: 'stop-likes' }, this.callback)
      this.isStarted = false
    },

    getLikes() {
      sendMessageToCurrentTab({ from: 'popup', subject: 'get-likes' }, this.callback)
    },

    initIsStarted() {
      sendMessageToCurrentTab({ from: 'popup', subject: 'get-is-started' }, isStarted => {
        debugger
        this.isStarted = isStarted
      })
    },
    callback(targetData) {
      console.log('answer', targetData)
      this.targetData = targetData
    },
  },
}
</script>

<style>
.popup-app {
  width: 400px;
  height: 100%;
  min-height: 100px;
  color: #2c3e50;
}
</style>
