# Workshop #3

| Kliensoldali fejlesztés | |
|-----|---|
| Feldolgozandó modulok: | modul-5, modul-6 |
| Témakörök: | JS, HTML, CSS |
| Cím: | CRUD JavaScript alkalmazás készítése backend API-t felhasználva |
| Félév: | 2023 tavaszi félév |
| Oktató: | Sipos Miklós |

## Feladat

Készítsen egy kliensoldali programot JavaScript, HTML és CSS segítségével, amelyben hallgatókat (Student) lehet kezelni az alábbi kikötéseknek megfelelően.

### Elvárások, kikötések
- **backend API**
    - a backendhez tartozó API végpontokat [innen lehet elérni](https://practiceapi.nikprog.hu/swagger/index.html)
    - a felhasználáskor figyeljen rá, hogy az ott található adatokat mindenki használja, így javasolt és elvárt, hogy csak olyan objektumokat módosítson vagy töröljön, amelyeket ön használ. ehhez vigyen fel új elemeket (lásd CREATE rész alább).
- **egységes design**
    - az oldalon az egységes design elérése érdekében [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/download/)-öt használjon
- **kódolási elvárások**
    - a feladat megvalósítása során használjon modulokat és ezek segítségével alakítson ki osztályokat (pl. `Student`, `Renderer`, `Logic`, `APIHandler` stb.) szükség szerint és ezeket használja, ahogy a tananyagban szerepelt
- **CRUD funkciók megvalósítása**
    - `READ`
        - a rendszerben lehessen a meglévő hallgatókat listázni
        - a hallgatók adatai jelenjenek meg [Bootstrap card](https://getbootstrap.com/docs/5.0/components/card/)-ok segítségével
        - a kép helyére a hallgató képe kerüljön
        - a `card-title` helyére a hallgató neve kerüljön
        - a `card-text` helyére a hallgató többi adata egymás alatt szöveges formában kiírva, pl. így:
            ``` 
            Birth year: 1998
            Completed credits: 55
            Semester count: 10
            Connections: 1450
            ```
        - a teljes card kapjon egy piros keretet, valamint a profilkép legyen elhalványítva és fekete fehérré alakítva, ha a hallgató inaktív státuszú (saját CSS-el valósítsa meg)
        - a teljes card kapjon egy zöld keretet, ha a hallgató aktív státuszú (saját CSS-el valósítsa meg)
    - `DELETE`
        - lehessen kijelölt hallgatót törölni, ehhez a card-on található gombot használja fel, amely legyen piros színű és a 'Delete' szöveg legyen benne
        - a törlést követően frissítse a kliensoldali adatszerkezetet és a UI-t is
    - `UPDATE`
        - lehessen egy hallgatót frissíteni, ehhez az oldal tetején hozzon létre egy elkerített részt kék háttérrel, amelyen belül hozzon létre input mezőket és hozzájuk tartozó placeholder-eket, minden tulajdonságnak egy dedikáltat, valamint egy piros gombot 'Add new Student' felirattal
        - ezeket az input mezőket kitöltve a hallgató adataival, a gomb lenyomását követően frissítse az elemet
        - az egyszerűség kedvéért a card-okon helyezzen el még egy gombot, kék színnel, amelyre rákattintva az adott Student adatai töltődjenek be a megfelelő inputmezőkbe
        - sikeres API hívás esetén a UI-hoz tartozó tömbben keresse meg a frissítendő elemet és csak azt az egyet frissítse, majd frissítse a UI-t is
        - hibakezelést és vizsgálatot (pl. létezik-e ilyen id-jú elem) nem szükséges csinálnia jelenleg, tételezzük fel, hogy jó és valós adatokat írunk be a Student módosításához
    - `CREATE`
        - hozzon létre az oldal tetején egy dedikált részt, ahol 1 db textarea és egy gomb legyen
        - a textarea-ba egy JSON objektumot tudunk betenni (hasonlóan ahogy a Swagger ide vonatkozó felületén látjuk) és gombnyomás hatására ezt olvassa ki, ebből hozzon létre egy objektumot és azt küldje el a megfelelő backend végpontra
        - figyeljen arra, hogy a backendhez mindenki hozzáfér, így javasolt, hogy a felvitt elemek nevét lássa el a saját nevének kezdőbetüivel prefixelve, a könnyebb átláthatóság érdekében, és majd később csak ezeket az elemeket frissítse / törölje
        - példa: Gipsz Jakab esetén a felvett új hallgató neve: `GJ-JohnDoe`
- **szűrés**
    - az oldal tetején hozzon létre egy részt, amelyben egy legördülő listából lehessen kiválasztani, hogy csak az aktív, vagy csak a passzív (nem aktív) hallgatókat mutassa a rendszer
    - ennek megfelelően szűrje az objektumokat tartalmazó tömböt
    - a listából lehessen kiválasztani egy "reset" állapotot is (vagy ez megoldható egy dedikált gombbal is), amely segítségével az alapállapot álljon vissza