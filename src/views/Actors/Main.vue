<template>
  <v-container>
    <loader  v-if="show_data" />
    <v-data-table
      v-else
      :headers="headers"
      :items="gettersActors"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>My Actors</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this Movies?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.edit="{ item }">
        <router-link :to="{ name: 'editActor', params: { id: item.id }}">
          <v-btn color="green" icon size="small">
            <v-icon size="small">
              mdi-pencil
            </v-icon>
          </v-btn>
        </router-link>



      </template>
      <template v-slot:item.delete="{ item }">
        <v-btn    color="red" icon="mdi-plus" size="small"   @click="deleteItem(item)">
          <v-icon
            size="small"
          >
            mdi-delete
          </v-icon>
        </v-btn>

      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"

        >
          not data
        </v-btn>
      </template>
    </v-data-table>

  </v-container>
</template>

<script>
import loader from "@/components/loader";
import { mapGetters } from 'vuex';
import {toast} from "vue3-toastify";
export default {
name: "Main",
  data () {
    return {
      editedIndex:null,editedItem:null,
      show_data:true,
      dialogDelete:false,

      headers: [
        {
          title: 'id',
          align: 'start',
          sortable: false,
          key: 'id',
        },

        { title: 'name', key: 'name' },
        { title: 'age', key: 'age' },
        { title: 'date', key: 'date' },
        { title: 'role', key: 'role' },
        { title: 'Edit', key: 'edit', sortable: false },
        { title: 'Delete', key: 'delete', sortable: false },

      ],
    }

  },
  methods:
    {

      deleteItem (item) {
        console.log('delete item ',this.editedIndex )

        this.editedIndex = this.gettersActors.indexOf(item)
        console.log('delete item ',this.editedIndex )
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      deleteItemConfirm () {

        this.$store.dispatch(`Actors/removeActor`,this.editedIndex).then((res)=>
        {
          console.log('REMOVE_Actor')
          toast.success('success remove Actor ')
        })

        this.closeDelete()
      },

    },
  components:
    {
      loader
    },
  computed: {
    ...mapGetters('Actors', ['gettersActors']) ,

  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  created () {
    setTimeout(() => {
      this.show_data=false
    }, 3000);

  },
}
</script>

<style scoped>

</style>
