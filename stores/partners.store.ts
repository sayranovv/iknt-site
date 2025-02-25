import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface Partner {
  id: number
  name: string
  color:
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose'
}

export const usePartnersStore = defineStore('partnersStore', () => {
  const partnersList = ref<Partner[]>([
    { id: 0, name: '1c', color: 'red' },
    { id: 1, name: 'kaspersky', color: 'emerald' },
    { id: 2, name: 'drugoye_delo', color: 'purple' },
    { id: 3, name: 'fsp', color: 'red' },
    { id: 4, name: 'inform_security', color: 'sky' },
    { id: 5, name: 'alfa_bank', color: 'red' },
    { id: 6, name: 'r-telecom', color: 'blue' },
    { id: 7, name: 'reksoft', color: 'red' },
    { id: 8, name: 'rostelecom', color: 'indigo' },
    { id: 9, name: 'sber', color: 'green' },
    { id: 10, name: 'softline', color: 'red' },
    { id: 11, name: 'tbank', color: 'yellow' },
    { id: 12, name: 'uavprof', color: 'sky' },
    { id: 13, name: 'ucsb', color: 'amber' },
    { id: 14, name: 'parma', color: 'red' },
    { id: 15, name: 'vk', color: 'blue' },
    { id: 16, name: 'morion_digital', color: 'red' },
    { id: 17, name: 'ujin', color: 'cyan' },
    { id: 18, name: 'positive_technologies', color: 'red' },
    { id: 19, name: 'ibs', color: 'blue' }
  ])

  const getPartnersByRange = (minId: number, maxId: number) => {
    return computed(() =>
      partnersList.value.filter(partner => partner.id >= minId && partner.id <= maxId)
    )
  }

  return { partnersList, getPartnersByRange }
})
