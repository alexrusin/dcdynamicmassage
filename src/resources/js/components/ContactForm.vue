<template>
  <div>
    <form class="w-full max-w-3xl mx-auto mt-4" @keydown="form.errors.clear($event.target.name)" @change="form.errors.clear($event.target.name)">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >First Name (Required)</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            required
            v-model="form.first_name"
            name="first_name"
          />
          <p class="text-red-500 text-xs italic" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >Last Name</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            v-mode="form.last_name"
            name="last_name"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-email"
          >E-mail (Required)</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="email"
            required
            v-model="form.email"
            name="email"
          />
          <p class="text-red-500 text-xs italic" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-phone"
          >Phone</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-phone"
            type="text"
            v-model="form.phone"
            name="phone"
            v-mask="'###-###-####'"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="message"
          >Message (Required)</label>

          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="subject"
            type="hidden"
            placeholder="Sports massage"
            name="subject"
            v-model="form.subject"
          />

          <textarea
            class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            required
            name="message"
            v-model="form.message"
          ></textarea>
           <p class="text-red-500 text-xs italic" v-if="form.errors.has('message')" v-text="form.errors.get('message')"></p>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button
            class="shaddow font-semibold rounded px-4 py-2 bg-blue-500 text-white uppercase hover:bg-gray-500"
            type="button"
            @click="onSubmit"
          >Send</button>
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>
  </div>
</template>

<script>
import Form from '../utils/Form';
import {mask} from 'vue-the-mask'
export default {
     directives: {mask},
     data() {
        return {
            form: new Form({
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                subject: '',
                message: ''
            }),
        };
    },

    methods: {
        onSubmit() {
            this.form.post('/api/send-form')
                .then((response) => {
                    window.location.href('/contact-form-submitted')
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
};
</script>