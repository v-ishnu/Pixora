import { EventData, Page, NavigationButton, Frame} from '@nativescript/core';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
}

export function onBackTap() {
    // Handle back navigation
    console.log('Back button tapped');
}
