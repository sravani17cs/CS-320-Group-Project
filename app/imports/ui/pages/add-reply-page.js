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
  AddReplyForm: {

    before: {
      insert: function(doc) {
        let parentThread = Thread.findOne(FlowRouter.getParam('_id'));
        doc.threadID = parentThread._id;
        let date1 = new Date();
        doc.date = date1.toLocaleString();
        doc.owner = Meteor.userId();
        doc.author = Meteor.user().username;
        doc.editStamp = "";
        console.log(doc.content);
        return doc;
      },
    },

    onSuccess: function onSuccess(formType, result) {
      let doc = Thread.findOne(FlowRouter.getParam('_id'));
      FlowRouter.go('Thread_Page', { _id: doc._id });
    },
  },
});

Template.Add_Reply_Page.helpers({
  replyCollection() {
    return Reply;
  },
});