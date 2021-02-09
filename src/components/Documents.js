import React from 'react';
import Document from './Document';

const Documents = ({ docs }) => {
    return (
         <div className="cards-row">
        {docs.map((doc) => {
          return (
            <Document 
                key={doc.id} 
                {...doc}
            ></Document>
          )
        })}
      </div>
    )
}

export default Documents
