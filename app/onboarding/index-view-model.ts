import { Frame, Observable } from '@nativescript/core';

export class WelcomeViewModel extends Observable {
    constructor() {
        super();
    }

    onGetStarted() {
        this.navigateToMain();
    }

    onSkip() {
        this.navigateToMain();
    }

    private navigateToMain() {
        const frame = Frame.topmost();
        frame.navigate({
            moduleName: "main-page",
            clearHistory: true
        });
    }
}