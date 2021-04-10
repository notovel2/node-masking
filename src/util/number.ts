
interface GetStartOptions {
    min?: number;
    ratio?: number;
}
export const getStart = (n: number, { min = 0, ratio }: GetStartOptions) => {
    if (n <= 0) {
        return 0;
    }
    if (n <= min) {
        return min;
    }


}