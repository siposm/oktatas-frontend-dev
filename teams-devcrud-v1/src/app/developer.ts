import { Guid } from 'guid-typescript' /* npm i guid-typescript */

export class Developer {
  id: string = Guid.create().toString()
  name: string = ""
  job: string = ""
  age: number | null = null
  salary: number | null = null

  resetProperties() {
    this.id = Guid.create().toString()
    this.name = ""
    this.job = ""
    this.age = null
    this.salary = null
  }

  getFormattedSalary() {
    return this.salary!.toLocaleString("hu-HU", {
      style: "currency",
      currency: "HUF",
      maximumFractionDigits: 0,
    })
  }
}
