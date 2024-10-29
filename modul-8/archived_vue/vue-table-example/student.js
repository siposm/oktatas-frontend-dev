export default {
    props: ['name', 'id', 'birthyear'],
    
    // birthyear must be all lower case (or any other prop)
    
    methods: {
        hello() {
            console.log(">>", this.name, this.id)
        }
    },

    template: `
        <tr @click="hello()">
            <td>
                {{ name }}
            </td>
            <td>
                {{ id }}
            </td>
            <td>
                {{ birthyear }}
            </td>
        </tr>
    `
}