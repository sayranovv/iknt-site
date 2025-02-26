import { defineStore } from 'pinia'

interface Professor {
  id: number
  name: string
  description: string
  img: string
}

export const useProfessorsStore = defineStore('professorsStore', () => {
  const professors = ref<Professor[]>([
    {
      id: 0,
      name: 'Городилов Алексей Юрьевич',
      description:
        'Преподаватель предметов "Алгоритмы и структуры данных" и "Дискретная математика"',
      img: 'https://i.postimg.cc/KvRSy5xW/image.jpg'
    },
    {
      id: 1,
      name: 'Кетова Валерия Дмитриевна',
      description:
        'Преподаватель предметов "Основы IT-технологий" и "Основы проектной деятельности в IT-сфере"',
      img: 'https://i.postimg.cc/KYXyfgXH/image.jpg'
    },
    {
      id: 2,
      name: 'Кнутова Наталия Сергеевна',
      description: 'Преподаватель предмета "Язык программирования Python"',
      img: 'https://i.postimg.cc/sXmd36Mk/image.jpg'
    },
    {
      id: 3,
      name: 'Лабутин Иван Александрович',
      description:
        'Преподаватель предметов "Алгоритмы и структуры данных" и "Язык программирования Python"',
      img: 'https://i.postimg.cc/B6BsXZVw/image.jpg'
    },
    {
      id: 4,
      name: 'Шеина Татьяна Юрьевна',
      description: 'Преподаватель предмета "Основы web-технологий"',
      img: 'https://i.postimg.cc/hPjgtBbp/image.jpg'
    },
    {
      id: 5,
      name: 'Гоберман Наталья Харисовна',
      description: 'Преподаватель предмета "Прикладная физическая культура"',
      img: 'https://i.postimg.cc/xCvjM3c5/image.jpg'
    },
    {
      id: 6,
      name: 'Дураков Андрей Викторович',
      description: 'Преподаватель предмета "Введение в математику"',
      img: 'https://i.postimg.cc/yxnVr6hS/image.jpg'
    },
    {
      id: 7,
      name: 'Койкова Елена Семеновна',
      description: 'Преподаватель предмета "Английский язык"',
      img: 'https://i.postimg.cc/7PNYLXvY/image.jpg'
    },
    {
      id: 8,
      name: 'Аверин Сергей Игоревич',
      description: 'Преподаватель предмета "История России"',
      img: 'https://i.postimg.cc/Hkdwy6nZ/image.jpg'
    }
  ])

  return { professors }
})
