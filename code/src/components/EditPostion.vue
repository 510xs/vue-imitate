<template>
    <div class="user-edit">
        <Navbar title='设置定制信息' />
        <div class="edit-header">
            <edit-title editTitle="想找什么职位?" />
        </div>
        <div>
            <div class="rinputer">
                <input
                class="inputer"
                v-model="nowType"
                placeholder="输入你想定制的职位">
                <span
                class="button"
                @click="getPosType(nowType)">OK</span>
            </div>
        </div>
    </div>
</template>

<script>

import Navbar from './Navbar.vue';
import EditTitle from './EditTitle.vue';
import { mapMutations } from 'vuex';

export default {
    name:'editposition',
    data(){
        return ({
            nowType:null,
        })
    },
    components:{
        Navbar,
        EditTitle,
    },
    methods:{
        ...mapMutations({
            getPosType:'EDIT_POSITION_TYPE'
        })
    }
}
</script>

<style lang="less">
.user-edit{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 333;
}
.edit-header{
    height: 126px;
}
.rinputer{
    height: 50px;
    line-height: 50px;
    border: 1px solid #e8e8e8;
    display: flex;
    .inputer{
        width: 80%;
        margin-left: 23px;
        border: 0;
    }
    .button{
        width: 20%;
        height: 50px;
        border-left: 1px solid #e8e8e8;
        text-align: center;
    }
}
.button:active{
    
    background-color: #e8e8e8;
}
</style>


