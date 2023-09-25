import { useState } from 'react';
import './styled.js';
import { currencies } from './currencies';
import { Form } from './Form';
import { Clock } from './Clock';
import { Wrapper } from './styled.js';

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
    };

    return (
        <Wrapper>
            <Clock />
            <Form result={result} calculateResult={calculateResult} />
        </Wrapper>
    );
}

export default App;