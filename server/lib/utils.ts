import fs from "fs/promises";
import path from "path";
import { body, ValidationChain } from "express-validator";
import { type Response, type Request } from "express";
import { type Data } from "./definitions";

// handler for long response processing
export const debounce = (
    handler: (req: Request, res: Response) => void,
    time: number
) => {
    let timer: NodeJS.Timeout;

    return (req: Request, res: Response) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            handler(req, res);
        }, time);
    };
};

// Read JSON file
const filePath = path.join(__dirname, "data.json");

export const readRecords = async (): Promise<any[]> => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        throw new Error(`Error reading JSON file: ${(error as Error).message}`);
    }
};

// Search records
export const linearSearch = (
    fileData: Data[],
    email: string,
    number: string
): Data[] => {
    const result: Data[] = [];

    for (let item of fileData) {
        // strict data if number exist or maby use || for less strict result and show all records depends on email or number
        if (number && (item.number === number && item.email === email)) {
            result.push(item);
        } else if (!number && item.email === email) {
            result.push(item);
        }
    }

    return result;
};

// Validate data from the client
export const validateEmailAndNumber = (): ValidationChain[] => [
    body("email").isEmail().withMessage("Invalid email"),
    body("number")
        .optional({ nullable: true }) // Allow undefined or null
        .custom((value) => value === "" || !isNaN(Number(value))) // Allow empty string or a numeric value
        .withMessage("Invalid number"),
];
