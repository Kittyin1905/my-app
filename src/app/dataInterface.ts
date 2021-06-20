
export interface Category {
    category: any;
}
export interface BarItem {
    id: any;
    xValue: any;
    yValue: any;
    category: any;
}
export interface BoxItem {
    id: any;
    yValue: any;
    category: any;
    min: any;
    avg: any;
}
// export interface Category{
//     category: any;
//     number: number;
//     accum:number;
// }
// /**For scalable background the value of number[i] must be the count of category[i]+ the count of category[i-1] */
// export const CategoryIn:Category[] = [
//     { category:'East',number:3,accum:0},
//     { category:'West',number:4,accum:3},
//     { category:'North',number:2,accum:7},
//     { category:'South',number:4,accum:9}
// ];
/**For national struct */
export const CategoryInfo: Category[] = [
    { category: 'East' },
    { category: 'West' },
    { category: 'North' },
    { category: 'South' }
];
export const StatsBarChart: BarItem[] = [
    { id: 1, xValue: 'Apple', yValue: 100, category: 'T' },
    { id: 2, xValue: 'IBM', yValue: 80, category: 'C' },
    { id: 3, xValue: 'HP', yValue: 20, category: 'T' },
    { id: 3, xValue: 'Apple', yValue: 70, category: 'C', },
    { id: 4, xValue: 'IBM', yValue: 12, category: 'T', },
    { id: 5, xValue: 'HP', yValue: 40, category: 'S', }

];

/**nationa struct end */
/**Drugs Start */
export const DrugCategoryInfo: Category[] = [
    { category: 'East' },
];
export const StatsBoxChart: BoxItem[] = [
    { id: 'Apple', yValue: 100, category: 'T', min: 30, avg: 70 },
    { id: 'IBM', yValue: 80, category: 'T', min: 10, avg: 60 },
    { id: 'HP', yValue: 20, category: 'T', min: 7, avg: 14 },
    { id: 'Yahoo', yValue: 70, category: 'T', min: 14, avg: 40 },
    { id: 'Huawei', yValue: 32, category: 'T', min: 4, avg: 17 },
    { id: 'Baidu', yValue: 80, category: 'T', min: 10, avg: 25 },

];
/**drug struct end */
/**temporal struct Start */
export const TempCategoryInfo: Category[] = [
    { category: 'East' },
    { category: 'West' },
    { category: 'North' },
];
export const StatsTempBar: BarItem[] = [
    { id: 1, xValue: 'Apple', yValue: 100, category: 'QLD,NSW' },
    { id: 2, xValue: 'Apple', yValue: 80, category: 'All Capital' },
    { id: 3, xValue: 'Apple', yValue: 20, category: 'All Reginal' },
    { id: 4, xValue: 'IBM', yValue: 70, category: 'QLD,NSW' },
    { id: 5, xValue: 'IBM', yValue: 52, category: 'All Capital' },
    { id: 6, xValue: 'IBM', yValue: 20, category: 'All Reginal' },
    { id: 7, xValue: 'IBM', yValue: 70, category: 'QLD,NSW' },
    { id: 8, xValue: 'IBM', yValue: 42, category: 'All Capital' },
    { id: 9, xValue: 'IBM', yValue: 26, category: 'All Reginal' }
];
/**temporal struct end */
/**sites struct Start */
export const SitesCategoryInfo: Category[] = [
    { category: 'East' },
    { category: 'West' },
    { category: 'North' },
    { category: 'South' }
];
export const StatsSitesBox: BoxItem[] = [
    { id: 100, yValue: 100, category: 'T', min: 30, avg: 70 },
    { id: 201, yValue: 80, category: 'C', min: 10, avg: 60 },
    { id: 203, yValue: 20, category: 'T', min: 7, avg: 14 },
    { id: 105, yValue: 70, category: 'C', min: 14, avg: 40 },
    { id: 167, yValue: 32, category: 'T', min: 4, avg: 17 },
    { id: 182, yValue: 80, category: 'T', min: 10, avg: 25 },
    { id: 219, yValue: 20, category: 'T', min: 7, avg: 14 },
    { id: 112, yValue: 70, category: 'C', min: 14, avg: 40 },
    { id: 134, yValue: 32, category: 'T', min: 4, avg: 17 },
    { id: 186, yValue: 80, category: 'T', min: 10, avg: 25 },
    { id: 223, yValue: 20, category: 'T', min: 7, avg: 14 },
    { id: 108, yValue: 70, category: 'C', min: 14, avg: 40 },
];
/**sites struct end */
/**state struct Start */
export const StateCategoryInfo: Category[] = [
    { category: 'East' },
    { category: 'West' },
    { category: 'North' },
    { category: 'South' }
];
export const StatsStateBar: BarItem[] = [
    { id: 1, xValue: 'Apple', yValue: 100, category: 'Capital' },
    { id: 2, xValue: 'Google', yValue: 80, category: 'Capital' },
    { id: 3, xValue: 'IBM', yValue: 20, category: 'Reginal' },
    { id: 4, xValue: 'Apple', yValue: 70, category: 'Capital' },
    { id: 5, xValue: 'Google', yValue: 52, category: 'Capital' },
    { id: 6, xValue: 'IBM', yValue: 20, category: 'Reginal' },
    { id: 7, xValue: 'Apple', yValue: 70, category: 'Capital' },
    { id: 8, xValue: 'Google', yValue: 42, category: 'Capital' },
    { id: 9, xValue: 'IBM', yValue: 26, category: 'Reginal' },
    { id: 10, xValue: 'Apple', yValue: 70, category: 'Capital' },
    { id: 11, xValue: 'Google', yValue: 42, category: 'Reginal' },
    { id: 12, xValue: 'IBM', yValue: 26, category: 'Reginal' }
];
/**state struct end */
/**national struct Start */
/**national struct is same as state struct end */