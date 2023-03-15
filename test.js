// Class that has three fields: preRollPrice, midRollPrice, postRollPrice
class SegmentPrice {
    constructor(preRollPrice, midRollPrice, postRollPrice) {
        this.preRollPrice = preRollPrice;
        this.midRollPrice = midRollPrice;
        this.postRollPrice = postRollPrice;
    }
}

function intFromText(text) {
    var number = parseInt(text);
    return isNaN(number) ? 0 : number;
}

function isElementActive(elementId) {
    const element = document.querySelector(elementId);
    const containsActive = element.classList.contains("active");
    return containsActive;
}