import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import db from '../../server';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';


export default function Tags() {
  const [ tag, setTag ] = useState([]);
  
  const getData = () => {
    axios
    .get(`${db}/tag`)
    .then((res) => {
        setTag(res.data.data)
      }) 
    };

    useEffect(() => {
      getData();
    }, []);
    

    return (
      <>
        {tag.map((x) =>{
        return (
          <ToggleButtonGroup className="mb-2" type="checkbox" defaultValue={x.name}>
              <ToggleButton id={x.id} value={x.name}>
                <Button key={x._id}>
                  {x.name}
                </Button>
              </ToggleButton>
          </ToggleButtonGroup>
        )})}
      </>
    );
};
