import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Thread } from '../../api/thread/thread.js';

/* eslint-disable object-shorthand, no-unused-vars */

Template.Thread_Page.events({
  'click .delete'() {
    let doc = Thread.findOne(FlowRouter.getParam('_id'));
    Thread.remove(doc._id);
    FlowRouter.go('List_Stuff_Page');
  },
});

Template.Thread_Page.helpers({
  getDoc() {
    return Thread.findOne(FlowRouter.getParam('_id'));
  },
  isOwner() {
    let doc = Thread.findOne(FlowRouter.getParam('_id'));
    return ( doc.owner === Meteor.userId() );
  },
  threadCollection() {
    return Thread;
  },
});