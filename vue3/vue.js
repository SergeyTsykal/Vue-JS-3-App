const App = {
    data() {
        return {
            notes: [],
            input: ''
        }
    },
    methods: {
      onAdd() {
         if (this.input.length > 3) {
            this.notes.push(this.input)
            this.input = ''
         }
      },
        onRemove(idx) {
          this.notes.splice(idx, 1)
      }
    }
}

Vue.createApp(App).mount('#app')


