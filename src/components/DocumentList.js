import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/documents').then((response) => {
      setDocuments(response.data.rows);
    });
  }, []);

  return (
    <div>
      <h2>Document List</h2>
      <ul>
        {documents.map((document) => (
          <li key={document.id}>{document.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
