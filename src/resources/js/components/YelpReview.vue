<template>
    <div class="reviews-card bg-white border-2 border-red-600 rounded-lg shadow-lg mt-8">
        <div class="pt-4 flex justify-around">
            <div class="flex items-center">
                <img class="h-8" src="/img/yelp-logo.jpg" alt="Yelp" />
             </div>
        </div>  
        <div class="pt-4 pl-4 pb-4">
            <div class="w-12 h-12 inline-block">         
                <img class="w-full h-full pl-1 rounded-full" :src="data.user.image_url" :alt="data.user.profile_url"> 
            </div>
            <div class="w-2/3 inline-block align-top">
                <p class="pl-2 pr-2 inline-block font-bold break-normal text-sm">{{data.user.name}}</p>
                <p class="pl-2 pr-2 text-xs">{{ data.time_created | humanReadableDate }}</p>
            </div>
        </div>

        <div class="px-4 pb-4 flex">
            <svg v-for="i in 5" 
            :key="i" :class="i <= data.rating ? 'text-red-600' : 'text-gray-400'"  
            class="h-4 w-4 fill-current" viewBox="0 0 511 511">
            <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
			c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
			c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
			c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
			l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
			C511.56,208.649,513.033,202.688,511.267,197.258z"/>
            </svg>
        </div>  
        <p class="px-4 pb-4 text-justify text-sm">{{data.text}}</p>
    </div>
       
</template>

<script>
import moment from 'moment';
export default {
    props: {
        data: {
            type: Object,
            required: true
        },
    },
    filters: {
        humanReadableDate (date){
            return moment(date).format("MMMM d, YYYY");
        }
    }
    
}
</script>
