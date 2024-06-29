<template>
  <div>
    <v-dialog
      v-model="dialog2"
      max-width="290" lazy>
      <v-card-text class="text-xs-center">
        <v-progress-circular :size="70" indeterminate class="primary--text"/>
      </v-card-text>

    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog2: true,
    };
  },
  methods: {
    close() {
      this.dialog2 = false;
    },
  },
}

</script>
