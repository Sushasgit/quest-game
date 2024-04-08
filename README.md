Quest Game template

## Overview


Welcome to the GitHub repository for the Action Game Studio Project, a comprehensive solution designed not just for booking action game sessions but also for offering a visually engaging interface adaptable to both light and dark themes.
- Easy Game Booking: Pick and book your favorite action game sessions quickly. Whether it's for running around with paintball guns or strategic airsoft battles.
- Light or Dark Theme: Switch between light or dark looks whenever you want. It's easy on the eyes, whether you're checking in during the day or night.
- Manage Games Like a Pro: Keep track of different game types.


  ## Main page
|     Dark     |  Light        | 
| ----------- | -------------------- |
|<img width="1185" alt="Screenshot 2024-04-08 at 17 19 24" src="https://github.com/Sushasgit/quest-game/assets/26334961/8098a687-28df-44ae-b9fb-2942fcf8f8e4"> | <img width="1184" alt="Screenshot 2024-04-08 at 17 19 47" src="https://github.com/Sushasgit/quest-game/assets/26334961/49c58fcd-7be6-4099-83f6-f0ba38c383cd">



## Project setup:
Project setup (using create-react-app)
 >npm i
 
 >npm start

## Project Structure
|     Folder     |  Purpose        |    Features    |
| ----------- | -------------------- | ------------------- |
|components | Moved all reusable components here | The folder contains UI components, including everything related to details (form elements, cards) |
|pages | Main pages of the site  |  |
|styles | Helpers for CSS-in-JS | Moved global styles there, as well as a file with a theme for switching between light and dark modes|
|utils | Everything for helpers and any reusable stuff | `responsive-components` is a wrapper for switching between two different layouts at various resolutions|
|data|All data in JSON format|So that later it's easy to replace data fetching from the server without breaking anything|

## Data (folder data)

 >mainPage.json

For the main page. The overall structure is as follows:

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

Where "ourGames" is the "Our Games" section and itself includes subtypes of games:

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
And so on for each type of game: Airsoft, performance, etc. As a result, the entire array consists of four objects:
```
games: Array(4)
0: {id: 1, type: "paintball", subTitle: "Пейнтбол", gameTypes: Array(3)}
1: {id: 2, type: "straikball", subTitle: "Страйкбол", gameTypes: Array(3)}
2: {id: 3, type: "actionGames", subTitle: "Экшн Игры", gameTypes: Array(6)}
3: {id: 4, type: "additionalEntertainment", subTitle: "Развлечения", gameTypes: Array(3)}
```

Inside these sections, there are subtypes of the games themselves, for example, within paintball there are three types of paintball, and this is in the gameTypes array..

```
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
```

Each sub-game should have the following structure.

>games.json (For individual game pages)

All pages have the same structure, and a single component in the /pages/GamePage folder is used for them.
 
 ```
 {
    "type": "kids",
    "mainTitle": "Детский Пейнтбол",
    "subTitle": "Что это?",
    "ready": true,
    "mainDescription": "Если Вы хотите устроить настоящий детский праздник, то отличным решением может стать проведение детской игры в    нашем пейнтбольном клубе",
     "rows": []
 }
 ```

In the rows array, there's a description that will be in each game. And in UI, these are the lines with a description.
For example, on the page for children's paintball, there is one line with a description, and in this array, there's only one object:
 
 ```
  {
      "id": 1,
      "title": "Пейнтбол для детей",
      "tags": ["от 5 до 12 лет", "TOP"],
      "list": [
           {
             "id": 1,
              "desc": "В пейнтбольном клубе « Real Games » огромный опыт проведения детских игр и детских пейнтбольных турниров."
           },
           {
              "id": 2,
              "desc": " Мы активно развиваем и считаем приоритетным такое направление как детский пейнтбол."
           },
           {
              "id": 3,
              "desc": "Наши внимательные инструктора помогут с подбором экипировки"
           },
           {
              "id": 4,
              "desc": "Проведут инструктаж и объяснят технику безопасности"
           },
           {
              "id": 5,
              "desc": "Будут следить за ходом игры и соблюдением игроками техники безопасности чтобы юные игроки могли весело и безопасно поиграть в нашем пейнтбольном клубе"
           }
         ],
      "advantage": "Существует заблуждение, что пейнтбол травмоопасная и совсем не детская игра.Однако, статистика говорит об обратном. Применяемая техника безопасности в пейнтболе и специальное оборудование  игроками делает по травмоопасности пейнтбол не опаснее настольного тенниса или гольфа."
 }, 
 ```
##  Data replacement
When it'll be possible to incorporate real data.

All dumb components receive data from their containers. We've arranged it so that the components in pages take data and distribute it to dumb components.

It will be possible to make requests in componentDidMount. And once setState has been executed, components can be rendered from it.

```
  componentDidMount() {
    axios.get(`https://...`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }
```

## Technical Debt

- [ ] In the animation of the `Banner.js` component, I can't use conditional rendering. If the element is initially not in the DOM, then upon switching themes, it won't detect the new element that has appeared in the layout. For now, I've resolved this issue with styles.
- [ ] The `switch` component was poorly made in a hurry (not accessible at all) and is just styled. When possible, it needs to be properly made with a native checkbox.

This is template for real action game studio
