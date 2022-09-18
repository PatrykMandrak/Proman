export let domManager = {
    addChild(parentIdentifier, childContent) {
        const parent = document.querySelector(parentIdentifier);
        if (parent) {
            parent.insertAdjacentHTML("beforeend", childContent);
        } else {
            console.error("could not find such html element: " + parentIdentifier);
        }
    },
    destroyBoard() {
        document.getElementById("root").innerHTML="";
    },
//    editElementValue(identifier, newValue) {
//        const element = document.querySelector(identifier);
//        if (parent) {
//            element.value = newValue;
//        } else {
//            console.error("could not find such html element: " + identifier);
//        }
//    },
    addEventListener(parentIdentifier, eventType, eventHandler) {
        const parent = document.querySelector(parentIdentifier);
        if (parent) {
            parent.addEventListener(eventType, eventHandler);
        } else {
            console.error("could not find such html element: " + parentIdentifier);
        }
    },
};
