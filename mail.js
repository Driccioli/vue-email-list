Vue.config.devtools=true;

new Vue({
    el:"#app",
    data:{
        mails:[]
    },
    created(){
        this.getRandomMail(10);
    },
    methods:{
        getRandomMail(times){
            for(var i=1; i<=times; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {  // appena il server ci risponde, si attiva questa funzione
                    console.log(response.data.response);
                    console.log(this);
                    this.mails.push(response.data.response);
                });
        }
            }
            
    }
})