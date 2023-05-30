import About from '@/components/About/About';
import Apps from '@/components/Apps/Apps';
import Card from '@/components/Card/Card';
import Future from '@/components/Feuter/Feuter';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import React from 'react';

const index = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <About/>
            <Future/>
            <Apps/>
            <Card/>
        </div>
    );
};

export default index;