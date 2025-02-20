import { defineStore } from 'pinia'
import { ref } from 'vue'

interface News {
  id: number
  img: string
  title: string
  description: string
  tag: string
}

export const useNewsStore = defineStore('newsStore', () => {
  const news = [
    {
      id: 1,
      img: 'https://sun9-68.userapi.com/impg/NW9WZrGUgdsGOzZZClNjtHb5SqXk_-W5UqdxLQ/APNq761LS38.jpg?size=1280x875&quality=95&sign=1e71d9ef1cd76a83b17bcdee0d86bd7b&type=album',
      title: 'Первый выпуск специалистов',
      description:
        'Они были первыми: в Институте компьютерных наук и технологий состоялся первый выпуск специалистов',
      tag: '#newsIKNT'
    },
    {
      id: 2,
      img: 'https://sun9-19.userapi.com/impg/vLPdqZeD9y3fx2bH0ahvcBQb_b7Ky-wXhGSZHA/wq_3Zwk4guU.jpg?size=1280x854&quality=95&sign=807cff605bdad519f98273851147612b&type=album',
      title: 'От программирования к плаванию',
      description:
        '7 декабря прошла универсиада ПГНИУ по плаванию, команда ИКНТ показала отличные результаты',
      tag: '#newsIKNT'
    },
    {
      id: 3,

      img: 'https://sun9-5.userapi.com/impg/XslROdyYMeThZfWO9nQYlqq43uCiu41oJcIQGw/Z_7raM-9n0s.jpg?size=1280x960&quality=95&sign=c390d43f20d43c127d47246713f56b35&type=album',
      title: '3 команды ПГНИУ отобрались в основной тур ICPC',
      description:
        '26 октября прошел квалификационный тур Уральского регионального чемпионата ICPC (четвертьфинала чемпионата мира по программированию)',
      tag: '#newsIKNT'
    },
    {
      id: 4,
      img: 'https://sun9-8.userapi.com/impg/ZbdU2Ey7R1MIuStbPHFs9oLIRJ_1HZqI-dPD2g/YtwUS9VwFFo.jpg?size=1280x854&quality=95&sign=6f5cb7dd01cc4308addda0d2d1418a17&type=album',
      title: 'День тренингов в Пермском университете',
      description:
        'На базе Пермского университета 2 ноября пройдёт День тренингов. В этом году событие будет посвящено навыкам современности — навыки, без которых сложно жить в годах нового поколения',
      tag: '#newsIKNT'
    }
  ]

  return {
    news
  }
})
