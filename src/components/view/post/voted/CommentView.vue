<template>
    <b-card>
        <b-row class="justify-content-between" slot="header">
        <b-col cols="auto">{{comment.author.name}}</b-col>
        <b-col cols="auto">{{getDateTimeString}}</b-col>
        </b-row>
        <b-row>
          {{comment.text}}
        </b-row>
    </b-card>
</template>

<script>
import moment from 'moment';
export default {
  name: 'CommentView',
  props: {
    comment: { type: Object, required: true }
  },
  computed: {
    getDateTimeString () {
      return moment(this.comment.dateTime).fromNow();
    }
  }
};
</script>

<style scoped>
.card {
  margin: none;
  border: none;
}
.card-header {
  padding: 0%;
}
</style>
