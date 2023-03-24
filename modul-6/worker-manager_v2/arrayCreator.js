import { Student } from './student.js'

async function createStudentArray() {
    
   let resp = await fetch('https://practiceapi.nikprog.hu/Student')
   let data = await resp.json()
   
   let studs = []
   data.forEach(item => {
      studs.push(new Student(
         item.id,
         item.name,
         item.isActive,
         item.birthYear,
         item.connections,
         item.completedCredits,
         item.activeSemesterCount,
         item.image
      ))
   })
   return studs

   return []
}

export { createStudentArray }