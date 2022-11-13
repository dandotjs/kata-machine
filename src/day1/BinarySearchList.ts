export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (needle === haystack[mid]) return true;
        if (haystack[mid] > needle) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}
