<template>
  <v-container>

    <v-card class="pa-5">
      <v-card-title>
        Add Movies
      </v-card-title>
      <Form @submit="onSubmit" :validation-schema="schema">
        <v-row>
          <v-col cols="6">
            <Field v-model="title" name="title" class="style_iput" type="text"  placeholder="title .." />
            <ErrorMessage name="title" class="error-message" />
          </v-col>
          <v-col cols="6">
            <Field  v-model="actors_number" name="actors_number" class="style_iput" type="number"  placeholder="actors_number .." />
            <ErrorMessage name="actors_number" class="error-message" />
          </v-col>
        </v-row>
        <v-row>
          <div col="6" class="v-col-md-6 v-col-sm-6">

           <!-- <date-picker
              v-model:value="date_"
              value-type="format"
              format="YYYY"
              type="year"
              placeholder="Select date"
              class="w-100 pt-2 pb-2 pa-20"
            ></date-picker>
            <ErrorMessage v-if="date_ == null" name="date_" class="error-message" />-->
            <Field  v-model="date_year" name="date_year" class="style_iput" type="date"  placeholder="date .." />
            <ErrorMessage name="date_year" class="error-message" />
          </div>










        </v-row>
        <v-row class="justify-center align-content-center">
          <v-btn size="large" color="#1284e7" type="submit">Add</v-btn>
        </v-row>
      </Form>
    </v-card>

  </v-container>
</template>

<script>
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import { Form, Field, ErrorMessage } from 'vee-validate';
import {  useRouter } from 'vue-router'
import { useStore } from 'vuex';
import {MoviesModel} from '../../model/Movies.model'
import * as yup from 'yup';
const store = useStore();

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    DatePicker
  },
  data() {
    return {

      actors_number:null,
      title:null,
      date_: null,
      show_:false,
      date_year: null,

    };
  },
  methods: {
    yearInput({ year }) {
      this.date_year = year;
    },
    onSubmit(values) {
      this.show_=true
      console.log(JSON.stringify(values));
      this.$store.dispatch( `Movies/addMovie`,
        new MoviesModel( 0 ,values.title, this.date_,values.actors_number )).then((res)=>
      {
        this.$router.push('/Movies')
      })




    },

  },
  computed: {
    schema() {
      return yup.object({
        title: yup.string().required(),
        actors_number: yup.number().required(),
        date_year:yup.date().required()
      });
    },
  },
  mounted() {
    this.date_=new Date().getFullYear()
  }
};
</script>

<style scoped>
.error-message {
  color: red !important;
}

.style_iput {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.style_iput:focus {
  border: 1px solid #1284e7 !important;
  outline: none;
}

.style_iput:hover {
  border: 1px solid #1284e7 !important;
}
</style>
