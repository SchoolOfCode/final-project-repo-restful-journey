// import {render, screen} from '@testing-library/react'
// import RecipePage from './RecipePage'

// describe('fetch', ()=>{
// test('renders recipe if request succeds', async() =>{
    
//     window.fetch = jest.fn();
//     window.fetch.mockResolvedValueOnce({
//         json: async () => [{title: 'soup'}]
//     })

//     render(<RecipePage/>)

//     const recipeTitle = await screen.findByTestId('recipe-title', {}, 4000);

//     expect(recipeTitle).toBeInTheDocument()
// })
// })
import React from 'react';
import { render, screen } from '@testing-library/react';

import RecipePage from "./RecipePage";



describe("Test", () => {
    let originalFetch;

    beforeEach(() => {
        originalFetch = global.fetch;
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({
                title: "Testing something!"
            })
        }));
    });

    afterEach(() => {
        global.fetch = originalFetch;
    });

    it('Should have proper description after data fetch', async () => {

        // need to put mock logic here to make it work

        render(<RecipePage />);
        const description = await screen.findByTestId('recipe-title');
        expect(description.textContent).toBe("Testing something!");
    });
});