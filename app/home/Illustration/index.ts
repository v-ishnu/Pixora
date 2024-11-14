import { EventData, Image,Page, Frame } from "@nativescript/core";

// Handle page navigation setup
export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
}

export function onImageTap(args: EventData) {
    const image = args.object as Image; 
    const imageSrc = image.src; 

    // Navigate to the desired page and pass the image source
    Frame.topmost().navigate({
        moduleName: "gallery/open/index", 
        context: { imageSrc: imageSrc } 
    });
}

export function goBack(args: EventData) {
    Frame.topmost().goBack();
}
