import "./result.css";
import { type Data } from "../../lib/definitions";

export default function Result({ foundRecords }: { foundRecords: Data[] }) {
    if (foundRecords.length > 0) {
        return (
            <ul className="message found">
                {foundRecords.map((el: Data) => (
                    <Record key={el.number} record={el} />
                ))}
            </ul>
        );
    } else {
        return (
            <div className="message not-found">
                <h3>Nothing found. Check the data and try again.</h3>
            </div>
        );
    }
}

function Record({ record }: { record: Data }) {
    return (
        <li className="record">
            <div>
                <span>Email:</span>
                <span>{record.email}</span>
            </div>
            <div>
                <span>Number:</span>
                <span>{record.number}</span>
            </div>
        </li>
    );
}
