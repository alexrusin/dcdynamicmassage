<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 xl:mx-6">
        
        <coupon v-for="coupon in coupons" :data="coupon" :key="coupon._id" :href="'/coupons/' + coupon._id"></coupon>
       
    </div>    
</template>

<script>
import Coupon from './Coupon';
import axios from 'axios';
export default {
    components: {
        Coupon
    },

    created() {
        axios.get('/api/coupons')
            .then(({data}) => {
                this.coupons = data.coupons;
            })
            .catch((error) => {
                console.log(error);
            })
    },

    data() {
        return {
           coupons: []
        }
    }
}
</script>