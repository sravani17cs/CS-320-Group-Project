import { _ } from 'meteor/underscore';
import { Thread } from '../../api/thread/thread.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const threadSeeds = [
  { title: 'test', content: 'test', author: 'WSU Vancouver', date: 'today', },
  { title: 'test', content: 'test', author: 'WSU Vancouver', date: 'today' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Thread.find().count() === 0) {
  _.each(threadSeeds, function seedThreads(thread) {
    Thread.insert(thread);
  });
}
