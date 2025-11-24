import styles from "./MyItem.module.css";
function MyItem(props) {
  let item = props.items;
  return (
    <li className={`list-group-item ${styles["kg-item"]} ${styles["fd-row"]} `}>
      <span className={`${styles["kg-span"]}`}>{item}</span>
    </li>
  );
}

export default MyItem;
