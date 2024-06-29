<template>

  <v-container>
<loader  v-if="show_data" />

    <v-card   v-else>
      <v-card-title class="d-flex align-center pe-2">
        <v-icon icon="mdi-video-input-component"></v-icon> &nbsp;


        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-card-title>


      <v-data-table
        v-model:search="search"
        :headers="headers"
        :items="gettersM"
      >

        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title>My Movies</v-toolbar-title>
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

          <v-btn    color="green" icon="mdi-plus" size="small"  >
            <v-icon

              size="small"


            >
              mdi-pencil
            </v-icon>
          </v-btn>



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
    </v-card>

  </v-container>

</template>

<script>
import { mapGetters } from 'vuex';
import loader from "@/components/loader";
import { toast } from 'vue3-toastify';

export default {
  data () {
    return {
      search: "",
      name: "",
      calories: "",
      fat: "",
      carbs: "",
      show_data:true,
      dialog: false,
      dialogDelete: false,

      headers: [
        {
          title: 'id',
          align: 'start',
          sortable: false,
          key: 'id',
        },

        { title: 'title', key: 'title' ,
        },
        { title: 'year', key: 'year' },
        { title: 'actors', key: 'actors' },
        { title: 'Edit', key: 'edit', sortable: false },
        { title: 'Delete', key: 'delete', sortable: false },

      ],
      desserts: [

        {

          title: 'Frozen Yogurt',
          actors: 159,
          year:2000

        },

      ],
    }
  },
  computed: {
    ...mapGetters('Movies', ['gettersM']) ,

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
  methods: {
    initialize () {
      this.desserts = [
        {
          id:0,
          title: 'Frozen Yogurt',
          actors: 159,
          year:2000

        },
        {
          id:0,
          title: 'Frozen Yogurt',
          actors: 159,
          year:2000

        },

      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      console.log('delete item ',this.editedIndex )

      this.editedIndex = this.gettersM.indexOf(item)
      console.log('delete item ',this.editedIndex )
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {

      this.$store.dispatch(`Movies/removeMovie`,this.editedIndex).then((res)=>
      {
        console.log('removeMovie')
        toast.success('success remove Movie ')
      })

      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
  },
  components:
    {
      loader
    }
}
</script>
