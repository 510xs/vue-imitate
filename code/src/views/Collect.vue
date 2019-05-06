<template>
    <div>
        <!-- 收藏 -->
        <Navbar title="我的收藏" />
        <CompanyList 
          msg='test ok' 
          :leep='setList'
          :isShow='setIsShow' />
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import { mapGetters} from 'vuex';
import CompanyList from '../components/CompanyList.vue';
import { Row, Col} from 'vant';

export default {
    name:'collect',
    props:{

    },
    components:{
        Navbar,
        CompanyList,
    },
    computed:{
        ...mapGetters(['setList','setIsShow'])
    }
}
</script>

