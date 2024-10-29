import { Worker } from './worker.js'

function createWorkerArray() {

   let w = []

   for (let i = 0; i < workers.length; i++) {
      w.push(new Worker(
         workers[i].Job,
         workers[i].Age,
         workers[i].Name
      ))
   }

   return w
}

export { createWorkerArray }




// this could come from an API endpoint or whatever...
let workers = [
   {
      "Job": "teacher",
      "Age": 72,
      "Name": "Dr. Szabó Gábor"
   },
   {
      "Job": "university instructor",
      "Age": 54,
      "Name": "Nagy Tibor István"
   },
   {
      "Job": "teacher",
      "Age": 11,
      "Name": "Dr. Cserjés Ágota"
   },
   {
      "Job": "technical assistant",
      "Age": 39,
      "Name": "Klespitzné Kovács Krisztina Rita"
   },
   {
      "Job": "technical assistant",
      "Age": 47,
      "Name": "Légrádi Gábor"
   },
   {
      "Job": "technical assistant",
      "Age": 42,
      "Name": "Dr. Kutor László"
   },
   {
      "Job": "technical assistant",
      "Age": 50,
      "Name": "Mihályi Martin"
   },
   {
      "Job": "teacher",
      "Age": 35,
      "Name": "Kelemen József"
   },
   {
      "Job": "teacher",
      "Age": 48,
      "Name": "Maróthy Zita"
   },
   {
      "Job": "system operator",
      "Age": 13,
      "Name": "Dr. Csink László"
   },
   {
      "Job": "system operator",
      "Age": 80,
      "Name": "Sántáné-Tóth Edit"
   },
   {
      "Job": "system operator",
      "Age": 9,
      "Name": "Cserfalvi Annamária"
   },
   {
      "Job": "registrar office worker",
      "Age": 82,
      "Name": "Tanos Katalin"
   },
   {
      "Job": "registrar office worker",
      "Age": 69,
      "Name": "Somlyai László"
   },
   {
      "Job": "registrar office worker",
      "Age": 93,
      "Name": "Zsíros Tímea"
   },
   {
      "Job": "registrar office worker",
      "Age": 45,
      "Name": "Lovas István"
   },
   {
      "Job": "teacher",
      "Age": 26,
      "Name": "Prof. Dr. Galántai Aurél"
   },
   {
      "Job": "teacher",
      "Age": 70,
      "Name": "Dr. Stojcsics Dániel"
   },
   {
      "Job": "teacher",
      "Age": 28,
      "Name": "Gulácsi Gábor"
   },
   {
      "Job": "senior lecturer",
      "Age": 49,
      "Name": "Mezei József"
   },
   {
      "Job": "senior lecturer",
      "Age": 76,
      "Name": "Dr. Szenes Katalin"
   },
   {
      "Job": "senior lecturer",
      "Age": 17,
      "Name": "Dóczi Roland"
   },
   {
      "Job": "associate professor",
      "Age": 23,
      "Name": "Dr. Fleiner Rita"
   },
   {
      "Job": "associate professor",
      "Age": 75,
      "Name": "Prof. Dr. Szeidl László"
   },
   {
      "Job": "associate professor",
      "Age": 41,
      "Name": "Kovács András"
   },
   {
      "Job": "research fellow",
      "Age": 95,
      "Name": "Tony Stark"
   },
   {
      "Job": "research fellow",
      "Age": 36,
      "Name": "Kertész Gábor"
   },
   {
      "Job": "research fellow",
      "Age": 71,
      "Name": "Susik Márta"
   },
   {
      "Job": "teacher",
      "Age": 27,
      "Name": "Garaguly Zoltán"
   },
   {
      "Job": "professor emeritus",
      "Age": 7,
      "Name": "Bácskai Zsuzsanna"
   },
   {
      "Job": "professor emeritus",
      "Age": 46,
      "Name": "Léczfalvy Ádám"
   },
   {
      "Job": "professor emeritus",
      "Age": 68,
      "Name": "Sipos Miklós"
   },
   {
      "Job": "teacher",
      "Age": 58,
      "Name": "Pintér Gergő"
   },
]