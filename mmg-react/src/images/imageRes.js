import image_1 from './image_1.png';
import image_2 from './image_2.png';
import image_3 from './image_3.png';
import image_4 from './image_4.png';
import image_5 from './image_5.png';
import image_6 from './image_6.png';
import image_7 from './image_7.png';
import image_8 from './image_8.png';
import image_9 from './image_9.png';
import image_10 from './image_10.png';
import image_11 from './image_11.png';
import image_12 from './image_12.png';
import image_13 from './image_13.png';
import image_14 from './image_14.png';
import image_15 from './image_15.png';
import image_16 from './image_16.png';
import image_17 from './image_17.png';
import image_18 from './image_18.png';
import shirt_1 from './shirt_1.png';
import shirt_2 from './shirt_2.png';
import shirt_3 from './shirt_3.png';

export default class ImageRes {
    constructor() {
        this.frontSides = [];
        this.frontSides.push(image_1);
        this.frontSides.push(image_2);
        this.frontSides.push(image_3);
        this.frontSides.push(image_4);
        this.frontSides.push(image_5);
        this.frontSides.push(image_6);
        this.frontSides.push(image_7);
        this.frontSides.push(image_8);
        this.frontSides.push(image_9);
        this.frontSides.push(image_10);
        this.frontSides.push(image_11);
        this.frontSides.push(image_12);
        this.frontSides.push(image_13);
        this.frontSides.push(image_14);
        this.frontSides.push(image_15);
        this.frontSides.push(image_16);
        this.frontSides.push(image_17);
        this.frontSides.push(image_18);

        this.backSides = [];
        this.backSides.push(shirt_1);
        this.backSides.push(shirt_2);
        this.backSides.push(shirt_3);
    }

    getBackSides() {
        return this.backSides;
    }

    getFrontSides() {
        return this.frontSides;
    }
}

