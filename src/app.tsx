import React from 'react';
import tickSvg from './asserts/tick.svg?raw';
import { a } from './asserts/test.json';
import styles from './index.module.scss';

const App: React.FunctionComponent = props => {
  console.log(a)
  return (
    <div className={styles.root} dangerouslySetInnerHTML={{ __html: tickSvg }}/>
  )
}

export default App;