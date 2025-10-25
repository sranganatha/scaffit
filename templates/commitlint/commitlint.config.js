module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Type rules
    'type-enum': [
      2,
      'always',
      [
        'feat',     // A new feature
        'fix',      // A bug fix
        'docs',     // Documentation only changes
        'style',    // Changes that do not affect the meaning of the code
        'refactor', // A code change that neither fixes a bug nor adds a feature
        'perf',     // A code change that improves performance
        'test',     // Adding missing tests or correcting existing tests
        'build',    // Changes that affect the build system or external dependencies
        'ci',       // Changes to our CI configuration files and scripts
        'chore',    // Other changes that don't modify src or test files
        'revert',   // Reverts a previous commit
        {{#if includeCustomTypes}}
        '{{CUSTOM_TYPE_1}}',    // {{CUSTOM_TYPE_1_DESCRIPTION}}
        '{{CUSTOM_TYPE_2}}',    // {{CUSTOM_TYPE_2_DESCRIPTION}}
        {{/if}}
      ],
    ],
    
    // Scope rules
    {{#if includeScopes}}
    'scope-enum': [
      2,
      'always',
      [
        '{{SCOPE_1}}',    // {{SCOPE_1_DESCRIPTION}}
        '{{SCOPE_2}}',    // {{SCOPE_2_DESCRIPTION}}
        '{{SCOPE_3}}',    // {{SCOPE_3_DESCRIPTION}}
        {{#if includeMoreScopes}}
        '{{SCOPE_4}}',    // {{SCOPE_4_DESCRIPTION}}
        '{{SCOPE_5}}',    // {{SCOPE_5_DESCRIPTION}}
        {{/if}}
      ],
    ],
    {{else}}
    'scope-empty': [2, 'never'],
    {{/if}}
    
    // Subject rules
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', {{SUBJECT_MAX_LENGTH}}],
    'subject-min-length': [2, 'always', {{SUBJECT_MIN_LENGTH}}],
    
    // Body rules
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', {{BODY_MAX_LENGTH}}],
    'body-min-length': [2, 'always', {{BODY_MIN_LENGTH}}],
    
    // Footer rules
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', {{FOOTER_MAX_LENGTH}}],
    
    // Header rules
    'header-max-length': [2, 'always', {{HEADER_MAX_LENGTH}}],
    'header-min-length': [2, 'always', {{HEADER_MIN_LENGTH}}],
    
    // Type case
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    
    // Scope case
    'scope-case': [2, 'always', 'lower-case'],
    
    // Breaking change rules
    {{#if includeBreakingChanges}}
    'breaking-change': [2, 'always'],
    {{/if}}
    
    // Custom rules
    {{#if includeCustomRules}}
    '{{CUSTOM_RULE_1}}': [2, 'always'],
    '{{CUSTOM_RULE_2}}': [2, 'always'],
    {{/if}}
  },
  
  // Ignore rules
  ignores: [
    {{#if ignoreMergeCommits}}
    (message) => message.includes('Merge'),
    {{/if}}
    {{#if ignoreRevertCommits}}
    (message) => message.startsWith('Revert'),
    {{/if}}
    {{#if ignoreWipCommits}}
    (message) => message.includes('WIP'),
    {{/if}}
  ],
  
  // Help URL
  helpUrl: '{{HELP_URL}}',
  
  // Default ignores
  defaultIgnores: true,
  
  // Prompt configuration
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description: 'Changes that do not affect the meaning of the code',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: 'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description: 'Changes that affect the build system or external dependencies',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description: 'Changes to our CI configuration files and scripts',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          chore: {
            description: 'Other changes that don\'t modify src or test files',
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: 'What is the scope of this change (e.g. component or file name)',
      },
      subject: {
        description: 'Write a short, imperative tense description of the change',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breakingBody: {
        description: 'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      issuesBody: {
        description: 'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
    },
  },
};