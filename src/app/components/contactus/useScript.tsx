// components/HubspotForm.tsx
"use client"
import { useEffect } from 'react';

const HubspotForm = () => {
  useEffect(() => {
    fetch('https://sheetdb.io/api/v1/dbdekk9xjdaoq', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'id': "INCREMENT",
                'name': "Mark",
                'age': 18
            }
        ]
    })
})
  .then((response) => response.json())
  .then((data) => console.log(data));

  }, []);

  return <div id="hubspotForm"></div>;
};

export default HubspotForm;