import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Thread } from '../../api/thread/thread.js';
import { Reply } from '../../api/reply/reply.js';

Template.User_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  getUser() {
    return Meteor.users.findOne(FlowRouter.getParam('_id')); /* unsure if will work */
  },
  replyList() {
    let thisAccount = FlowRouter.getParam('_id');
    return Reply.find({ owner: thisAccount }, { sort: { date: -1 } });
  },
  threadList() {
    let thisAccount = FlowRouter.getParam('_id');
    return Thread.find({ owner: thisAccount }, { sort: { date: -1 } });
  },
});