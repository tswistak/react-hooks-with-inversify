import React from 'react';
import { useInjection } from './ioc.react';
import { IProvider } from './providers';

export const Hello: React.FC = () => {
    const provider = useInjection<IProvider<string>>('nameProvider');

    return (
        <h1>Hello {provider.provide()}!</h1>
    );
};
