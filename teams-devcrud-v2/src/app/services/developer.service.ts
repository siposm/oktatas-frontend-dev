import { Injectable } from '@angular/core';
import { Developer } from '../models/developer';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

	developers: Developer[] = []

  constructor(private http: HttpClient) {
		this.load()
	}

	load(): void {
		this.http.get<Developer[]>("https://api.siposm.hu/getDevelopers").subscribe(x => {
			this.developers = x.map(x => Object.assign(new Developer(), x))
		})

		// A <Developer[]> rész csak a TS szintjén kezeli az elemeket így, futásidőben plain
		// object-ként lesznek kezelve, ezért logolva {} vs Developer{} eltérés lesz.
		// Ha osztállyal dolgozunk, akkor érdemes object.assign-nal vagy hasonlóval kezelni (feltételezve, hogy vannak metódusai stb.).
		// Ha csak sima adatstruktúraként van használva, jó az interfész is, és akkor nem kell assign.
	}

	create(developer: Developer): void {
		this.http.post("https://api.siposm.hu/createDeveloper", developer).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("CREATE request result: ", response)
        // add to local array
        this.developers.push(developer)
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("CREATE request result: ", error)
      }
    })
	}

	update(developer: Developer): void {
		this.http.put("https://api.siposm.hu/updateDeveloper", developer).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("UPDATE request result: ", response)
        // update in local array
        let index = this.developers.findIndex(x => x.id === developer.id)
        this.developers[index] = developer
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("UPDATE request result: ", error)
      }
    })
	}

	findById(id: string): Developer {
		return this.developers.find(dev => dev.id === id) as Developer
	}

	delete(developer: Developer): void {
		this.http.delete("https://api.siposm.hu/deleteDeveloper", {
      headers: new HttpHeaders({"Content-Type": "application/json"}),
      body: {
        id: developer.id
      }
    }).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("DELETE request result: ", response)
        // delete from local array
        this.developers = this.developers.filter(x => x.id !== developer.id)
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("DELETE request result: ", error)
      }
    })
	}
}
