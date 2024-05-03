import { Component, ReactNode } from "react";
import styles from './index.module.css';
import CartProject from "./components/card_project";

export default class Profile extends Component {
  render(): ReactNode {
    return (
      <div className={styles.box}>
        <CartProject
          title={'01'}
          images={[]}
          thumbnail={'https://placehold.co/600x600'}
          description={''}
          datetime={'11/2023 - 03/2024'}
        />
        <CartProject
          title={'01'}
          images={[]}
          thumbnail={'https://placehold.co/600x600'}
          description={''}
          datetime={'11/2023 - 03/2024'}
        />
        <CartProject
          title={'01'}
          images={[]}
          thumbnail={'https://placehold.co/600x600'}
          description={''}
          datetime={'11/2023 - 03/2024'}
        />
      </div>
    )
  }
}