# Workshop #5

| Kliensoldali fejlesztés | |
|-----|---|
| Feldolgozandó modulok: | modul-9, modul-10 |
| Témakörök: | Angular, Bootstrap |
| Cím: | Angular alkalmazás készítése backend API-t felhasználva |
| Félév: | 2023 tavaszi félév |
| Oktató: | Sipos Miklós |

## Feladat

Készítsen egy kliensoldali programot Angular keretrendszer felhasználásával, amelyben termékeket (Product) lehet kezelni az alábbi kikötéseknek megfelelően.

### Elvárások, kikötések
- **backend API**
    - a backendhez tartozó API végpontokat [innen lehet elérni](https://dummyjson.com/)
    - a backend API végpontok update és delete részei csak szimuláltan működnek, ahogy [itt is olvasható](https://dummyjson.com/docs/products#update), amely azt jelenti, hogy a szerveren a módosítások nem fognak végbemenni, de valós működést szimulálva kapunk response-t a szervertől
- **egységes design**
    - az oldalon az egységes design elérése érdekében [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/download/)-öt használjon
- **kódolási elvárások**
    - a feladat megvalósítása során használjon 1 db komponenst, amely az alap `app.component` legyen, az ide vonatkozó `html`, `scss` és `ts` állományokkal
    - alkalmazzon **mindenhez(!)** adatkötést
    - a szükséges típusokhoz tartozó `.ts` állományokat és osztályokat hozza létre
- **funkciók megvalósítása**
    - a rendszer töltse be a végpontról mind a 100 terméket, melyeket [táblázatos](https://getbootstrap.com/docs/5.0/content/tables/) formában jelenítsen meg
        - az alap végpont hívás csak 30 terméket ad vissza, a [limit és skip](https://dummyjson.com/docs/products#limit_skip) változókat felhasználva befolyásolja, hogy mind a 100 db lekérdeződjön
        - lekérdezéskor az adott termékhez "generáljon" kommenteket, melyhez használja fel a [comments végpontot](https://dummyjson.com/docs/comments), ezzel szimulálva, hogy a termékhez felhasználók kommenteltek pl. egy webshopnál
    - egy termék objektum az alábbiaknak megfelelően épül fel
        ``` json
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/1/1.jpg",
                    "https://i.dummyjson.com/data/products/1/2.jpg",
                    "https://i.dummyjson.com/data/products/1/3.jpg",
                    "https://i.dummyjson.com/data/products/1/4.jpg",
                    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                ]
            }
        ```
    - egy komment objektum az alábbiaknak megfelelően épül fel
        ``` json
            {
                "id": 1,
                "body": "This is some awesome thinking!",
                "postId": 100,
                "user": {
                    "id": 63,
                    "username": "eburras1q"
                }
            }
        ```
    - a táblázat oszlopai legyenek sorrendben megfeleltetve az objektum tulajdonságainak, kivéve a `description` és az `images`, e kettőt nem kell itt megjeleníteni
    - a `thumbnail` egy kis kör alakú képként jelenjen meg az `id` után közvetlenül, majd a `title` és utána a többi tulajdonság sorrendben következik
    - a táblázatban az adott sor legyen legyen sárga, zöld vagy piros hátterű (ehhez a [Bootstrap-ban található class-okat](https://getbootstrap.com/docs/5.0/content/tables/#variants) használja fel, ne egyedi CSS-t írjon) attól függően, hogy adott termékből a stock értéke mennyi, azaz mennyi van belőle még raktáron
        - 0-50 között --> alacsony készlet --> piros
        - 50-100 között --> közepes készlet --> sárga
        - 100 felett --> nagy készlet --> zöld
    - a táblázat utolsó oszlopában legyen két gomb
        - egy 'DEL' feliratú gomb, amire kattintva törlődjön a termék (a szimulált backend hívást is végezze el)
        - egy 'MORE' feliratú gomb, amire kattintva a táblázat tetején egy [kék alert részbe](https://getbootstrap.com/docs/5.0/components/alerts/) töltődjön be csak a kiválasztott termék, illetve annak tulajdonságai
            - itt jelenjen meg a termékhez tartozó leírás is (`description`), valamint a többi kép is, melyekhez használjon fel [grid elrendezést](https://getbootstrap.com/docs/5.0/layout/grid/#example)
            - jelenjenek meg továbbá a kommentek is (tartalom + ki írta), melyeknek a tartalmát (body) lehessen szerkeszteni
            - az Bootstrap alert "ablakot" lehessen az x gombra kattintva bezárni, így tűnjön el az oldalról
    - az oldal legtetején hozzon létre 3 piros gombot majd a hozzájuk társított feladatot végezze el; az eredményt elég ha a JS kódból `alert()` formájában kiírja
        - 'CountCategory': számolja meg melyik kategóriából hány darab termék van (jelenleg) kilistázva
        - 'MaxDiscount': határozza meg, mennyi a legnagyobb kedvezmény
        - 'PriceLevel': adja meg, hogy mely termékek (id + név) vannak az átlagos árszint felett