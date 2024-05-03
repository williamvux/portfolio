import { Component, ReactNode } from "react";
import styles from './index.module.css';

export default class Profile extends Component {
  render(): ReactNode {
    return (
      <div className={styles.box}>
        <p>This is profile</p>
      </div>
    )
  }
}