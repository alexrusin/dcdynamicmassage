<template>
    <div class="flex items-center justify-center">
        <div class="bg-gray-300 border rounded-lg px-10 py-2 h-24">
            <div class="flex justify-center">
                <h2 class="font-semibold text-lg text-blue-800">Card Title</h2>
            </div>
            <div class="mt-2">
                <p class="text-blue-600">I am an example Vue component</p>
            </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>