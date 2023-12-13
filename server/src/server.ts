import express, { Response, Request } from "express";
import { validationResult } from "express-validator";
import cors from "cors";
import {
    validateEmailAndNumber,
    linearSearch,
    readRecords,
    debounce,
} from "../lib/utils";

const app = express();
const port = 5000;

const debounceTime = 5000;

app.use(cors());
app.use(express.json());

const handleRequest = debounce(async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // If validation passed
    const { email, number } = req.body;

    try {
        const records = await readRecords();
        const foundItems = linearSearch(records, email, number);

        res.send(foundItems);
    } catch (error) {
        console.error(
            "Error processing find request:",
            (error as Error).message
        );
        res.status(500).json({ error: "Internal Server Error" });
    }
}, debounceTime);

app.post("/find", validateEmailAndNumber(), handleRequest);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
