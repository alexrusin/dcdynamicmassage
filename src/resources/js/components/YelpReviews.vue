<template>
    <div class="flex justify-center">
        <div class="lg:w-5/6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
            <yelp-review v-for="review in reviews" :data="review" :key="review.id"></yelp-review>
        </div>
    </div>
</template>

<script>
import YelpReview from './YelpReview';
import axios from 'axios';

export default {
    components: {
        YelpReview
    },

    created() {
        axios.get('/api/reviews')
            .then(({data}) => {
                this.reviews = data.reviews;
            })
            .catch((error) => {
                console.log(error);
            })
    },

    data() {
        return {
            reviews: []

        }
    }
}
</script>