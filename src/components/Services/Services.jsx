import styles from "./Services.module.scss";
import { useServicingQuery } from "../../api/fetchDataServices.ts";

function Services() {
  const { data, error, isLoading } = useServicingQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <ul className={styles.list}>
          {data &&
            data.map((el) => (
              <li className={styles.item} key={el.id}>
                <h3>{el.name}</h3>
                <h2>{el.price}</h2>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Services;