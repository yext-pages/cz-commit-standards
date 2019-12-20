module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    { value: 'style', name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)' },
    { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature' },
    { value: 'test', name: 'test:     Adding missing tests or correcting existing tests' },
    { value: 'chore', name: 'chore:    Changes for webpack, libraries, or translation files'},
    { value: 'perf', name: 'perf:     A code change that improves performance' },
    { value: 'build', name: 'build:    Build files only' },
    { value: 'revert', name: 'revert:   Revert to a commit' },
    { value: 'WIP', name: 'WIP:      Work in progress' },
  ],

  scopes: [
    { name: 'location' },
    { name: 'locator' },
    { name: 'directory' },
    { name: 'header' },
    { name: 'footer' }
  ],

  // this puts the ticket number in the subject so leave this false and put any tickets in the footer prompt
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'J=',

  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDescribe the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Describe the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any jira tickets or tests done.Use "|" to break new line: \nE.g.:\nJ=PC-123456|TEST=manual\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: [],

  // limit subject length
  subjectLimit: 100,
  breaklineChar: '|', // It is supported for fields body and footer.
  footerPrefix : ''
  // askForBreakingChangeFirst : true, // default is false
};
