import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import db from '../../server';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { setTagQ } from '../../redux/appActions';
import { useDispatch } from 'react-redux';


export default function Tags() {
  const [ tag, setTag ] = useState([]);
  const [ tags, setTags ] = useState('');
  const dispatch = useDispatch();
  
  const getData = () => {
    axios
    .get(`${db}/tag`)
    .then((res) => {
        setTag(res.data.data)
      }) 
      .then(function (response) {
    })
    .catch(function (error) {
        console.log(error);
    });
    };

    useEffect(() => {
      getData();
    }, []);

    dispatch(setTagQ(tags));
    

    return (
      <>
          <ToggleButtonGroup className="mb-5 mt-2" type="">
        {tag.map((x) =>{
        return (
              <ToggleButton key={x._id}>
                <Button 
                  value={tags}
                  onClick={() => setTags(x.name)}
                  >{x.name}
                </Button>
              </ToggleButton>
              )})}
          </ToggleButtonGroup>
      </>
    );
};
