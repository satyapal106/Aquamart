import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function MobileDetect() {
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    const isMobile = width <= 768;

}

export default MobileDetect