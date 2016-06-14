/**
 * Created by denvey on 16/4/19.
 */
import React from 'react';
import Button from './components/button';
import Modal from './components/modal';
import View from '../src/components/View';
import Page from '../src/components/Page';
// import Slider from './components/Slider';
import style from './style';

const _hrefProject = () => {
  window.href = 'http://reui.yilahe.com';
};

const Root = () => (
  <View>
    <Page>
      <Button />
      <Modal />
    </Page>
  </View>
);
export default Root;