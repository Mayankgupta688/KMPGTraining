import "zone.js/dist/zone";

import { ApplicationModule } from "./application.module";

import { platformBrowserDynamic} from "@angular/platform-browser-dynamic";

platformBrowserDynamic().bootstrapModule(ApplicationModule)