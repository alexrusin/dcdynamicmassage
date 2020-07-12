<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 xl:mx-6">
        <coupon v-for="coupon in coupons" :data="coupon" :key="coupon.id"></coupon>
    </div>    
</template>

<script>
import Coupon from './Coupon';
export default {
    components: {
        Coupon
    },

    data() {
        return {
            coupons: [
                {
                    id: 1,
                    imageUrl: '/img/sports_massage_coupon.png',
                    tagLine: '$45 first visit sports massage',
                    description: 'Receive $45 off you first sports massage visit.  Coupon must be presented at the time of purchase. Call 818-257-9496 to schedule an appointment.',
                    promoCode: 'SPTMSG01',
                    expiresAt: ''
                },
                {
                    id: 2,
                    imageUrl: '/img/massage_sauna_coupon.jpeg',
                    tagLine: 'Infrared Sauna plus Massage Session for ONLY $60',
                    description: '20 min. Infrared Sauna Session + 40 min. Massage Session for ONLY $60. Coupon must be presented at the time of purchase. Call 818-257-9496 to schedule an appointment. Available at TLC Location only.',
                    promoCode: 'SNMSG02',
                    expiresAt: ''
                },
                {
                    id: 3,
                    imageUrl: '/img/infrared_sauna_coupon.jpg',
                    tagLine: 'Infrared Sauna Packages starting at $20',
                    description: 'Coupon must be presented at the time of purchase. Call 818-257-9496 to schedule an appointment. Available at TLC Location only.',
                    promoCode: 'SPTMSG01',
                    expiresAt: ''
                }
            ]

        }
    }
}
</script>