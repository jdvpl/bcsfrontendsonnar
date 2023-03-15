import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'
import { parseHeadProperties } from '../../../utils/dynamicHeads';

const CustomHead = () => {
    const router = useRouter();
    const actualPath = router?.asPath || "/";
    return (
        <Head>
            <meta data-testid="charset" charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" data-testid="viewport" />
            <meta name="description" content={parseHeadProperties(actualPath)?.description} data-testid="description" />
            <title>{parseHeadProperties(actualPath)?.title} - Banco Caja Social</title>
        </Head>
    )
}

export default CustomHead;