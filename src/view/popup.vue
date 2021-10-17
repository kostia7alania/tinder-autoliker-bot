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
          @click="init"
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
      <div>TEst</div>
    </div>
  </div>
</template>

<script>
import '@/assets/tailwind.css'
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { sendMessageToCurrentTab } from '@/commands/popup/sendMessage.ts'

export default {
  name: 'popup',
  data() {
    return {
      targetData: [
        /* { label, value } */
      ],
      isLoadingExport: false,
    }
  },
  computed: {
    defaultText() {
      return chrome.i18n.getMessage('extName')
    },
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      sendMessageToCurrentTab({ from: 'popup', subject: 'DOMInfo' }, this.setDOMInfo)
    },
    setDOMInfo(targetData) {
      console.log('targetData', targetData)
      this.targetData = targetData
    },
  },
}
</script>

<style>
.popup-app {
  width: 400px;
  height: 100%;
  color: #2c3e50;
}
</style>
