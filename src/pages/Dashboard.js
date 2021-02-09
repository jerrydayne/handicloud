import React, {useState} from 'react';

import Documents from '../components/Documents';
import DocumentsData  from '../data/DocumentsData';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [docs, setDocs] = useState(DocumentsData);

    return (
        <div className="page-content">
            {loading ? <h3>Loading...</h3> : <Documents docs={docs} />}
        </div>
    )
}

export default Dashboard
