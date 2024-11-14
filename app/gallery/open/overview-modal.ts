import { EventData, Page, View, Animation, CoreTypes} from "@nativescript/core";


export function closeModal(args: EventData) {
    const page = <Page>args.object;
    page.closeModal();
}


export function onLoaded(args: EventData) {
    const page = <Page>args.object;
    const modalStack = <View>page.getViewById("modalStack");

    // Animate the height of the modalStack from 0% to 80%
    modalStack.animate({
        height: "80%",  // Final height
        duration: 5000,  // Duration for the reveal
        curve: CoreTypes.AnimationCurve.easeInOut // Smooth curve
    });
}