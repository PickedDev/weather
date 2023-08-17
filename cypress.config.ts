import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      // Implement a custom event listener
      on('task', {
        logMessage(message) {
          console.log(`[Custom Event Listener] Message: ${message}`);
          return null;
        },
      });
    },
  },
});
