import { EventData, Page, Image, Frame, CoreTypes } from "@nativescript/core";

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

export function overView(args: EventData) {
    const page = (args.object as Page);

    page.showModal(
        "gallery/open/overview-modal",
        {
            context: {},
            closeCallback: () => {},
            fullscreen: false,
            animated: true,
            stretched: true,
            transition: {
                name: "slideBottom", 
                duration: 30000,       
                curve: CoreTypes.AnimationCurve.easeInOut  
            }
        }
    );
}
