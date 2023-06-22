import { useState } from "react"
import { currencies } from "../currencies"

export const Form = ( {calculateResult, result}) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const[amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }
}