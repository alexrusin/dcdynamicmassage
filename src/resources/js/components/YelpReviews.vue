<template>
    <div class="flex justify-center">
        <div class="lg:w-5/6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
            <yelp-review v-for="review in reviews" :data="review" :key="review.id"></yelp-review>
        </div>
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
            "id": "OFBMk7aPnb8_Ej_5bhNY8Q",
            "url": "https://www.yelp.com/biz/dc-dynamic-massage-woodland-hills?adjust_creative=3VcY57J7gmSNg0JJcGMjTw&hrid=OFBMk7aPnb8_Ej_5bhNY8Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=3VcY57J7gmSNg0JJcGMjTw",
            "text": "David is amazing! He has a great understanding of the kinesiology of the body. Really works on getting your muscles to relax. I came in with sciatica pain...",
            "rating": 5,
            "time_created": "2018-02-23 17:07:17",
            "user": {
                "id": "OTCgRfMMM5QtqffLJzbZeQ",
                "profile_url": "https://www.yelp.com/user_details?userid=OTCgRfMMM5QtqffLJzbZeQ",
                "image_url": "https://s3-media2.fl.yelpcdn.com/photo/qVeKsjFQ0G0U0kB6l0NEHQ/o.jpg",
                "name": "Karie F."
            }
        },
        {
            "id": "HksKMueymG-mAQFnESMlww",
            "url": "https://www.yelp.com/biz/dc-dynamic-massage-woodland-hills?adjust_creative=3VcY57J7gmSNg0JJcGMjTw&hrid=HksKMueymG-mAQFnESMlww&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=3VcY57J7gmSNg0JJcGMjTw",
            "text": "This is exactly what i am looking for. Sports massage. David was very upfront about scheduling and prompt even when he is booked. I came in because of my...",
            "rating": 5,
            "time_created": "2019-04-13 13:47:34",
            "user": {
                "id": "UR4bSAvAnAmSwuY6tYeRNw",
                "profile_url": "https://www.yelp.com/user_details?userid=UR4bSAvAnAmSwuY6tYeRNw",
                "image_url": "https://s3-media3.fl.yelpcdn.com/photo/uXXoHbNTgZzYblLeSzoxPQ/o.jpg",
                "name": "Kirk S."
            }
        },
        {
            "id": "xKtvHdmT1M-CSkwE-RpSzw",
            "url": "https://www.yelp.com/biz/dc-dynamic-massage-woodland-hills?adjust_creative=3VcY57J7gmSNg0JJcGMjTw&hrid=xKtvHdmT1M-CSkwE-RpSzw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=3VcY57J7gmSNg0JJcGMjTw",
            "text": "So glad to have finally found a massage therapist who knows his stuff. I found this place on Groupon and decided to give it a try. I went for my first...",
            "rating": 5,
            "time_created": "2018-08-25 12:20:42",
            "user": {
                "id": "4bRLc9_8XzvfbrIQLVSRkw",
                "profile_url": "https://www.yelp.com/user_details?userid=4bRLc9_8XzvfbrIQLVSRkw",
                "image_url": "https://s3-media1.fl.yelpcdn.com/photo/s-6y_JlA4zER-R4MSAmHdQ/o.jpg",
                "name": "Chris P."
            }
        }
    ]

        }
    }
}
</script>