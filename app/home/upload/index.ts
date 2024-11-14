import { EventData, Image,Page, Frame } from "@nativescript/core";

// Handle page navigation setup
exports.onNavigatingTo = function (args) {
    const page = args.object;
    page.bindingContext = {
        categories: ["Painting", "Illustration", "Sculpture"],
        selectedCategoryIndex: 0
    };
};


export function goBack(args: EventData) {
    Frame.topmost().goBack();
}
