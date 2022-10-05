import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle: string = 'HKID Generator | 香港身份證號碼生成器';

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    meta.addTags([
      {name: 'google-site-verification', content: 'nPJpe5QdvxqFWaKW0c1gdiCJmxyA9QQDaegr7X7AARQ'},
      {name: 'description', content: 'Generate and validate HKID | 生成與驗證香港身份證號碼'},
      {name: 'keywords', content: 'generate, produce, validate, check, HKID, Hong Kong Identity Card, 生成, 生產, 產生, 驗證, 香港身份證, 香港身份證號碼'},
    ]);
    title.setTitle(this.appTitle);
  }
}
