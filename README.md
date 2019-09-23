Quest Game template


## Запуск проекта:
Стандартный запуск проекта (использован create-react-app)
 >npm i
 
 >npm strat

##  Структура проекта
|     Папка     |  Для чего        |    Особенности    |
| ----------- | -------------------- | ------------------- |
|components | Вынесли все переиспользуемое в компоненты | В  папке есть UI компоненты там все,  что касается мелочи (элементов форм, карточек) |
|pages | Основные страницы сайта  |  |
|styles | Хелперы для css in js |Вынесли туда глобальные стили и файл с темой для переключения светлая темная|
|utils | Все для хелперов и каких то переиспользуемых штук | responsive-components - это обертка для переключения на разных  разрешениях двух разных лейаутов|
|data|Все данные в формате json|Чтобы просто потом с севрера легко заменить получение данных и ничего не поломалось|

## Данные (в проекте папка data)

 >mainPage.json

Для главной страницы. Общая структура такая:

```
{
   "mainTitle": "",
   "ourGames": {
      "title": "",
      "games": []
   },
   "ourLocations": []
}

```

Где ourGames - это раздел наши игры и сам в себя включает под типы игр:

```
{
   "ourGames": {
      "title": "",
      "games": [
           {
                "id": 1,
                "type": "paintball",
                "subTitle": "Пейнтбол",
                "gameTypes": [
                    {
                        "id": 1,
                        "title": "Детский Пейнтбол",
                        "url": "/game/kids",
                        "tags": [
                            {
                                "id": 1,
                                "title": "6-11 лет"
                            }
                        ],
                        "posterImg": "https://iamwerby.com/static/media/index.199606dc.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Пейнтбол",
                        "url": "/game/paintball",
                        "tags": [
                            {
                                "id": 1,
                                "title": "12+"
                            }
                        ],
                        "posterImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHikPZMX_KzZyYo2lZmFOFpGTD2jym9zTSpTrCehWoAk8OLcKq"
                    },
                    {
                        "id": 3,
                        "title": "Ночной пейнтбол",
                        "url": "/game/nightPaintball",
                        "tags": [
                            {
                                "id": 1,
                                "title": "12+"
                            }
                        ],
                        "posterImg": "https://i.ytimg.com/vi/Je5MV8XCE9I/maxresdefault.jpg"
                    }
                ]
            },
      ]
   }
}

```
И так далее по каждому типу игры: Страйкбол, перфоманс и тд. И в результате весь массив состоит из четырех обьектов:
```
games: Array(4)
0: {id: 1, type: "paintball", subTitle: "Пейнтбол", gameTypes: Array(3)}
1: {id: 2, type: "straikball", subTitle: "Страйкбол", gameTypes: Array(3)}
2: {id: 3, type: "actionGames", subTitle: "Экшн Игры", gameTypes: Array(6)}
3: {id: 4, type: "additionalEntertainment", subTitle: "Развлечения", gameTypes: Array(3)}
```

##  Технические долги

- [ ] В анимации компоненты Banner.js не могу использовать условный рендеринг. Если элемента изначально нет в доме, дальше при переключении темы он не увидит нового появившегося элемента в разметке. Пока решила это вопрос стилями.

