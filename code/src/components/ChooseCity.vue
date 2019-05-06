<template>
    <div>
        <Navbar title='拉勾网' />
        <City path='/search' />
    </div>
</template>

<script>

import Navbar from './Navbar.vue';
import City from './City.vue';

export default {
    name:'chooseCity',
    components:{
        Navbar,
        City,
    }
}
</script>


