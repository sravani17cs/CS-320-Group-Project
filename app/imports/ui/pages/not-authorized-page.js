import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Thread } from '../../api/thread/thread.js';
import { Reply } from '../../api/reply/reply';

Template.Not_Authorized_Page.events({
  'click .okButton'() {
    let doc = Thread.findOne(FlowRouter.getParam('_id'));
    FlowRouter.go('Thread_Page', { _id: doc._id });
  },
});