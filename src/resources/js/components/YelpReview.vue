<template>
    <div class="reviews-card bg-white border-2 border-red-600 rounded-lg shadow-lg mt-8">
        <div class="px-4">
            <img class="w-5/6 object-center mb-4 static" src="/img/yelp-logo.jpg" alt="Yelp" />  
                <div class="w-12 h-12 inline-block">         
                    <img class="w-full h-full pl-1 rounded-full" :src="data.user.image_url" :alt="data.user.profile_url"> 
                </div>
                <div class="w-2/3 inline-block align-top">
                    <p class="pl-2 inline-block font-bold break-normal text-sm">{{data.user.name}}</p>
                    <p class="pl-2 text-xs">{{data.time_created}}</p>
                </div>
        </div>
        <div class="px-4 pb-4">
            <img class="w-1/2" src="/img/stars_placeholder.jpg"> 
            <p class="text-justify text-xs">{{data.text}}</p>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        },
    }
    
}
</script>
