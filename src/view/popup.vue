<template>
  <div class="main_app px-5 py-3 bg-gray-100">
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
          :disabled="isLoadingExport"
          @click="exportToExcel"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
      <div v-for="({ Name, DateTime, info, players, ...item }, i) in targetData" :key="i">
        <div class="fw-500"># {{ i + 1 }}</div>
        <div class="flex">
          <div style="width: 80px" class="flex-shrink-0">Name</div>
          <div class="fw-500">{{ Name }}</div>
        </div>
        <div class="flex">
          <div style="width: 80px" class="flex-shrink-0">Prize Pool</div>
          <div class="fw-500">{{ item['Prize Pool'] }}</div>
        </div>
        <div class="flex">
          <div style="width: 80px" class="flex-shrink-0">Players Count</div>
          <div class="fw-500">{{ item['Players Count'] }}</div>
        </div>
        <div class="flex">
          <div style="width: 80px" class="flex-shrink-0">DateTime</div>
          <div class="fw-500">{{ DateTime }}</div>
        </div>

        <!-- Info Tab -->
        <div class="flex">
          <div style="width: 80px" class="flex-shrink-0">Info</div>

          <div v-if="!Object.keys(info).length">—</div>

          <div v-else>
            <div class="flex" v-for="(val, flag) in info" :key="flag">
              <div style="width: 90px" class="flex-shrink-0">{{ flag }}</div>
              <div>{{ val }}</div>
            </div>
          </div>
        </div>
        <!-- Info Tab end -->

        <!-- Players Tab -->
        <div class="flex">
          <div style="width: 80px" class="flex-shrink-0">Players</div>
          <div v-if="!Object.keys(players).length">—</div>
          <div v-else class="fw-500">
            <div class="flex">
              <div style="width: 120px" class="flex-shrink-0">Sum Re-Entry Count</div>
              <div>{{ players.sumReEntryCount }}</div>
            </div>
            <div class="flex">
              <div style="width: 120px" class="flex-shrink-0">Flags Uniq</div>
              <div>{{ players.flagsUniq }}</div>
            </div>
            <div class="flex">
              <div style="width: 120px" class="flex-shrink-0">Flags By Country</div>
              <div class="flex flex-wrap gap-x-1.5">
                <div v-for="(val, flag) in players.flagsCount" :key="flag">{{ flag }}({{ val }})</div>
              </div>
            </div>
          </div>
        </div>
        <!-- Players Tab end -->
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/tailwind.css'
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { sendMessageToCurrentTab } from '@/commands/popup/sendMessage.ts'
import { exportToExcel } from '@/commands/popup/exportToExcel.ts'

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
    async exportToExcel() {
      this.isLoadingExport = true
      try {
        await exportToExcel(this.targetData)
      } catch (err) {
        console.log('err', { err })
      } finally {
        this.isLoadingExport = false
      }
    },
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
.main_app {
  width: 400px;
  height: 100%;
  color: #2c3e50;
}
</style>
