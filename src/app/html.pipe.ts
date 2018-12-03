import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  pure: false
})
export class HtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(content): any {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}

@Pipe({
  name: 'safeUrl',
  pure: false
})
export class SafeUrl implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(content): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(content);
  }

}
