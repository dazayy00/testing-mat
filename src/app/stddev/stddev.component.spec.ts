import { StdDevComponent } from './stddev.component';

describe('StdDevComponent', () => {
    let component: StdDevComponent;

    beforeEach(() => {
        component = new StdDevComponent();
    });

    it('Should return stddev=572.03 with the data', () => {
        const testData = {
            data: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]
        };
        const result = component.stddev(testData.data);
        expect(result).toBe("572.03");
    });

    it('Should return stddev=62.26 with the data', () => {
        const testData = {
            data: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
        };
        const result = component.stddev(testData.data);
        expect(result).toBe("62.26");
    });

    it('Should return 0 for an empty data array', () => {
        const testData: number[] = [];
        const result = component.stddev(testData);
        expect(result).toBe("0.00");
    });
});

