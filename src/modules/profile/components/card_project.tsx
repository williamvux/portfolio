import { Component, ReactNode } from "react";
import styles from '../index.module.css';

type CartProjectProps = {
  title: string;
  thumbnail: string;
  images: Array<string>;
  datetime: string;
  description: string;
}

export default class CartProject extends Component<CartProjectProps> {
  render(): ReactNode {
    return (
      <div className={styles.item_project}>
        <img src={this.props.thumbnail} alt={this.props.title} className={styles.img_thumbnail} />
        <div className={styles.box_project_info}>
          <p><i>Name:</i> {this.props.title}</p>
          <p><i>Duration:</i> {this.props.datetime}</p>
          <p><i>Description:</i> {this.props.description}</p>
        </div>
      </div>
    )
  }
}