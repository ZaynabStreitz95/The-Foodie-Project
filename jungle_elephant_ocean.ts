// Importing Libraries
import * as fs from 'fs';
import * as path from 'path';

// Global Variables
let data: any[] = [];

// Constants
const FILE_PATH = path.join(__dirname, 'data.tsv');

// File System Functions
const readFile = (filePath: string): string => {
    return fs.readFileSync(filePath, {encoding: 'utf-8'});
};

// Main Function
const main = (): void => {
    // Read the data file
    let fileData = readFile(FILE_PATH);

    // Parse the file into an array for consumption
    fileData.split('\n').forEach(line => {
        if (line.trim() !== '') {
            let lineData = line.split('\t');
            data.push({
                id: lineData[0],
                budget: lineData[1],
                cuisine: lineData[2],
                nutritionalValue: lineData[3]
            });
        }
    });

    // Build out the function to find healthy meals
    const findHealthyMeals = (budget: number): any[] => {
        let result: any[] = [];

        // Filter the meals by budget
        let meals = data.filter(meal => meal.budget < budget);

        // Iterate through the results
        meals.forEach(meal => {
            if (meal.nutritionalValue === 'high') {
                result.push(meal);
            }
        });

        return result;
    };

    // Print the result of the function
    console.log(findHealthyMeals(20));
};

// Execute the main function
main();