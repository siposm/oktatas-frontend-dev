let students = [
    {
        name: "John Doe",
        neptunCode: "AAA123",
        subjects: [
            { credit: 6, name: "Programming I." },
            { credit: 3, name: "JS Development" },
            { credit: 2, name: "Analytics" },
        ]
    },
    {
        name: "Jane Doe",
        neptunCode: "BCM789",
        subjects: [
            { credit: 4, name: "Programming II." },
            { credit: 10, name: "Maths" },
        ]
    }
]


let ulElement = document.createElement("ul")

for (let i = 0; i < students.length; i++) {
    const element = students[i]

    let liElement = document.createElement("li")
    liElement.innerText = element.name + " - " + element.neptunCode
    
    ulElement.appendChild(liElement)

    let count = element.subjects.length
    console.log(element.name + " - " + element.neptunCode + ": " + count)
}

document.querySelector("#output").appendChild(ulElement)