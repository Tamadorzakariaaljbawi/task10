<template>
<v-container>
  {{date_form}}

{{gettersActors}}

    <v-form ref="form_add_user" class=""  v-model="form_add_user"    @submit.prevent="validate()">
      <v-card class="pa-9">
        <h2>
          Add Actor
        </h2>
        <br />
      <v-row>
        <v-col>

          <v-text-field v-model="name" :rules="nameRules"     required
                        :readonly="loading"
                        clearable label="name"   variant="outlined"></v-text-field>
        </v-col>
        <v-col>

          <v-text-field  v-model="age" clearable label="age"  :rules="agedRules"  variant="outlined"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>


          <v-text-field
            clearable
            label="date"
            variant="outlined"
            v-model="date_for"
            :rules="date_Rules"
            @click="dialog = true"
          ></v-text-field>


        </v-col>
        <v-col>

          <v-select
            label="role"
            v-model="role"
            :items="gettersRoles"
            :rules="role_Rules"

            multiple
            variant="outlined"
          ></v-select>
        </v-col>
      </v-row>

      <v-row >
        <v-btn block color="primer" class="text-center justify-center bg-primer outlined w-50" style="background: #1989c9 !important;" type="submit">
          Add
        </v-btn>



      </v-row>

      </v-card>
    </v-form>



  <v-dialog
    v-model="dialog"
    width="auto"
  >

    <v-date-picker
      color="primary"
      v-model="date_"
      type="date"

    ></v-date-picker>

  </v-dialog>
</v-container>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
import {ActorsModel} from "@/model/Actors.model";

export default {
name: "AddActor",
  data()
  {
    return{
      test_:null,
      id:null,
      role:null,
      form_add_user:false,
      dialog:false,
      name:null,
      date_:null,
      date_for:null,
      age:null,
      role_Rules:[  v => !!v || 'roles is required'],
      nameRules:[  v => !!v || 'name is required'],

      agedRules:[v => !!v || 'age required ',v => /[0-9-]+/.test(v) || 'the age is number'],
      date_Rules:[  v => !!v || 'date is required'],



      type_router:'',


    }
  },
  computed: {
    ...mapGetters('Roles_', ['gettersRoles']),
    ...mapGetters('Actors', ['gettersActors']),
    date_form() {
      if (this.date_ == null) {
        let currentDate = moment().format('DD/MM/YYYY');
        this.date_for = currentDate;
      } else {
        let formattedDate = moment(this.date_).format('DD/MM/YYYY');
        this.date_for = formattedDate;
      }
    },

  },
  methods:
    {
      async getone() {
        this.id=this.$route.params.id
        if (this.$route.path.includes('editActor')) {
          try {
            this.test_ = await this.$store.dispatch('Actors/getActor', 0);
            console.log('dataaaaaaaaa', this.gettersActors);
            this.name=this.gettersActors[0].name
            this.age=this.gettersActors[0].age
            this.date=this.gettersActors[0].date
            this.role=this.gettersActors[0].role
          } catch (error) {
            console.error(error);
          }
        }
      },
      validate()
      {




        this.$refs.form_add_user.validate().then((valid) => {

          console.log('valid',valid)
          if (valid.valid) {


            if (this.$route.path.includes('editActor'))
            {

              this.$store.dispatch( `Actors/editActor`,
                new ActorsModel( 0 ,this.name, this.age,this.date_for, this.role )).then((res)=>
              {
                console.log('valid',res)
                this.$router.push('/Actors')

              })
            }


            else {

              this.$store.dispatch( `Actors/addActor`,
                new ActorsModel( 0 ,this.name, this.age,this.date_for, this.role )).then((res)=>
              {
                console.log('valid',res)
                this.$router.push('/Actors')

              })











          }}
          else {

          }
        });

      }

    },
  mounted() {


this.getone()



  }
}
</script>

<style scoped>

</style>
