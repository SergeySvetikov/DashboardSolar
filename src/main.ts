import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import localeRu from "@angular/common/locales/ru"
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeRu,'ru')

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
