var solution = function (isBadVersion: any) {
    return function (n: number): number {
        let left = 1;
        let right = n;
        let result = 0;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const isBad = isBadVersion(mid);

            if (isBad) {
                if (!isBadVersion(mid - 1)) {
                    result = mid;
                    break;
                }
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return result;
    };
};

{
    const soln = solution((v: number) => v >= 4);
    console.log(soln(5));
}

{
    const soln = solution((v: number) => v >= 1);
    console.log(soln(1));
}
