# Workshop #2

| Kliensoldali fejlesztés | |
|-----|---|
| Feldolgozandó modulok: | modul-3, modul-4 |
| Témakörök: | JS, HTML, CSS |
| Cím: | Eseményvezérelt JavaScript alkalmazás készítése |
| Félév: | 2023 tavaszi félév |
| Oktató: | Sipos Miklós |

## Feladat

Készítsen egy kliensoldali programot JavaScript, HTML és CSS segítségével, amelyben teendőket (To Do) lehet kezelni az alábbi kikötéseknek és [Figma mintának](https://www.figma.com/file/BT0EAUeObC5Jm1d97sOVWK/workshop-2-todo-manager?node-id=0%3A1&t=DecApPk9TubGZ4jt-1) megfelelően.

### Elvárások, kikötések
 - **elemek inicializálása**
    - hozzon létre egy tömböt amelyben tároljon el `To Do` elemeket
    - egy ilyen elem az alábbi paraméterekkel rendelkezik
        - `category`: az alábbi három kategória egyike
            - `to buy`: vásárolni kell valamit
            - `work`: munkával kapcsolatos teendő
            - `school`: iskolával kapcsolatos teendő
        - `priority`: 1-4 közötti számérték, amely a tennivaló fontosságát jelzi
        - `content`: a tennivaló szöveges megfogalmazása
        - `icon`: egy szöveges érték, amely a [fontawesome](https://www.w3schools.com/icons/fontawesome5_intro.asp)-ból alapján egy ikon teljes html kódját jelenti (pl. `<i class="fas fa-clock"></i>`)
    - a tömböt töltse fel kezdetben pár darab teszt objektummal
    - megjegyzés: használató dedikált osztály is, de az is megfelelő, ha csak simán objektumok kerülnek létrehozásra
- **elemek feldolgozása**
    - a létrehozott tömböt dolgozza fel a JS kódból
    - az `index.html`-ben hozzon létre egy megfelelő `div`-et, amelybe a kódból programozottan hozzon létre paragrafus elemeket
    - a paragrafus elemekben legyen tartalomként benne a tennivaló szövege, tőle balra pedig a hozzá tartozó ikon
    - ha ez sikeresen megtörtént akkor alakítsa át a felületet egy három oszlopos elrendezésre majd a megfelelő kategóriájú elemet tegye a neki megfelelő oszlopba
        - a bal oszlop legyen a `to buy` kategória
        - a középső oszlop legyen a `work` kategória
        - a jobb oszlop legyen a `school` kategória
- **prioritás hozzáadása**
    - a prioritás megjelenítésére hozzon létre dedikált stílusosztályokat amelyekben határozza meg, hogy az egyes prioritással ellátott elemek milyen (betű vagy háttér) színnel jelenjenek meg
    - a fontosságtól függően alkalmazza az alábbi színskálát
        - 1-es prioritás: ![#3CDD2F](https://placehold.co/15x15/3CDD2F/3CDD2F.png) `#3CDD2F`
        - 2-es prioritás: ![#FFE936](https://placehold.co/15x15/FFE936/FFE936.png) `#FFE936`
        - 3-as prioritás: ![#FF7A1D](https://placehold.co/15x15/FF7A1D/FF7A1D.png) `#FF7A1D`
        - 4-es prioritás: ![#E10000](https://placehold.co/15x15/E10000/E10000.png) `#E10000`
- **új teendő felvitele**
    - az oldal tetején középre hozza létre az alábbi inputokat
        - input 1: teendő szövege (szöveges beviteli mező)
        - input 2: teendő prioritása (legördülő lista, amelyben a default érték legyen közepes prioritás)
        - input 3: teendő kategóriája (legördülő lista, amelyben a default érték legyen üres)
        - input 4: teendő ikonjának kódja (szöveges beviteli mező)
        - gomb
    - a bevitellel kapcsolatos mezőkre alkalmazzon valamilyen saját stílust, hogy látványosak legyenek
    - a gomb megnyomására a beírt adatok alapján adja hozzá az új elemet a listához
- **szűrés**
    - az előző felviteli feladatot egészítse ki azzal, hogy az alábbi esetekben NE adjon hozzá új elemet a listához
        - ha a teendő szövege üres
        - ha a teendő szövege nem éri el a minimum 3 karaktert
        - ha a kategória üres
- **teendő teljesítése**
    - a már felvitt elemeket lehessen teljesíteni
    - ehhez egérrel lehessen klikkelni az egyes elemekre
    - egy teljesített elem legyen ~~áthúzott~~ stílusú