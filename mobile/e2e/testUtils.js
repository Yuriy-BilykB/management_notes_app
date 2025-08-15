const { device, element, by, expect } = require('detox');

const testData = {
  validNote: {
    title: 'Test Note',
    description: 'This is a valid test note description with sufficient number of characters.'
  },
  shortTitle: {
    title: 'ab',
    description: 'This is a valid test note description with sufficient number of characters.'
  },
  shortDescription: {
    title: 'Test Note',
    description: 'Short'
  },
  longTitle: {
    title: 'A'.repeat(101),
    description: 'This is a valid test note description with sufficient number of characters.'
  },
  longDescription: {
    title: 'Test Note',
    description: 'A'.repeat(1001)
  }
};

const testUtils = {
  createTestNote: async (title, description) => {
    await element(by.id('add-note-button')).tap();
    await element(by.id('note-title-input')).typeText(title);
    await element(by.id('note-description-input')).typeText(description);
    await element(by.id('save-note-button')).tap();
  },

  deleteNote: async (noteId) => {
    await element(by.id(`delete-note-${noteId}`)).tap();
    await element(by.text('Delete')).tap();
  },

  navigateToNoteDetails: async (noteId) => {
    await element(by.id(`note-item-${noteId}`)).tap();
  },

  navigateToEditNote: async (noteId) => {
    await element(by.id(`edit-note-${noteId}`)).tap();
  },

  waitForElement: async (selector, timeout = 5000) => {
    await element(selector).waitFor(timeout);
  },

  elementExists: async (selector) => {
    try {
      await element(selector).toBeVisible();
      return true;
    } catch {
      return false;
    }
  },

  takeScreenshot: async (name) => {
    await device.takeScreenshot(name);
  },

  resetApp: async () => {
    await device.reloadReactNative();
  },

  navigateToSettings: async () => {
    await element(by.text('⚙️')).tap();
  },

  navigateToMain: async () => {
    await device.pressBack();
  }
};

module.exports = {
  testUtils,
  testData
};
