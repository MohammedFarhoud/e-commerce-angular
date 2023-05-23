export interface Pagination<T> {
    count: number,
    previous: string,
    next: string,
    results: T;
}