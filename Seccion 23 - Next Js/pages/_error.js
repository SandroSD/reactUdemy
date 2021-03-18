import React from 'react';
import Link from 'next/link';

// Custom error page for 404 error.
const indexPage = () => (
    <div>
        <h1>Oops, something went wrong.</h1>
        <p>Try <Link href="/"><a>going back</a></Link>.</p>
    </div>
);

export default indexPage;