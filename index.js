new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

new Vue({
    el: '#app2',
    data: {
        message: new Date().toLocaleDateString()
    }
});

new Vue({
    el: '#app4',
    data: {
        todos: [
            { text: "msg1" },
            { text: "msg2" },
            { text: "msg3" },
        ]
    }
});

new Vue({
    el: '#app5',
    data: {
        message5: 'Hello',
    },
    methods: {
        reverseMessage: () => {
            this.message5 = this.message5 + ' World';
        }
    }
});
