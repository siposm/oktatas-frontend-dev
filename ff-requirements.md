# Féléves Feladat Követelmények

    Kliensoldali Fejlesztés • 2023 tavaszi félév • Sipos Miklós

<br>
<br>
<br>

### Téma
- A féléves feladatban valamilyen entitásokat menedzselő alkalmazást kell készíteni a lentebb található elvárásoknak eleget téve, a félév tananyagait felhasználva. Ebbe beleszámítanak a CRUD funkciók, komplexebb lekérdezések is, melyeket akár a kliens oldalon is fel lehet dolgozni, de az is rendben van, ha magát a kalkulációt a szerveroldal végzi el és a kliens csak megjeleníti.
- Példa ötletek:
    - Egyetemi tanulmányokat menedzselő rendszer. Hallgatókat, tárgyakat és oktatókat lehet kezelni benne. Adott hallgatóhoz lehet hozzárendelni aktuálisan (vagy korábban) hallgatot tárgyakat, ezeken keresztül teljesített krediteket számolni. A tárgyakhoz oktatókat, kreditértékeket, terheléseket lehet hozzárendelni.
    - Adatmegjelenítő alkalmazás, amelyben valamilyen forrásból származó adatokat lehet megjeleníteni, rendszerezni, szűrni, aggregálni. Az adatok származhatnak például különböző megyékben található mérőberendezésekből (hőmérséklet, páratartalom stb.). Az adatok nem szükséges, hogy valós adatok legyenek, generálhatók is.
    - Fórum alkalmazás, amelyben regisztrált felhasználók szólhatnak hozzá különböző témákhoz, írhatnak ki új témákat, értékelhetik azokat. Nem regisztrált felhasználók csak limitált mértékben férhetnek hozzá ezekhez.
    - Zenegyűjtemény alkalmazás, amelyben különböző külsős forrásból származó zenéket lehet megosztani egymással. A felhasználók saját profiljaikon fel tudják tüntetni ezeket, illetve csoportokat lehet létrehozni a rendszerben ahova a felhasználók egymással meg tudják osztani ezeket. A külső források lehetnek pl. YouTube, Spotify vagy SoundCloud linkek.

<br>
<br>
<br>

### Specifikáció
- A specifikációt a repository gyökerében `SPEC.md` néven kell létrehozni, a 10. szorgalmi hétig.
- A dokumentumnak tartalmaznia kell:
    - a készítendő rendszer 5-10 mondatos leírását
    - funkciólistát, végpont listát (mit fog tudni a rendszer, mi az elvárás)
        - a backend API végpontokat érdemes eddig elkészíteni, hogy már csak a frontendet kelljen rátenni
    - milyen technológiák és keretrendszerek lesznek felhasználva (eddig ezt el kell tudni dönteni)
    - pár képet a tervezett dizájnról (mockup jelleggel legyenek megtervezve a fontosabb nézetek, hol, mi és hogyan fog megjelenni)
        - javasolt ehhez Figma-t használni, de bármilyen egyéb alternatíva is megfelelő
- A féléves feladat **nem elfogadható** a specifikáció hiányában!

<br>
<br>
<br>

### Technológiák felhasználása
- A féléves feladatban a felhasználni kívánt technológia az alábbiakból választható: Vue vagy Angular, illetve CSS keretrendszerben Bootstrap vagy Angular Material (lásd bővebben az [Elvárások](#elvárások) fejezetet).
- Továbbá használható minden olyan eszköz, keretrendszer, library melyeket az órák során érintettünk (pl. FontAwesome, CSS generátorok (box shadow, gradient, coolors stb.)).
- Külső (a tananyagok alatt nem érintett) eszköz felhasználása esetén előzetes egyeztetés szükséges. Ennek oka, hogy a féléves feladatok nagyjából azonos szintűek legyenek, és külső egyéb eszközök felhasználása esetén ezt nehéz kordában tartani.

<br>
<br>
<br>

### Beadási határidő
- Mérnökinformatikus képzés esetén:
    - A féléves feladatokat a vizsgaidőszakban, a vizsgát megelőző nap délig lehet frissíteni. Azt követően új kód nem kerülhet a repository-ba.
- Üzemmérnök-informatikus képzés esetén:
    - A féléves feladatokat a 14. héten a labor idejében kell bemutatni. A kódokat aznap reggel 8:00-ig lehet frissíteni, ezt követően új kód nem kerülhet a repository-ba.
- A határidőkre minden működő kód a `master branch`-be legyen bemergelve.

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
| legalább 7 komponenst használ | 1 |
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
| GitHub-on valamilyen CI/CD pipeline (GitHub actions) megoldást használ (pl. tesztek automatikus futtatása, webhook-ok hívása) <br> *Ehhez a repository beállításain állítanom kell. Ha valaki igényt tart erre, kérem jelezze külön.* | 1 |
| használ valamilyen state management-et | 1 |
| valamilyen egyéb CSS keretrendszert használ (pl. Tailwind) akár meglévővel kombinálva, akár kizárólagosan | 1 |
| teszteli a frontend komponenseket, funkciókat | 1 |
| valamilyen részét az alkalmazásnak valós időben mutatja SignalR segítségével | 1 |
| GitHub-on Kanban board és ticket-ek (GitHub projects) alapján folyik a fejlesztés (vagy ennek megfelelő alternatívával pl. Jira board) | 1 |

<br>
<br>
<br>

### Értékelés

| Pont | Jegy |
| - | - |
| 0-9 | elégtelen |
| 10 | elégséges |
| 11 | elégséges |
| 12 | közepes |
| 13 | közepes |
| 14 | jó |
| 15 | jó |
| 16+ | jeles |



<br>
<br>
<br>

### Korábbi munkák felhasználása
- A féléves feladatban a Szerveroldali fejlesztés előzménytárgy anyagai felhasználhatók. Ha a tárgyon az API-k nem készültek el, azokat a mostani félévben kell elkészíteni és azokat kell felhasználni a kliens alkalmazásból.
- Ha teljesen új projektet szeretne valaki kezdeni, erre is van lehetőség, azonban ebben az esetben is ASP-ben kell elkészíteni a backend oldalt.

<br>
<br>
<br>

### Kód menedzsment
- A félélves feladatot GitHub-on, a neki megfelelő repository-ban kell vezetni. Ehhez mindenkinek létrehozok egy repository-t és a GitHub userét hozzáadom. Ezen repository-kat [itt találjátok](https://github.com/frontend-dev-siposm) (mindenki csak a sajátját látja).
- A félév folyamán a kódot fokozatosan kell fejleszteni, commitolni.
- Az elvárt minimum commit szám: 40
- Multibranch használta szükséges, melyben `feature/xy` alapon kell létrehozni a brancheket. A branch-ek ne legyenek törölve a mergelések után.
- A leadáskor minden működő kód a `master branch`-be legyen bemergelve.
