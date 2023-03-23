import { Student } from './student.js'

function createStudentArray() {
    
    let w = []

    for (let i = 0; i < students.length; i++) {
        w.push(new Student(
            students[i].NeptunID,
            students[i].Name,
            students[i].IsActive,
            students[i].BirthYear,
            students[i].CompletedCredits,
            students[i].ActiveSemesterCount,
            students[i].Image
        ))
    }

    return w
}

export { createStudentArray }






// this could come from an API endpoint or whatever...
let students = [
   {
      "NeptunID": "AAA111",
      "Name": "Simona",
      "IsActive": false,
      "BirthYear": 1996,
      "Connections": 2487,
      "CompletedCredits": 24,
      "ActiveSemesterCount": 18,
      "Image": "https://randomuser.me/api/portraits/women/1.jpg"
   },
   {
      "NeptunID": "BBB222",
      "Name": "Brittany",
      "IsActive": false,
      "BirthYear": 1992,
      "Connections": 218,
      "CompletedCredits": 81,
      "ActiveSemesterCount": 9,
      "Image": "https://randomuser.me/api/portraits/women/50.jpg"
   },
   {
      "NeptunID": "CCC333",
      "Name": "PewDiePie",
      "IsActive": true,
      "BirthYear": 2001,
      "Connections": 1807,
      "CompletedCredits": 116,
      "ActiveSemesterCount": 6,
      "Image": "https://randomuser.me/api/portraits/men/60.jpg"
   },
   {
      "NeptunID": "DDD444",
      "Name": "Jill",
      "IsActive": true,
      "BirthYear": 1992,
      "Connections": 2340,
      "CompletedCredits": 42,
      "ActiveSemesterCount": 17,
      "Image": "https://randomuser.me/api/portraits/women/31.jpg"
   },
   {
      "NeptunID": "EEE555",
      "Name": "Joe",
      "IsActive": true,
      "BirthYear": 1988,
      "Connections": 393,
      "CompletedCredits": 17,
      "ActiveSemesterCount": 11,
      "Image": "https://randomuser.me/api/portraits/men/53.jpg"
   },
   {
      "NeptunID": "FFF111",
      "Name": "Robert",
      "IsActive": true,
      "BirthYear": 1987,
      "Connections": 526,
      "CompletedCredits": 183,
      "ActiveSemesterCount": 15,
      "Image": "https://randomuser.me/api/portraits/men/44.jpg"
   },
   {
      "NeptunID": "FFF222",
      "Name": "Smith",
      "IsActive": true,
      "BirthYear": 1988,
      "Connections": 280,
      "CompletedCredits": 210,
      "ActiveSemesterCount": 3,
      "Image": "https://randomuser.me/api/portraits/men/22.jpg"
   },
   {
      "NeptunID": "FFF333",
      "Name": "Brad",
      "IsActive": true,
      "BirthYear": 1989,
      "Connections": 4340,
      "CompletedCredits": 167,
      "ActiveSemesterCount": 4,
      "Image": "https://randomuser.me/api/portraits/men/1.jpg"
   },
   {
      "NeptunID": "ASD123",
      "Name": "Mike",
      "IsActive": true,
      "BirthYear": 1998,
      "Connections": 964,
      "CompletedCredits": 44,
      "ActiveSemesterCount": 14,
      "Image": "https://randomuser.me/api/portraits/men/11.jpg"
   },
   {
      "NeptunID": "BBF334",
      "Name": "Steve",
      "IsActive": true,
      "BirthYear": 1990,
      "Connections": 2946,
      "CompletedCredits": 202,
      "ActiveSemesterCount": 13,
      "Image": "https://randomuser.me/api/portraits/men/23.jpg"
   },
   {
      "NeptunID": "PDS456",
      "Name": "Stewie",
      "IsActive": true,
      "BirthYear": 1988,
      "Connections": 2839,
      "CompletedCredits": 110,
      "ActiveSemesterCount": 5,
      "Image": "https://randomuser.me/api/portraits/men/42.jpg"
   },
   {
      "NeptunID": "OLO781",
      "Name": "Bart",
      "IsActive": true,
      "BirthYear": 1980,
      "Connections": 3924,
      "CompletedCredits": 70,
      "ActiveSemesterCount": 0,
      "Image": "https://randomuser.me/api/portraits/men/66.jpg"
   },
   {
      "NeptunID": "AXD123",
      "Name": "Caroline",
      "IsActive": true,
      "BirthYear": 1998,
      "Connections": 188,
      "CompletedCredits": 51,
      "ActiveSemesterCount": 14,
      "Image": "https://randomuser.me/api/portraits/women/10.jpg"
   },
   {
      "NeptunID": "BXF334",
      "Name": "Sonia",
      "IsActive": true,
      "BirthYear": 1990,
      "Connections": 853,
      "CompletedCredits": 157,
      "ActiveSemesterCount": 11,
      "Image": "https://randomuser.me/api/portraits/women/71.jpg"
   },
   {
      "NeptunID": "PSD456",
      "Name": "Ernie",
      "IsActive": true,
      "BirthYear": 1988,
      "Connections": 2997,
      "CompletedCredits": 63,
      "ActiveSemesterCount": 17,
      "Image": "https://randomuser.me/api/portraits/men/8.jpg"
   },
   {
      "NeptunID": "OLX781",
      "Name": "Homer",
      "IsActive": true,
      "BirthYear": 1980,
      "Connections": 2987,
      "CompletedCredits": 9,
      "ActiveSemesterCount": 3,
      "Image": "https://randomuser.me/api/portraits/men/81.jpg"
   }
]