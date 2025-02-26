import { defineStore } from 'pinia'
import { ref } from 'vue'

interface News {
  id: number
  img: string
  title: string
  description: string
  descriptionFull: string
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
      descriptionFull:
        '19 дипломированными специалистами по защите информации стало больше сегодня на ведущих предприятиях Пермского края. Из них 5 человек получили «красные» дипломы.\n' +
        'Сегодня тема цифровой и компьютерной безопасности волнует абсолютно всех.\n' +
        '\n' +
        'Защита бизнеса, государственных структур и гражданина от киберугроз – задача сопоставимая по важности с обеспечением обороноспособности.\n' +
        '\n' +
        'Взрывной рост киберпреступности за последние годы требует адекватного ответа со стороны государства и бизнеса. А сделать это могут только хорошо обученные специалисты.\n' +
        'Поэтому выпускники ПГНИУ по специальности «Компьютерная безопасность» ежегодно становятся самыми востребованным работниками на рынке труда.\n' +
        '\n' +
        'Выпускники говорят следующее:\n' +
        '▫️«Да, специалитет – это на полтора года дольше, но за время учебы нас научили не только эксплуатировать и настраивать имеющееся на предприятиях программное обеспечение, компьютерные сети и средства защиты информации, но, самое главное, разрабатывать новое, с учетом актуальных на сегодняшний день угроз и атак, предлагать и внедрять наиболее эффективные для конкретного предприятия средства защиты, различные нормативные документы по обеспечению безопасности на предприятии, создавать политики безопасности предприятия. Почти все из нас уже трудоустроены. Спасибо университету и преподавателям за все».\n' +
        '▫️«Мы можем отметить одну замечательную особенность нашего обучения – несмотря на то, что мы много чего изучали теоретически, но преподаватели настолько много дали нам практического материала, что придя на рабочее место даже не закончив обучение, у нас практически не возникало вопросов о том, что мы должны делать для решения поставленных перед нами задач. А если и возникали, то наши преподаватели никогда не отказывали нам в консультации. Мы могли обратиться к ним и просто с какими-то жизненными вопросами».',
      tag: '#newsIKNT'
    },
    {
      id: 2,
      img: 'https://sun9-19.userapi.com/impg/vLPdqZeD9y3fx2bH0ahvcBQb_b7Ky-wXhGSZHA/wq_3Zwk4guU.jpg?size=1280x854&quality=95&sign=807cff605bdad519f98273851147612b&type=album',
      title: 'От программирования к плаванию',
      description:
        '7 декабря прошла универсиада ПГНИУ по плаванию, команда ИКНТ показала отличные результаты',
      descriptionFull:
        '7 декабря прошла универсиада ПГНИУ по плаванию, команда ИКНТ показала отличные результаты.\n' +
        '\n' +
        'Ребята заняли призовые места сразу в нескольких номинациях:\n' +
        '▫3 место Черняев Владимир - 50 метров вольный стиль , юноши\n' +
        '▫2 место - эстафетное плавание 4 по 50 метров вольный стиль , смешанное\n' +
        '▫2 место - общекомандный зачет\n' +
        '\n' +
        'Желаем вам больших успехов в спорте! Пусть каждая тренировка приносит радость и вдохновение,а все ваши усилия будут вознаграждены яркими победами.',
      tag: '#newsIKNT'
    },
    {
      id: 3,
      img: 'https://sun9-67.userapi.com/impg/ROOp4Zi1kxtCTAk94RQqXqkO3VH2LWF_OD7-eQ/RdPqNOFghw4.jpg?size=1170x839&quality=95&sign=07bf79000bccbdc9f14297b126d718ba&type=album',
      title: 'Приглашаем студентов ПГНИУ на олимпиаду по программированию БПЛА',
      description:
        'Соревнования пройдут в составе команд по 2 человека - 19 декабря (четверг). Начало в 14:00. Длительность 3 часа',
      descriptionFull:
        'Соревнования пройдут в составе команд по 2 человека - 19 декабря (четверг). Начало в 14:00. Длительность 3 часа\n' +
        '\n' +
        'Регистрация обязательна - forms.yandex.ru/u/675ff39a...\n' +
        '\n' +
        'Всем зарегистрировавшимся предоставляется время для тренировок 17 или 18 декабря. Тренировки проводятся в Центре технологической поддержки обучающихся ИКНТ на  территории ОКБ "Маяк", ул. Данщина, 19, 1 этаж, вход через 2 подъезд.\n' +
        '\n' +
        'Регламент и полетное задание по ссылке - disk.yandex.ru/d/3RLWUWvC...',
      tag: '#newsIKNT'
    },

    {
      id: 4,
      img: 'https://sun9-41.userapi.com/impg/5ymbVZHx-EQhqydZBkSGduMdenDJ_2uSd8tynQ/cMXfPEU20ZI.jpg?size=1100x1100&quality=95&sign=a4d3c0fc2038b840e579d5910d81a4c5&type=album',
      title: 'Готовься к взлёту! ИТ-марафон Гринатома уже скоро!',
      description:
        'Присоединяйся к ИТ-марафону от Гринатома, который состоится 11 декабря в 17:00 в СДК ПГНИУ, ул. Букирева, д. 10 в г. Перми, и погрузись в мир высоких технологий атомной отрасли!',
      descriptionFull:
        'Присоединяйся к ИТ-марафону от Гринатома, который состоится 11 декабря в 17:00 в СДК ПГНИУ, ул. Букирева, д. 10 в г. Перми, и погрузись в мир высоких технологий атомной отрасли! Тебя ждут ценные знания, карьерные консультации и море карьерных возможностей!\n' +
        'Что тебя ждёт?' +
        '▪️17:00 – 21:00: Индивидуальные консультации с кураторами проекта ИТ-стажировки Росатома! Получи экспертную помощь по построению твоей карьеры в ИТ.\n' +
        '▪️17:00 – 17:05: Торжественное открытие ИТ-марафона!\n' +
        '▪️17:05 – 17:10: Приветственное слово от Руководителя проектов по работе с вузами!\n' +
        '▪️17:10 – 17:30: Узнай все о карьерных возможностях в ИТ в Гринатоме на мастер-классе: «Как построить карьеру в ИТ в атомной отрасли?»\n' +
        '▪️17:30 – 18:00: Мастер-класс «Путь в профессию. Форсайт» от эксперта ведущего разработчика Ирины Лещёвой – прокачай свои навыки планирования карьеры!\n' +
        '▪️18:15 – 18:30: Небольшой перерыв, чтобы перевести дух и зарядиться энергией!\n' +
        '▪️18:30 – 19:00: Мастер-класс «Твой путь в аналитику: Выбери свой трек» от Руководителя группы по работе с молодежью Ирины Романовой – определи свой путь в мире аналитики данных!\n' +
        '▪️19:20 – 19:40: Проверь свои знания в увлекательном ИТ-квизе и выиграй ценные призы!\n' +
        '▪️19:40 – 21:00: Завершение мероприятия с возможностью дополнительных консультаций!' +
        '▫️Место: СДК ПГНИУ, ул. Букирева, д. 10\n' +
        '▫️Дата: 11 декабря\n' +
        '▫️Время: 17:00' +
        'Не упусти свой шанс! Зарегистрируйся прямо сейчас и стань частью карьерного ИТ-события: edu.rosatom.ru/events/it-...',
      tag: '#newsIKNT'
    },
    {
      id: 5,

      img: 'https://sun9-5.userapi.com/impg/XslROdyYMeThZfWO9nQYlqq43uCiu41oJcIQGw/Z_7raM-9n0s.jpg?size=1280x960&quality=95&sign=c390d43f20d43c127d47246713f56b35&type=album',
      title: '3 команды ПГНИУ отобрались в основной тур ICPC',
      description:
        '26 октября прошел квалификационный тур Уральского регионального чемпионата ICPC (четвертьфинала чемпионата мира по программированию)',
      descriptionFull:
        'Организатором проведения соревнований в ПГНИУ выступил Институт компьютерных наук и технологий.\n' +
        '\n' +
        'Всего от Пермского края приняли участие 69 команд из ПГНИУ, ПНИПУ, филиала ВШЭ в Перми и других вузов.\n' +
        '\n' +
        'В основной тур четвертьфинала смогли отобраться три команды ПГНИУ, все являются студентами ИКНТ сетевой программы с МФТИ:\n' +
        '▫️ Gurren Dan (Grishkov, Guba, Gorbunov)\n' +
        '▫️ babijoni (Kolupaev, Rukhliadev, Vinokurov)\n' +
        '▫️ Decepticons (Filippov, Sharov, Opalev)\n' +
        '\n' +
        'Основной тур четвертьфинала ICPC пройдет 16 ноября в УРФУ (г. Екатеринбург).\n' +
        '\n' +
        'Поздравляем наших студентов и желаем дальнейших побед!',
      tag: '#newsIKNT'
    },
    {
      id: 6,
      img: 'https://sun9-8.userapi.com/impg/ZbdU2Ey7R1MIuStbPHFs9oLIRJ_1HZqI-dPD2g/YtwUS9VwFFo.jpg?size=1280x854&quality=95&sign=6f5cb7dd01cc4308addda0d2d1418a17&type=album',
      title: 'День тренингов в Пермском университете',
      description:
        'На базе Пермского университета 2 ноября пройдёт День тренингов. В этом году событие будет посвящено навыкам современности — навыки, без которых сложно жить в годах нового поколения',
      descriptionFull:
        'На базе Пермского университета 2 ноября пройдёт День тренингов. В этом году событие будет посвящено навыкам современности — навыки, без которых сложно жить в годах нового поколения.\n' +
        '\n' +
        'Участников ждут интерактивные площадки, образовательные лекции и мастер-классы. Ты сможешь:\n' +
        '— научиться работать с нейросетями и информацией;\n' +
        '— эффективно трудиться в условиях неопределённости;\n' +
        '— познакомиться с региональными и федеральными тренерами.\n' +
        '\n' +
        'Регистрация доступна до 31 октября: vk.cc/cCB8K6. Больше подробностей — в @ vk.com/dentreningovperm (группе проекта). Действуй! Это осень твоих возможностей!\n' +
        '\n' +
        'День Тренингов реализуется в рамках проекта студентов ПГНИУ «Развивай(ся)» при поддержке Росмолодёжь.Гранты.',
      tag: '#newsIKNT'
    }
  ]

  return {
    news
  }
})
