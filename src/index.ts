import styles from './index.module.scss';
import tickSvg from './asserts/tick.svg?raw';
import { a } from './asserts/test.json';
const root = document.getElementById('root');
root?.classList.add(styles.root)
root && (root.innerHTML = tickSvg);
console.log(a, 'a')