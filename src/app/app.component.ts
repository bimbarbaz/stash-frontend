import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ConfigurationGQL } from 'src/app/generated/graphql-types';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'Stash - but pretty';

  constructor(@Inject(DOCUMENT) private document: Document, configurationGQL: ConfigurationGQL) {
    configurationGQL.fetch().subscribe(result => {
      const config = result.data.configuration;
      if (config.interface.cssEnabled) {
        this.addInlineStyles(config.interface.css!);
      } else {
        this.loadStylesheet(`styles.css`);
      }
    });
  }

  loadStylesheet(path: string) {
    const link = this.document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path;
    this.document.head.appendChild(link);
  }

  addInlineStyles(styles: string) {
    const style = this.document.createElement('style');
    style.innerHTML = styles;
    this.document.head.appendChild(style);
  }
  
}
