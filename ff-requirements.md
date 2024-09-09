# Féléves Feladat Követelmények

    Sipos Miklós • Kliensoldali fejlesztés

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

- A féléves feladatot Angular keretrendszerben kell megoldani. UI szempontjából Bootstrap CSS keretrendszer  vagy Angular Material használható.
- Továbbá, használható minden olyan eszköz, keretrendszer, library melyeket az órák során érintettünk (pl. FontAwesome, Bootstrap Icons, CSS generátorok (grid, box shadow, gradient, coolors stb.)).
- Külső (a tananyagok alatt nem érintett) eszköz felhasználása esetén előzetes egyeztetés szükséges. Ennek oka, hogy a féléves feladatok nagyjából azonos szintűek legyenek, és külső egyéb eszközök felhasználása esetén ezt nehéz kordában tartani.

<br>
<br>
<br>

### Beadási határidő

- A féléves feladatokat a vizsgaidőszakban, a vizsgát megelőző nap délig lehet frissíteni. Azt követően új kód nem kerülhet a repository-ba.
- A határidőkre minden működő kód a `master branch`-be legyen bemergelve.

<br>
<br>
<br>

### Elvárások

#### Kötelező elemek

A féléves feladatban az alábbi elvárásokat kötelező megvalósítani a legalább elégséges szinthez.

| Elvárás | Pont |
| - | - |
| Angular segítségével készül el | 1 |
| használjon valamilyen tanult CSS keretrendszert (Bootstrap vagy Angular Material) | 1 |
| backend oldalról API végpontokkal kommunikál | 1 |
| legalább 9 komponenst használ | 1 |
| lehessen CRUD műveleteket végezni az entitások mindegyikén, valamint rendelkezzen komplexebb adatok megjelenítésével is (pl. non-CRUD műveletek eredményei) | 1 |
| legyen regisztráció és bejelentkezési funkció | 1 |
| tartalmazzon validációt az input mezőkre | 1 |
| használjon JWT token alapú authentikációt | 1 |
| pár kiemelt tartalomra / elemre készítsen saját CSS-t amely esztétikus és az alkalmazáshoz illeszkedik | 1 |
| GitHub-on vezetve, feature-branch alapú fejlesztést követve készül el, minimum 40 commit-on keresztül | 1 |

#### Opcionális elemek

A kötelező elemeken túl opcionálisan megvalósítható funkciókkal plusz pontok gyűjthetők, az alábbiak szerint. A fel nem sorolt elemeken túl saját ötleteket is elfogadok, ezeket előre egyeztetni szükséges a biztonság érdekében.

| Elvárás | Pont |
| - | - |
| legyenek különböző funkciók implementálva, melyekhez használja fel a tömb metódusokat (map, filter, reduce stb.) | 1 |
| GitHub-on Kanban board és ticket-ek (GitHub projects) alapján folyik a fejlesztés (vagy ennek megfelelő alternatívával pl. Jira board) | 1 |
| valamilyen publikus felületen elérhető a kész alkalmazás (pl. GitHub pages, Netlify, Vercel) | 1 |
| használ valamilyen geolokációs megoldást | 1 |
| használ valahol drag-n-drop funkciót | 1 |
| van benne dark/light mód támogatás | 1 |
| a meglévő backend mellett használ még pl. Firebase-t vagy annak megfelelő alternatívát | 1 |
| CAPTCHA-t használ valaminek a validálásához | 1 |
| olyan értesítési mechanizmust használ, amely segítségével a böngésző maga küld értesítést az alkalmazás használata alatt | 1 |
| rendelkezik különböző interaktív grafikonokkal/diagrammokkal, amelyek dinamikusan változnak az adatok alapján (pl. D3.js, Chart.js) | 1 |
| használ valamilyen saját algoritmust vagy adatszerkezetet (pl. gráf, back track search) | 1 |
| teljesen reszponzív megjelenítéssel rendelkezik (telefon-tablet-desktop) | 1 |
| rendelkezik 3rd party login belépési funkcióval (pl. Google, Facebook, Office 365) | 1 |
| használ valamilyen state management-et | 1 |
| valamilyen egyéb CSS keretrendszert használ (pl. Tailwind) akár meglévővel kombinálva, akár kizárólagosan | 1 |
| programozott módon teszteli a frontend komponenseket, funkciókat | 1 |
| valamilyen részét az alkalmazásnak valós időben mutatja SignalR segítségével | 1 |

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
- GitFlow használata szükséges, melyben `feature/my-new-feature` elnevezési konvenció alapján kell létrehozni a `feature` brancheket, leágazva a `develop` branch-ből. A branch-ek ne legyenek törölve a mergelések után.
- A leadáskor minden működő kód a `master` branch-be legyen bemergelve.
