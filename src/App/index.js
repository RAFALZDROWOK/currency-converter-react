import { useState } from 'react';
import './App.css';
import { currencies } from './currencies';

function App() {
    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies
            .find(({ short }) => short === currency)
            .rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    }

    return (
        <div className="app">
            
        </div>
    );
}

export default App;