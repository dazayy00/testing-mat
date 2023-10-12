import { MediaComponent } from './media.component';

describe('MediaComponent', () => {
    let component: MediaComponent;

    beforeEach(() => {
        component = new MediaComponent();
    });

    it('Should return mean=550.6 with the data', () => {
        const testData = {
            data: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]
        };
        const result = component.mediacomponent(testData.data);
        expect(result).toBe(550.6);
    });

    it('Should return mean=60.32000000000001 with the data', () => {
        const testData = {
            data: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
        };
        const result = component.mediacomponent(testData.data);
        expect(result).toBe(60.32000000000001);
    });
});

