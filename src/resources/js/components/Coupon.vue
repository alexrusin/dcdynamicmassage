<template>
    <a class="block promo-card bg-white border-2 border-gray-600 border-dashed shadow-lg mt-8">
        <div class="p-4 flex justify-around">
            <div class="flex items-center">
                <div class="-ml-1 mr-1">
                    <img class="h-4 md:h-6" src="/img/logo.png" alt="DC Dynamic Massage" />
                </div>
                <div>
                    <div class="logo-text font-bold md:text-lg">DC Dynamic Massage</div>
                </div>
            </div>
        </div>
        <div class="relative" style="padding-bottom: 40%;">
            <img class="absolute h-full w-full object-cover" :src="data.imageUrl" :alt="data.tagLine">
        </div>
        <div class="p-6 text-center">
            <p class="uppercase font-bold text-sm md:text-lg">{{data.tagLine}}</p>
        </div>
        <p class="px-4 text-sm md:text-base" v-if="fullText">{{data.description}}</p>
        <div v-if="fullText" class="promo-card-footer bg-gray-300 mt-6 py-2">
            <p class="px-4 py-2 font-semibold text-sm">Use promo code: {{data.promoCode}}</p>
            <p v-if="data.expiresAt" class="text-red-600 px-4 py-2 font-semibold text-sm">Expires: {{data.expiresAt}}</p>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        },

        fullText: {
            type: Boolean,
            default: false
        },
    }
    
}
</script>
<style scoped>
.logo-text {
  color: #74d0e1;
}
</style>