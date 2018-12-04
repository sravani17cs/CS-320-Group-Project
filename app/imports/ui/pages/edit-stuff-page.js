import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Thread } from '../../api/thread/thread.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful edit, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditThreadForm: {
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

Template.Edit_Stuff_Page.helpers({
  getDoc() {
    return Thread.findOne(FlowRouter.getParam('_id'));
  },
  threadCollection() {
    return Thread;
  },
});

