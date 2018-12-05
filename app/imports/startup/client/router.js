import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.route('/thread/:_id', {
  name: 'Thread_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Thread_Page' });
  },
});

FlowRouter.route('/addreply/:_id', {
  name: 'Add_Reply_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Reply_Page' });
  },
});

FlowRouter.route('/notauthorized/:_id', {
  name: 'Not_Authorized_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Not_Authorized_Page' });
  },
});

FlowRouter.route('/editreply/:_id/:_id2', {
  name: 'Edit_Reply_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Reply_Page' });
  },
});

/* experimental code */
FlowRouter.route('/user/:_id', {
  name: 'User_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
