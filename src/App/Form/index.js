import { useState } from "react"
import { currencies } from "../currencies"
import './style.css';
import { Result } from "./Result";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult (currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="header">Przelicznik Walut</h1>
            <p className="info">Pola oznaczone * są wymagane </p>
            <p>
                <label>
                    <span className="labelText"> Kwota w zł:*</span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        className="label__field"
                        type="number"
                        placeholder="Wpisz kwotę w zł"
                        required min="1"
                        step="0.01" />
                </label>
            </p>
            <p>
                <label>
                    <span className="labelText"> Waluta:*</span>
                    <select
                        className="select"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </select>
                </label>
            </p>
            <p>
                <button className="button">Przelicz!</button>
            </p>
            <p className="info">
                Kursy pochodzą ze strony https://mybank.pl/kursy-walut/kupno-sprzedaz/ z tabeli C z dnia
                2023-01-16
            </p>

            <Result result={result} />
        </form>
    );
};