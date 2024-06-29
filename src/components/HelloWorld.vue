<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list-item
        class="ma-5"
      >

        <div>
          <br />
          <h4> Use Name</h4>
        </div>


      </v-list-item>

      <v-divider></v-divider>


      <v-list v-model:opened="open" >
        <v-list-group value="Movie"  >
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Movies"
              prepend-icon="mdi-account-group-outline"
              :class="{ 'active_class': isChildActive('/Movies') || isChildActive('/addMovie')  }"
            ></v-list-item>
          </template>
          <v-list-item
            :to="{ name: 'Movies' }"
            title="All Movies"
            value="Movies"
            prepend-icon="mdi-account-group-outline"
            :class="{ 'active_class': isActive('/Movies')  }"
          ></v-list-item>
          <v-list-item
            :to="{ name: 'addMovie' }"
            title="Add Movie"
            value="addMovie"
            prepend-icon="mdi-plus"
            :class="{ 'active_class': isActive('/addMovie')  }"
          ></v-list-item>
        </v-list-group>
      </v-list>


      <v-list v-model:opened="open" >
        <v-list-group value="Actor"  >
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Actors"
              prepend-icon="mdi-account-group-outline"
              :class="{ 'active_class': isChildActive('/Actors') || isChildActive('/addActor')  }"
            ></v-list-item>
          </template>
          <v-list-item
            :to="{ name: 'Actors' }"
            title="All Actors"
            value="Actors"
            prepend-icon="mdi-account-group-outline"
            :class="{ 'active_class': isActive('/Actors')  }"
          ></v-list-item>
          <v-list-item
            :to="{ name: 'addActor' }"
            title="Add Actor"
            value="addActor"
            prepend-icon="mdi-plus"
            :class="{ 'active_class': isActive('/addActor')  }"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>





    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
     <router-view />
    </v-main>
  </v-app>
</template>

<script >
export default {
  data: () => ({

    drawer: true,
    open: [],


  }),
  methods:
    {
      isActive(route) {
       // return this.$route.path === route;
      },
      isChildActive(route) {
       // return this.$route.matched.some(record => record.path === route)
      },


    },


  watch: {
    group () {
      this.drawer = false
    },
  },



  mounted() {

  }
}

</script>


<style>
.active_class {
  background-color: #1989c9 !important;
  color: #FFF !important;
}
</style>
