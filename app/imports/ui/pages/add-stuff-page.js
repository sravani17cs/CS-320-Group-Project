import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Thread } from '../../api/thread/thread.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddThreadForm: {
    /**
     * After successful form submission, go to List_Stuff_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */

    before: {
      insert: function(doc) {
        let date1 = new Date();
        doc.date = date1.toLocaleString();
        doc.owner = Meteor.userId();
        doc.author = Meteor.user().username;
        return doc;
      },
    },

    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('List_Stuff_Page');
    },
  },
});

Template.Add_Stuff_Page.helpers({
  threadCollection() {
    return Thread;
  },
});
