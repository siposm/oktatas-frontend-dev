export default {
    props: ['text', 'type', 'tags'],

    methods: {
        toUpper: function (tag) {
            return tag.toUpperCase()
        },
        deleteTodo: function (todoText) {

            // deletion will be based on text --> NOT GOOD!!! Id should be used, but for the moment it's ok.

            for (let i = 0; i < this.$parent.todos.length; i++) {
                if (this.$parent.todos[i].text === todoText)
                    this.$parent.todos.splice(i,1)
            }

            // TODO add API call for REMOVE (deletion)
        }
    },

    template: `

        <div>
            <div class="alert alert-dismissible fade show" v-bind:class="type" role="alert">
                {{ text }}
                <div>
                <template v-for="tag in tags">
                    <span class="badge badge-secondary mr-1">
                        {{ toUpper(tag) }}
                    </span>
                </template>
                </div>
                <button @click="deleteTodo(text)" type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>

    `
}