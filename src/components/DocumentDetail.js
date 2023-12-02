import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DocumentDetail = ({ match }) => {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const { id } = match.params;
    axios.get(`http://localhost:3000/api/documents/${id}`).then((response) => {
      setDocument(response.data);
    });
  }, [match.params]);

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{document.name}</h2>
      <p>Type: {document.type}</p>
      <p>Description: {document.description}</p>
    </div>
  );
};

export default DocumentDetail;
