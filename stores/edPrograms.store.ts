import { defineStore } from 'pinia'
import { ref } from 'vue'

interface EdProgram {
  id: number
  letters3: string
  title: string
  programName: string
  link: string
  degree: string
  programCode: string
  industries: string
  maxScore: number
  averageScore: number
  minScore: number
  budgetPlaces: number
}

export const useEdProgramsStore = defineStore('edProgramsStore', () => {
  const edPrograms = ref<EdProgram[]>([
    {
      id: 1,
      letters3: 'ПМИ',
      title: 'Прикладная математика и информатика',
      programName: '"Искусственный интеллект и большие данные"',
      link: 'https://vk.com/psu_iknt?w=wall-220920390_282',
      degree: 'Бакалавриат',
      programCode: '01.03.02',
      industries: 'Машинное обучение, Data Science',
      maxScore: 280,
      averageScore: 216,
      minScore: 163,
      budgetPlaces: 160
    },
    {
      id: 2,
      letters3: 'ФИТ',
      title: 'Фундаментальная информатика и информационные технологии',
      programName: '"Инженерия программного обеспечения"',
      link: 'https://vk.com/psu_iknt?w=wall-220920390_282',
      degree: 'Бакалавриат',
      programCode: '02.03.02',
      industries: 'Программная инженерия',
      maxScore: 257,
      averageScore: 217,
      minScore: 163,
      budgetPlaces: 60
    },
    {
      id: 3,
      letters3: 'ИТХ',
      title: 'Информационные системы и технологии',
      programName: '"Devops и администрирование"',
      link: 'https://vk.com/psu_iknt?w=wall-220920390_282',
      degree: 'Бакалавриат',
      programCode: '09.03.02',
      industries: 'IT эксплуатация и поддержка, Системная аналитика',
      maxScore: 255,
      averageScore: 217,
      minScore: 169,
      budgetPlaces: 25
    },
    {
      id: 4,
      letters3: 'ПИН',
      title: 'Прикладная информатика',
      programName: '"Системное программирование"',
      link: 'https://vk.com/psu_iknt?w=wall-220920390_282',
      degree: 'Бакалавриат',
      programCode: '09.03.03',
      industries: 'QA (Тестирование), Сетевые технологии',
      maxScore: 0,
      averageScore: 0,
      minScore: 0,
      budgetPlaces: 50
    },
    {
      id: 5,
      letters3: 'ИТС',
      title: 'Инфокоммуникационные технологии и системы связи',
      programName: '"Искусственный интеллект и большие данные"',
      link: 'https://vk.com/psu_iknt?w=wall-220920390_281',
      degree: 'Бакалавриат',
      programCode: '09.03.02',
      industries: 'IT эксплуатация и поддержка, Системная аналитика',
      maxScore: 231,
      averageScore: 185,
      minScore: 140,
      budgetPlaces: 35
    },
    {
      id: 6,
      letters3: 'КМБ',
      title: 'Компьютерная безопасность',
      programName: '',
      link: 'https://vk.com/psu_iknt?w=wall-220920390_281',
      degree: 'Специалитет',
      programCode: '10.05.01',
      industries: 'Разработка защищенного программного обеспечения',
      maxScore: 267,
      averageScore: 232,
      minScore: 180,
      budgetPlaces: 30
    },
    {
      id: 7,
      letters3: 'БАС',
      title: 'Информационная безопасность автоматизированных систем',
      programName: '',
      link: 'https://vk.com/psu_iknt?w=wall-220920390_281',
      degree: 'Специалитет',
      programCode: '11.03.02',
      industries: 'Безопасность значимых объектов критической информационной инфраструктуры',
      maxScore: 260,
      averageScore: 210,
      minScore: 183,
      budgetPlaces: 30
    },
    {
      id: 8,
      letters3: 'ФИТ',
      title: 'Фундаментальная информатика и информационные технологии',
      programName: '"Инженерия программного обеспечения"',
      link: 'https://vk.com/psu_iknt?w=wall-220920390_279',
      degree: 'Магистратура',
      programCode: '02.03.02',
      industries: 'Программная инженерия',
      maxScore: 257,
      averageScore: 217,
      minScore: 163,
      budgetPlaces: 30
    }
  ])
  const selectedDegree = ref<string | null>(null)

  const filteredPrograms = computed(() => {
    return selectedDegree.value
      ? edPrograms.value.filter(program => program.degree === selectedDegree.value)
      : edPrograms.value
  })

  return {
    edPrograms,
    selectedDegree,
    filteredPrograms
  }
})
