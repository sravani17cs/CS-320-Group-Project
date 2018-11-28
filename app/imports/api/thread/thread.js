import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Thread = new Mongo.Collection('Thread');

/**
 * Create the schema for Thread
 */
export const ThreadSchema = new SimpleSchema({
  title: {
    label: 'Title',
    type: String,
    optional: false,
    max: 60,
    autoform: {
      group: 'Thread',
      placeholder: 'Title',
    },
  },
  content: {
    label: 'Content',
    type: String,
    optional: false,
    max: 500,
    autoform: {
      group: 'Thread',
      placeholder: 'Thread Content',
    },
  },
  author: {
    label: 'Author',
    type: String,
    optional: false,
    autoform: {
      group: 'Thread',
      placeholder: 'Author',
    },
  },
  date: {
    label: 'Date',
    type: String,
    optional: false,
    autoform: {
      group: 'Thread',
      placeholder: 'Date',
    },
  },
});

Thread.attachSchema(ThreadSchema);
