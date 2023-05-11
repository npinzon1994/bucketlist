import '@testing-library/jest-dom';
import {screen, render} from '@testing-library/react';
import App from './App';
import { sortItemsByYear } from './App';

describe("Sort function", () => {
    test("sorts items by year in ascending order", () => {
        const item1 = {description: "learn typescript", year: 2023, id: "G1"};
        const item2 = {description: "learn java", year: 2016, id: "G2"};
        const item3 = {description: "learn react", year: 2022, id: "G3"};
        const items = [item1, item2, item3];
        const sortedItems = sortItemsByYear(items);
        expect(sortedItems).toEqual([item2, item3, item1]);
    })


});