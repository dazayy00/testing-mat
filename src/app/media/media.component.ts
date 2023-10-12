export class MediaComponent {
    mediacomponent(data: number[]): number {
        if (data.length === 0) {
            return 0;
        }
        
        const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const mean = sum / data.length;
        
        return mean;
    }
}

