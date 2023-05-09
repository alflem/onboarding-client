import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _isDarkMode = false;

  constructor(private overlayContainer: OverlayContainer) {}

  toggleTheme(): void {
    this._isDarkMode = !this._isDarkMode;
    const themeClass = this._isDarkMode ? 'dark-theme' : 'light-theme';

    const overlayClassList = this.overlayContainer.getContainerElement().classList;
    overlayClassList.remove('dark-theme');
    overlayClassList.remove('light-theme');
    overlayClassList.add(themeClass);

    const bodyClassList = document.body.classList;
    bodyClassList.remove('dark-theme');
    bodyClassList.remove('light-theme');
    bodyClassList.add(themeClass);
  }

  isDarkMode(): boolean {
    return this._isDarkMode;
  }
}