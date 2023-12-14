import "./record.css";
import { type Data } from "../../lib/definitions";

export default function Record({ record }: { record: Data }) {
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