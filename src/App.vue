<template>
    <div>
        <h1>App组件</h1>
        <my-fenye></my-fenye>
    </div>
</template>
<style>

</style>
<script>
import Fenye from './components/FenYe.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        "my-fenye":Fenye
    }
}
</script>
