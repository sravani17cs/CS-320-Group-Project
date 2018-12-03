import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Reply = new Mongo.Collection('Reply');

Reply.helpers({
  isReplyOwner() {
    return (this.owner === Meteor.userId());
  },
});

export const ReplySchema = new SimpleSchema({
  threadID: {
    label: 'Thread_ID',
    type: String,
    optional: true,
    max: 60,
    autoform: {
      group: 'Reply',
      placeholder: 'Thread ID',
    },
  },
  content: {
    label: 'Content',
    type: String,
    optional: false,
    max: 500,
    autoform: {
      group: 'Reply',
      placeholder: 'Reply Content',
    },
  },
  author: {
    label: 'Author',
    type: String,
    optional: true,
    autoform: {
      group: 'Reply',
    },
  },
  date: {
    label: 'Date',
    type: String,
    optional: true,
    autoform: {
      group: 'Reply',
    },
  },
  owner: {
    label: 'Owner',
    type: String,
    optional: true,
    autoform: {
      group: 'Reply',
    },
  },
});

Reply.attachSchema(ReplySchema);