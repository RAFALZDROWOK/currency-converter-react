import { useState } from "react"
import { currencies } from "../currencies"
import { Result } from "./Result";
import { Button, Field, Header, LabelText, Info, Select } from "./styled.js";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form onSubmit={onSubmit}>
            <Header>Przelicznik Walut</Header>
            <p className="info">Pola oznaczone * są wymagane </p>
            <p>
                <label>
                    <LabelText> Kwota w zł:*</LabelText>
                    <Field
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
                        placeholder="Wpisz kwotę w zł"
                        required min="1"
                        step="0.01" 
                    />
                </label>
            </p>
            <p>
                <label>
                    <LabelText> Waluta:*</LabelText>
                    <Select
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
                    </Select>
                </label>
            </p>
            <p>
                <Button>Przelicz!</Button>
            </p>
            <Info>
                Kursy pochodzą ze strony https://mybank.pl/kursy-walut/kupno-sprzedaz/ z tabeli C z dnia
                2023-01-16
            </Info>

            <Result result={result} />
        </form>
    );
};