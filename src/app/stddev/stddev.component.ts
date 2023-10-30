export class StdDevComponent {
    stddev(data: number[]): number {
        if (data.length === 0) {
            return 0;
        }

        const mean = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / data.length;

        const squaredDifferences = data.map(item => Math.pow(item - mean, 2));
        const variance = squaredDifferences.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / data.length;

        return Math.sqrt(variance).toFixed(2);
    }
}

