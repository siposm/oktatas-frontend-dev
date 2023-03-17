# Féléves Feladat Követelmények

    Kliensoldali Fejlesztés • 2023 tavaszi félév • Sipos Miklós


<br>
<br>
<br>

### Téma
- A féléves feladatban valamilyen entitásokat menedzselő alkalmazást kell készíteni a lentebb található elvárásoknak eleget téve, a félév tananyagait felhasználva.
- Például egy hallgatókat kezelő rendszer, amibe regisztráció után lehet új hallgatókat felvenni, meglévőket módosítani, regisztráció nélkül pedig csak megtekinteni azokat és a hallgatott tárgyaikat.
- A feladatnak több modell osztállyal (és azok közötti kapcsolattal) kell rendelkeznie.

<br>
<br>
<br>

### Technológiák felhasználása
- A féléves feladatban a felhasználni kívánt technológia az alábbiakból választható: Vue vagy Angular, Bootstrap vagy Angular Material (lásd bővebben az [Elvárások](#elvárások) fejezetet).
- Továbbá használható minden olyan eszköz, keretrendszer, library melyeket az órák során érintettünk.
- Külső (a tananyagok alatt nem érintett) eszköz felhasználása esetén előzetes egyeztetés szükséges. Ennek oka, hogy a féléves feladatok nagyjából azonos szintűek legyenek.

<br>
<br>
<br>

### Beadási határidő
- Mérnökinformatikus képzés esetén:
    - A féléves feladatokat a vizsgaidőszakban, a vizsgát megelőző nap délig lehet frissíteni. Azt követően új kód nem kerülhet a repository-ba.
- Üzemmérnök-informatikus képzés esetén:
    - A féléves feladatokat a 14. héten a labor idejében kell bemutatni.

<br>
<br>
<br>

### Elvárások

#### Kötelező elemek

A féléves feladatban az alábbi elvárásokat kötelező megvalósítani a legalább elégséges szinthez.

| Elvárás | Pont |
| - | - |
| Vue vagy Angular segítségével készül el | 1 |
| használjon valamilyen CSS keretrendszert (pl. Bootstrap vagy Angular Material) | 1 |
| backend oldalról API végpontokkal kommunikál | 1 |
| legalább 7 komponensből épüljön fel | 1 |
| lehessen CRUD műveleteket végezni az entitások mindegyikén, valamint rendelkezzen komplexebb adatok megjelenítésével is (pl. non-CRUD műveletek eredményei) | 1 |
| legyen regisztráció és bejelentkezési funkció | 1 |
| tartalmazzon validációt az input mezőkre | 1 |
| használjon token alapú authentikációt | 1 |
| pár kiemelt tartalomra / elemre készítsen saját CSS-t amely esztétikus és az alkalmazáshoz illeszkedik | 1 |
| GitHub-on vezetve, feature-branch alapú fejlesztést követve készül el, minimum 40 commit-on keresztül | 1 |

#### Opcionális elemek

A kötelező elemeken túl opcionálisan megvalósítható funkciókkal plusz pontok gyűjthetők, az alábbiak szerint. A fel nem sorolt elemeken túl saját ötleteket is elfogadok, ezeket előre egyeztetni szükséges a biztonság érdekében.

| Elvárás | Pont |
| - | - |
| legyenek különböző funkciók implementálva, melyekhez használja fel a tömb metódusokat (map, filter, reduce stb.) | 1 |
| valamilyen publikus felületen elérhető a kész alkalmazás | 1 |
| használ valamilyen saját algoritmust vagy adatszerkezetet (pl. gráf, back track search) | 1 |
| teljesen reszponzív megjelenítéssel rendelkezik (telefon-tablet-desktop) | 1 |
| rendelkezik social login belépési funkcióval (pl. Google, Facebook) | 1 |
| GitHub-on valamilyen CI/CD pipeline megoldást használ | 1 |
| használ valamilyen state management-et | 1 |
| valamilyen egyéb CSS keretrendszert használ (pl. Tailwind) akár meglévővel kombinálva, akár kizárólagosan | 1 |
| teszteli a frontend komponenseket, funkciókat | 1 |
| valamilyen részét az alkalmazásnak valós időben mutatja SignalR segítségével | 1 |



<br>
<br>
<br>

### Korábbi munkák felhasználása
- A féléves feladatban a Szerveroldali fejlesztés előzménytárgy anyagai felhasználhatók. Ha a tárgyon az API-k nem készültek el, azokat a mostani félévben kell elkészíteni és azokat kell felhasználni a kliens alkalmazásból.
- Ha teljesen új projektet szeretne valaki kezdeni, erre is van lehetőség.

<br>
<br>
<br>

### Kód menedzsment
- A félélves feladatot GitHub-on a neki megfelelő repository-ban kell vezetni. Ehhez mindenkinek létrehozok egy repository-t és a GitHub userét hozzáadom.
- A félév folyamán a kódot fokozatosan kell fejleszteni, commitolni.
- Az elvárt minimum commit szám: 40
- Multibranch használta szükséges, melyben `feature/xy` alapon kell létrehozni a brancheket. A branch-ek ne legyenek törölve az adott merge után.

<br>
<br>
<br>

### Specifikáció
- A specifikációt a repository gyökerében `SPEC.md` néven kell létrehozni, a 10. szorgalmi hétig. A dokumentumnak tartalmaznia kell:
    - a készítendő rendszer pár mondatos leírását
    - funkciólistát, végpont listát (mit fog tudni a rendszer, mi az elvárás)
        - a backend API végpontokat érdemes eddig elkészíteni, hogy már csak a frontendet kelljen rátenni
    - milyen technológiák és keretrendszerek lesznek felhasználva
    - pár képet a tervezett dizájnról (mockup jelleggel legyenek megtervezve a fontosabb nézetek, hol, mi és hogyan fog megjelenni)
        - javasolt ehhez Figma-t használni, de bármilyen egyéb alternatíva is megfelelő
- A féléves feladat nem elfogadható a specifikáció hiányában.