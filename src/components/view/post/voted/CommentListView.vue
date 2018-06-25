<template>
  <b-card>
  <b-list-group>
    <comment-form-view :postId="postId"></comment-form-view>

    <div v-if="hidden">
      <comment-view v-if="comments[0]" :comment="comments[0]"></comment-view>
      <comment-view v-if="comments[1]" :comment="comments[1]"></comment-view>
    </div>
    <comment-view v-else v-for="comment in comments" :key="comment.id" :comment="comment"></comment-view>
    <b-btn v-if="hidden && comments.length > 2" @click="hidden=false">Show comments</b-btn>
    <b-btn v-if="!hidden" @click="hidden=true">Hide comments</b-btn>
  </b-list-group>
  </b-card>
</template>

<script>
import CommentFormView from '../../../form/CommentForm';
import CommentView from './CommentView';

export default {
  name: 'CommentListView',
  components: {
    CommentFormView,
    CommentView
  },
  data () {
    return {
      hidden: true
    };
  },
  props: {
    comments: { type: Array, required: true },
    postId: { type: Number, required: true }
  }
};
</script>
