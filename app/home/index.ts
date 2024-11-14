import { EventData, Page, Frame,Image  } from "@nativescript/core";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
}

export function onPainting() {
    // Navigate to painting 
    Frame.topmost().navigate({
        moduleName: "home/painting/index", 
    });
}

export function onIllustration() {
    // Navigate to illustration screen
    Frame.topmost().navigate({
        moduleName: "home/Illustration/index", 
    });
}

export function goBack(args: EventData) {
    Frame.topmost().goBack();
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


export function onUpload(args:EventData){
    Frame.topmost().navigate({
        moduleName:"home/upload/index"
    })
}