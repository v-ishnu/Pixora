import { EventData, Page } from '@nativescript/core';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
}
