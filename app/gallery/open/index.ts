import { EventData, Page, Image, Frame } from "@nativescript/core";

export function onNavigatingTo(args: EventData) {
    const page = args.object as Page;
    const context = page.navigationContext;
    const displayImage = page.getViewById<Image>("displayImage");

    // Log the image source for confirmation
    console.log("Received image source:", context.imageSrc);

    // Set the src directly to the Image component
    displayImage.src = context.imageSrc;
}


export function goBack(args: EventData) {
    Frame.topmost().goBack();
}
