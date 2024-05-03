import { Component, ReactNode } from "react";
import styles from '../index.module.css';

export default class CartProject extends Component {

  render(): ReactNode {
    return (
      <div className={styles.item_project}>
        <p>cart</p>
      </div>
    )
  }
}