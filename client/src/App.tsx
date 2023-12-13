import "./App.css";
import axios from "axios";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { validateEmail } from "./lib/utils";
import { type Data } from "./lib/definitions";
import Result from "./components/Result/Result";

export default function App() {
    const [email, setEmail] = useState<string>("");
    const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

    const [numberMask, setNumberMask] = useState<string>("");

    const [foundRecords, setFoundRecords] = useState<Data[]>([]);

    const [requestCounter, setRequestCounter] = useState<number>(0);

    //mask for number field
    function handleNumChange(event: ChangeEvent<HTMLInputElement>) {
        const max = 6; // max of numbers
        let inputValue = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        let formattedValue = "";

        // Limit the input
        if (inputValue.length > max) {
            inputValue = inputValue.slice(0, max);
        }

        // create mask
        for (let i = 0; i < inputValue.length; i++) {
            if (i === 2 || i === 4) {
                formattedValue += "-";
            }
            formattedValue += inputValue[i];
        }

        setNumberMask(formattedValue);
    }

    function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
        setIsValidEmail(true);
    }

    // send data
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!validateEmail(email)) {
            setIsValidEmail(false);
            return;
        }

        try {
            const number = numberMask.replace(/-/g, "");

            const response = await axios.post("http://localhost:5000/find", {
                email,
                number,
            });

            setFoundRecords(response.data);

            if (requestCounter === 0) {
                setRequestCounter(1);
            }
        } catch (error) {
            console.error(
                `Error sending data to backend:
                ${(error as Error).message}`
            );
        }
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        placeholder="jon@doe.com"
                        onChange={handleEmailChange}
                        required
                    />
                    {
                        <small
                            className={`warning-message ${
                                isValidEmail ? "" : "visible"
                            }`}
                        >
                            Please enter a valid email address.
                        </small>
                    }
                </div>
                <div>
                    <label htmlFor="number">Number</label>
                    <input
                        id="number"
                        type="text"
                        value={numberMask}
                        placeholder="00-00-00"
                        max="8"
                        onChange={handleNumChange}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

            <div
                className={`${
                    requestCounter ? "visible" : ""
                } result`}
            >
                <Result foundRecords={foundRecords} />
            </div>
        </main>
    );
}
