import { _ } from 'meteor/underscore';
import { Reply } from '../../api/reply/reply.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const replySeeds = [
  { content: 'test', author: 'WSU Vancouver', date: 'today' },
  { content: 'test', author: 'WSU Vancouver', date: 'today' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Reply.find().count() === 0) {
  _.each(replySeeds, function seedReplies(reply) {
    Reply.insert(reply);
  });
}