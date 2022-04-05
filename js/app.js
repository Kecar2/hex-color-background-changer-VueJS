// Implementar solución aquí

Vue.createApp({
    data() {
        return {
            bgColor: '#FFFFFF',
            color: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
        }
    },
    methods: {

        updateRandomColor() {

        const color = this.generateRadomColor(); 

        return color;
        },

        generateRadomColor() {

        this.bgColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        }  
    }

}).mount('#app')


