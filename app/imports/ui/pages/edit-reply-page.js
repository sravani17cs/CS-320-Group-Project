import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Thread } from '../../api/thread/thread.js';
import { Reply } from '../../api/reply/reply.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new reply, return to the thread the reply was added to.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditReplyForm: {

    before: {
      update: function(doc) {
        let dateStamp = new Date();
        let editMsg = "Edited @ ";
        doc.$set.editStamp = editMsg.concat(dateStamp.toLocaleString());
        return doc;
      },
    },

    onSuccess: function onSuccess(formType, result) {
      let doc = Thread.findOne(FlowRouter.getParam('_id'));
      FlowRouter.go('Thread_Page', { _id: doc._id });
    },
  },
});

Template.Edit_Reply_Page.helpers({
  getDoc() {
    return Reply.findOne(FlowRouter.getParam('_id2'));
  },
  replyCollection() {
    return Reply;
  },
});