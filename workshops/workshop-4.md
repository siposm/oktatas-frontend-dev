# Workshop #4

| Kliensoldali fejlesztés | |
|-----|---|
| Feldolgozandó modulok: | modul-7, modul-8 |
| Témakörök: | Vue, Bootstrap |
| Cím: | CRUD Vue alkalmazás készítése backend API-t felhasználva |
| Félév: | 2023 tavaszi félév |
| Oktató: | Sipos Miklós |

## Feladat

Készítsen egy kliensoldali programot Vue keretrendszer felhasználásával, amelyben hallgatókat (Student) lehet kezelni az alábbi kikötéseknek megfelelően.

### Elvárások, kikötések

- **backend API**
  - a backendhez tartozó API végpontokat [innen lehet elérni](https://practiceapi.nikprog.hu/swagger/index.html)
  - a felhasználáskor figyeljen rá, hogy az ott található adatokat mindenki használja, így javasolt és elvárt, hogy csak olyan objektumokat módosítson vagy töröljön, amelyeket csak ön használ. ehhez vigyen fel új elemeket (lásd CREATE rész alább).
- **egységes design**
  - az oldalon az egységes design elérése érdekében [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/download/)-öt használjon
- **kódolási elvárások**
  - a feladat megvalósítása során megfelelő ha a Vue-t CDN-ről használja, illetve a fetch API használata is elégséges (nem szükséges pl. Axios használata)
  - használjon fel 1 db komponenst kötelezően (de ezen kívül tetszőlegesen lehet többet is felhasználni) a tanultaknak megfelelően
    - a student objektumokat reprezentáló komponenst hozza létre (a komponens 1 db student objektum reprezentálására szolgál, ezt kell iterálva felhasználni), amelyben a `template` részben valósítsa meg a megfelelő megjelenítést
  - alkalmazzon **mindenhez(!)** adatkötést
  - használja fel a `data`, `computed`, `created`, `components` és `methods` részeit egy Vue alkalmazásnak
- **CRUD funkciók megvalósítása**
  - `READ`
    - a rendszerben lehessen a meglévő hallgatókat listázni
    - a hallgatók adatai jelenjenek meg [Bootstrap table](https://getbootstrap.com/docs/5.0/content/tables/) segítségével
    - a legelső oszlopba jelenjen meg egy sorszámozás 1-től indulva
    - a második oszlopba jelenjen meg a hallgató képe, kis kör alakban
    - a további oszlopokban jelen meg a többi paraméter (név stb.)
    - a hallgató képe kapjon egy 2-3 pixeles keretet amely legyen piros színű ha a hallgató inaktív státuszú, és zöld ha a hallgató aktív státuszú
    - a hallgató neve legyen piros színű ha a hallgató inaktív státuszú, és zöld ha a hallgató aktív státuszú
    - a táblázat sorai az egérmutató 'hover' hatására legyenek más színűek
    - a táblázatban egy adott sorra kattintva a konzolra logolja ki a hallgató azonosítóját és nevét
  - `DELETE`
    - lehessen kijelölt hallgatót törölni, ehhez táblázat utolsó oszlopába helyezzen el egy gombot, amely legyen piros színű és a 'Delete' szöveg legyen benne
    - a törlést követően, ha adatkötést használ, akkor automatikusan minden frissül (más megoldás nem elfogadható)
  - `UPDATE`
    - lehessen egy hallgatót frissíteni, ehhez az oldal tetején hozzon létre egy elkerített részt kék háttérrel, amelyen belül hozzon létre input mezőket és hozzájuk tartozó placeholder-eket, minden tulajdonságnak egy dedikáltat, valamint egy sárga gombot 'Update Student' felirattal
    - ezeket az input mezőket kitöltve a hallgató adataival, a gomb lenyomását követően frissítse az elemet
    - ha egyes inputmezők üresen maradnak, akkor azokat kezelje úgy, hogy azon tulajdonságokat NEM kell frissíteni, maradnak az eredeti értékűek
    - hibakezelést és vizsgálatot (pl. létezik-e ilyen id-jú elem) nem szükséges csinálnia jelenleg, tételezzük fel, hogy jó és valós adatokat írunk be a Student módosításához
  - `CREATE`
    - hozzon létre az oldal tetején egy dedikált sárga hátterű részt, ahol 1 db textarea és egy gomb legyen
    - a textarea-ba egy JSON objektumot tudunk betenni (hasonlóan ahogy a Swagger ide vonatkozó felületén látjuk) és gombnyomás hatására ezt olvassa ki, ebből hozzon létre egy objektumot és azt küldje el a megfelelő backend végpontra
    - figyeljen arra, hogy a backendhez mindenki hozzáfér, így javasolt, hogy a felvitt elemek nevét lássa el a saját nevének kezdőbetüivel prefixelve, a könnyebb átláthatóság érdekében, és majd később csak ezeket az elemeket frissítse / törölje
    - példa: Gipsz Jakab esetén a felvett új hallgató neve: `GJ-JohnDoe`
