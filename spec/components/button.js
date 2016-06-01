/**
 * Created by denvey on 16/4/19.
 */
import React from 'react';
import { Button, ButtonGroup } from '../../src/components/Button';

const ButtonTest = () => (
  <section>
    <h5>Buttons</h5>
    <p>lorem ipsum...</p>

    <Button href="http://github.com/">Github</Button>
    <ButtonGroup>
      <Button href="http://github.com/">reui</Button>
      <Button href="http://github.com/">reui</Button>
      <Button href="http://github.com/">reui</Button>
    </ButtonGroup>
  </section>
);

export default ButtonTest;