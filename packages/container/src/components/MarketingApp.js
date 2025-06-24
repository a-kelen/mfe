import React, { useRef, useEffect } from 'react';

import { mount as mountMarketingApp } from 'marketing/MarketingApp';

const MarketingApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        mountMarketingApp(ref.current);
    }, []);

    return <div ref={ref} />;
}

export default MarketingApp;
