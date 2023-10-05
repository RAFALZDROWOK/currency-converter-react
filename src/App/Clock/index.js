import { useState } from 'react';
import { useEffect } from 'react';
import { Wrapper } from './styled';
import { useCurrentDate } from '../../useCurrentDate';

export const Clock = () => {
    
    const date = useCurrentDate();

    return (
        <Wrapper>
            Dzisiaj jest
            {" "}
            {new Date().toLocaleDateString(undefined, {
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                day: "numeric",
                month: "long",
            })}
        </Wrapper>
    );
}