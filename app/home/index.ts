import { EventData, Page, Frame } from "@nativescript/core";

export class GalleryViewModel {
    onGetStarted(args) {
        const frame = Frame.topmost();
        frame.navigate({
            moduleName: "paintings/paintings",
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    }
}

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    const viewModel = new GalleryViewModel();
    page.bindingContext = viewModel;
}