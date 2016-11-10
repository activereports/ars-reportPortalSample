import { keyMirror } from '../utils/index';

const ActionTypes = keyMirror({

  // ACCOUNTS

  // Check Token
  REQUEST_CHECK_TOKEN: null,
  RECEIVE_CHECK_TOKEN: null,
  FAILURE_CHECK_TOKEN: null,

  // Log In
  REQUEST_AUTHENTICATION: null,
  RECEIVE_AUTHENTICATION: null,
  FAILURE_AUTHENTICATION: null,

  // Log Out
  REQUEST_LOG_OUT: null,
  RECEIVE_LOG_OUT: null,
  FAILURE_LOG_OUT: null,


  // USER
  REQUEST_USER_INFO: null,
  RECEIVE_USER_INFO: null,
  FAILURE_USER_INFO: null,
  REQUEST_LICENSE_INFO: null,
  RECEIVE_LICENSE_INFO: null,
  FAILURE_LICENSE_INFO: null,


  // TAGS
  REQUEST_TAGS: null,
  RECEIVE_TAGS: null,
  FAILURE_TAGS: null,
  TOGGLE_TAG_NODE: null,
  SELECT_TAG_NODE: null,
  REQUEST_ADD_TAG: null,
  RECEIVE_ADD_TAG: null,
  FAILURE_ADD_TAG: null,
  REQUEST_DELETE_TAG: null,
  RECEIVE_DELETE_TAG: null,
  FAILURE_DELETE_TAG: null,
  REQUEST_UPDATE_TAG: null,
  RECEIVE_UPDATE_TAG: null,
  FAILURE_UPDATE_TAG: null,


  // REPORTS
  REQUEST_REPORT: null,
  RECEIVE_REPORT: null,
  FAILURE_REPORT: null,
  REQUEST_REPORTS: null,
  RECEIVE_REPORTS: null,
  FAILURE_REPORTS: null,
  REQUEST_DELETE_REPORT: null,
  RECEIVE_DELETE_REPORT: null,
  FAILURE_DELETE_REPORT: null,
  REQUEST_UPDATE_REPORT: null,
  RECEIVE_UPDATE_REPORT: null,
  FAILURE_UPDATE_REPORT: null,
  REQUEST_UPDATE_REPORT_TAG: null,
  RECEIVE_UPDATE_REPORT_TAG: null,
  FAILURE_UPDATE_REPORT_TAG: null,
  REQUEST_DELETE_REPORT_TAG: null,
  RECEIVE_DELETE_REPORT_TAG: null,
  FAILURE_DELETE_REPORT_TAG: null,
  COMPLETE_REPORT_PRINT: null,
  REQUEST_REPORT_PRINT: null,
  RECEIVE_REPORT_PRINT: null,
  FAILURE_REPORT_PRINT: null,
  REQUEST_REPORT_EXPORT: null,
  RECEIVE_REPORT_EXPORT: null,
  FAILURE_REPORT_EXPORT: null,
  SET_FILTER_TEXT: null,
  SET_PAGE_NUMBER: null,
  SET_SORT_FLAG: null,
  SET_SORT_METHOD: null,

  // Models
  REQUEST_MODELS: null,
  RECEIVE_MODELS: null,
  FAILURE_MODELS: null,

  // Report Versions
  REQUEST_REPORT_VERSIONS: null,
  RECEIVE_REPORT_VERSIONS: null,
  FAILURE_REPORT_VERSIONS: null,

  // Report Schedules
  REQUEST_REPORT_SCHEDULES: null,
  RECEIVE_REPORT_SCHEDULES: null,
  FAILURE_REPORT_SCHEDULES: null,
  REQUEST_DELETE_SCHEDULE: null,
  RECEIVE_DELETE_SCHEDULE: null,
  FAILURE_DELETE_SCHEDULE: null,
  REQUEST_SCHEDULE_TEMPLATE: null,
  RECEIVE_SCHEDULE_TEMPLATE: null,
  FAILURE_SCHEDULE_TEMPLATE: null,
  REQUEST_UPDATE_SCHEDULE: null,
  RECEIVE_UPDATE_SCHEDULE: null,
  FAILURE_UPDATE_SCHEDULE: null,
  REQUEST_SCHEDULE_TEMPLATES: null,
  RECEIVE_SCHEDULE_TEMPLATES: null,
  FAILURE_SCHEDULE_TEMPLATES: null,

  // Report Parameters
  REQUEST_REPORT_PARAMETERS: null,
  RECEIVE_REPORT_PARAMETERS: null,
  FAILURE_REPORT_PARAMETERS: null,

  // Report Permissions
  REQUEST_REPORT_PERMISSIONS: null,
  RECEIVE_REPORT_PERMISSIONS: null,
  FAILURE_REPORT_PERMISSIONS: null,
  REQUEST_UPDATE_REPORT_PERMISSIONS: null,
  RECEIVE_UPDATE_REPORT_PERMISSIONS: null,
  FAILURE_UPDATE_REPORT_PERMISSIONS: null,

  // Report Render
  REQUEST_REPORT_RENDER: null,
  RECEIVE_REPORT_RENDER: null,
  FAILURE_REPORT_RENDER: null,

  // Revisions Pane
  SHOW_REVISIONS: null,
  HIDE_REVISIONS: null,

  // UI
  HIDE_PERMISSIONS: null,
  HIDE_PROPERTIES: null,
  HIDE_REPORT_DIALOG: null,
  HIDE_SCHEDULES: null,
  HIDE_SIDEBAR: null,
  HIDE_VIEWER: null,
  SHOW_PERMISSIONS: null,
  SHOW_PROPERTIES: null,
  SHOW_REPORT_DIALOG: null,
  SHOW_SCHEDULES: null,
  SHOW_SIDEBAR: null,
  SHOW_VIEWER: null,
  TOGGLE_PROPERTIES: null,
  REQUEST_SITE_SETTINGS: null,
  RECEIVE_SITE_SETTINGS: null,
  FAILURE_SITE_SETTINGS: null,
  SET_CURRENT_TOOL_TYPE: null,

  // Notification
  SHOW_NOTIFICATION: null,
  HIDE_NOTIFICATION: null,

  // Loading Screen
  SHOW_LOADING_SCREEN: null,
  HIDE_LOADING_SCREEN: null,

  // Viewer
  SHOW_VIEWER_SIDEBAR: null,
  HIDE_VIEWER_SIDEBAR: null,
  GET_SEARCH_MATCHES: null,
  SHOW_SEARCH_RESULTS: null,
  SET_DRILLDOWN_PARENT: null,
  GET_DRILLDOWN_PARENT: null,

  // TOC
  REQUEST_TOC: null,
  RECEIVE_TOC: null,
  FAILURE_TOC: null,

});

export default ActionTypes;
