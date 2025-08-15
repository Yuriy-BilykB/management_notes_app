module.exports = {
    testTimeout: 120000,
    reporters: ['default'],
    testEnvironment: 'node',
    testMatch: ['**/*.e2e.js', '**/*.test.js'],
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/setup.js'],
    testRunner: 'jest-circus/runner',
    transform: {},
    transformIgnorePatterns: [
        'node_modules/(?!(detox|@detox|react-native|@react-native|@react-navigation)/)'
    ]
};
  