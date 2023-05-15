# Workshop #6

| Kliensoldali fejlesztés | |
|-----|---|
| Feldolgozandó modulok: | modul-11, modul-12 |
| Témakörök: | Angular, Material UI |
| Cím: | Autentikációs Angular alkalmazás készítése backend API-t felhasználva |
| Félév: | 2023 tavaszi félév |
| Oktató: | Sipos Miklós |

## Feladat

Készítsen egy kliensoldali programot Angular keretrendszer, valamint a hozzá tartozó Materiaul UI felhasználásával, amelyben oktatókat (Teacher) lehet kezelni az alábbi kikötéseknek megfelelően. A rendszerben legyen regisztrációs és ebből adódóan be- és kijelentkezési lehetőség is. Bejelentkezett felhasználóknak legyen elérhető számos funkció.

## Elvárások, kikötések

### Backend API
- backend API hívásokra az [itt található](https://practiceapi.nikprog.hu/swagger/index.html) végpontokat használja

### Egységes design
- az oldalon az egységes design elérése érdekében [Angular Material UI](https://material.angular.io/)-t használjon

### Kódolási elvárások
- a feladat megvalósítása során használjon több komponenst a megfelelő routing és routing védelmi beállításokkal, minimum az alábbiakat:
    - bejelentkezés
    - kijelentkezés
    - regisztráció
    - tanár listázás
    - tanár létrehozás
    - tárgy listázás
    - hibaüzenet

### Funkciók megvalósítása
- **autentikáció**
    - a rendszer ne rendelkezzen főoldallal, egyből a bejelentkezési felület jelenjen meg,amelyen alul legyen egy gomb, miszerint ha nincs még regisztrált fiókunk úgy lehessen létrehozni egyet és ehhez navigáljon át a regisztrációra
    - a rendszerbe lehessen regisztrálni, majd regisztrációt követően lehessen bejelentkezni (és majdan kijelentkezni), az ezekhez szükséges komponenseket hozza létre
    - autentikációhoz használjon JWT tokent, localstorage-ot és service-t
    - bejelentkezett felhasználók esetében lehessen tanárokat listázni és létrehozni, valamint lehessen tárgyakat listázni, egyéb esetben a nem authentikált felhasználókat ne engedje be a rendszer ezen komponenseire és irányítsa át őket egy hibaüzenetre
    - sikeres bejelentkezés esetén, a bejelentkezést követően ezeket a menüpontokat (tanár listázás, tárgy listázás, tanár létrehozás) lehessen elérni egy felső navigációs sávból
- **tanárok listázása**
    - a tanárok adatait card-ok segítségével jelenítse meg az alábbiak szerint
    - a card-okat több féle módon fel lehet használni, valásszon egy kedvére valót
    - ezen helyezze el a tanár nevét és neptunkódját, valamint a profilképét, majd alatta listaként jelenjenek meg a tárgyak (név, neptunkód és kredit érték elrendezésben)
- **tanár módosítása**
    - adott tanárhoz tartozó adatokat lehessen módosítani input mezők segítségével
    - a tanárok card-jain helyezzen el alul egy sárga gombot "Módosítás" felirattal, amelyet megnyomva, a card-ok fölött jelenjen egy világászöld rész, amelyben input mezőkön keresztül lehessen módosítani az adott tanár tulajdonságait
    - a zöld részben az input mezők alatt jelenjen meg két gomb; egy "Mentés" és egy "Elvetés" feliratú
        - mentés esetén hívja meg a megfelelő backend végpontot
        - elvetés esetén dobja el a módosításokat
- **tanár létrehozása**
    - hozzon létre mindennek megfelelő input mezőket, alkalmazzon adatkötést majd egy gomb megnyomását követően hívja meg a megfelelő végpontot
    - akár hiba, akár sikeres művelet esetén minimum console.log-on keresztül adjon visszajelzést
- **tárgyak listázása**
    - a tárgyak adatait card-ok segítségével jelenítse meg, az alábbiak szerint
    - adott tárgy kredit értéke a tárgy neve mellett [badge](https://material.angular.io/components/badge/overview) segítségével jelenjen meg
    - adott tárgy neptun kódja [chips](https://material.angular.io/components/chips/overview) segítségével jelenjen meg
    - a többi tárgyhoz tartozó adat egymás alatt [divider](https://material.angular.io/components/divider/overview8)-ekkel elválasztva jelenjen meg
    - hozzon létre egy gombot a card alján, amelyre kattintva a tárgy ID-ja íródjon ki egy sima alert ablakban (`alert('xy')`)