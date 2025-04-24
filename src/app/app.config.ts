import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter,withInMemoryScrolling  } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
    
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // Restores scroll position on back/forward, scrolls to top or fragment otherwise
        anchorScrolling: 'enabled', // Enables scrolling to fragments (like #elementId)
      })
    )
    ]
};

