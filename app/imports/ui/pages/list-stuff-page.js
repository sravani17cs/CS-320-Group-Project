import { Template } from 'meteor/templating';
import { Thread } from '../../api/thread/thread.js';

Template.List_Stuff_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  threadList() {
    return Thread.find();
  },
});
