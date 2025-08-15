module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
  runnerConfig: 'e2e/config.json',
  specs: 'e2e',
  apps: {
    'android.debug': {
      type: 'android.apk',
      build: 'npx expo run:android --variant debug',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      device: {
        avdName: 'Pixel_5' 
      }
    },
    'ios.debug': {
      type: 'ios.app',
      build: 'npx expo run:ios --configuration Debug',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/managementApp.app',
      device: {
        type: 'iPhone 15'
      }
    }
  },
  devices: {
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_5'
      }
    },
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 15'
      }
    }
  },
  configurations: {
    'android.debug': {
      device: 'emulator',
      app: 'android.debug'
    },
    'ios.debug': {
      device: 'simulator',
      app: 'ios.debug'
    }
  }
};
