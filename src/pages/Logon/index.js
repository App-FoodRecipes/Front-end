import React from 'react';

import { Button } from 'react-bootstrap';

export default function Logon(){
    return(
        <div>
        <Button variant="primary">Primary</Button>
        <Button type="submit">Button</Button>
        <Button as="input" type="button" value="Input" />
        </div>
    );
}