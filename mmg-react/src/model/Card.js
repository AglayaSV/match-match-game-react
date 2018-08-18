export default class Card {
    constructor(imageIndex, flipped = false, discovered = false, cssClasses, shirtIndex) {
        this.imageIndex = imageIndex;
        this.flipped = flipped;
        this.discovered = discovered;
        this.cssClasses = cssClasses;
        this.shirtIndex = shirtIndex;
    }
}