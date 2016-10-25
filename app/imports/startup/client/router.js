import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/login_page', {
  name: 'Login_page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Login_page' });
  },
});


FlowRouter.route('/user_home_page', {
  name: 'User_home_page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_home_page' });
  },
});

FlowRouter.route('/admin_home_page', {
  name: 'Admin_home_page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Admin_home_page' });
  },
});

FlowRouter.route('/user_profile_page', {
  name: 'User_profile_page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_profile_page' });
  },
});

FlowRouter.route('/browse_users_page', {
  name: 'Browse_users_page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Browse_users_page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
