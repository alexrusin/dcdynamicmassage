<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 xl:mx-24">
        <yelp-review v-for="review in reviews" :data="review" :key="review.id"></yelp-review>
    </div>    
</template>

<script>
import YelpReview from './YelpReview';
export default {
    components: {
        YelpReview
    },

    data() {
        return {
            reviews: [
                {
                    id: 1,
                    rating: 5,
                    user: {
                        profile_url: 'https://www.yelp.com/user_details?userid=W8UK02IDdRS2GL_66fuq6w',
                        image_url: 'https://s3-media3.fl.yelpcdn.com/photo/iwoAD12zkONZxJ94ChAaMg/o.jpg',
                        name: "Ella A."
                        },
                    text: 'Went back again to this place since the last time i visited the bay area 5 months ago, and nothing has changed. Still the sketchy Mission, Still the cashier...',
                    time_created: '2016-08-29 00:41:13',
                    url: 'https://www.yelp.com/biz/la-palma-mexicatessen-san-francisco?hrid=hp8hAJ-AnlpqxCCu7kyCWA&adjust_creative=0sidDfoTIHle5vvHEBvF0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=0sidDfoTIHle5vvHEBvF0w'
                },
                {
                    id: 2,
                    rating: 5,
                    user: {
                        profile_url: 'https://www.yelp.com/user_details?userid=W8UK02IDdRS2GL_66fuq6w',
                        image_url: 'https://s3-media3.fl.yelpcdn.com/photo/iwoAD12zkONZxJ94ChAaMg/o.jpg',
                        name: "Ella Amarella"
                        },
                    text: 'Went back again to this place since the last time i visited the bay area 5 months ago, and nothing has changed. Still the sketchy Mission, Still the cashier...',
                    time_created: '2016-08-29 00:41:13',
                    url: 'https://www.yelp.com/biz/la-palma-mexicatessen-san-francisco?hrid=hp8hAJ-AnlpqxCCu7kyCWA&adjust_creative=0sidDfoTIHle5vvHEBvF0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=0sidDfoTIHle5vvHEBvF0w'
                },
                {
                    id: 3,
                    rating: 5,
                    user: {
                        profile_url: 'https://www.yelp.com/user_details?userid=W8UK02IDdRS2GL_66fuq6w',
                        image_url: 'https://s3-media3.fl.yelpcdn.com/photo/iwoAD12zkONZxJ94ChAaMg/o.jpg',
                        name: "A Guy with a Freaking Long Name"
                        },
                    text: 'Went back again to this place since the last time i visited the bay area 5 months ago, and nothing has changed. Still the sketchy Mission, Still the cashier...',
                    time_created: '2016-08-29 00:41:13',
                    url: 'https://www.yelp.com/biz/la-palma-mexicatessen-san-francisco?hrid=hp8hAJ-AnlpqxCCu7kyCWA&adjust_creative=0sidDfoTIHle5vvHEBvF0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=0sidDfoTIHle5vvHEBvF0w'
                }
            ]

        }
    }
}
</script>