import { Component, ReactNode } from "react";
import styles from './index.module.css';
import CartProject from "./components/card_project";

export default class Profile extends Component {
  render(): ReactNode {
    return (
      <div className={styles.box}>
        <CartProject />
        <CartProject />
        <CartProject />
      </div>
    )
  }
}