import styles from './styles.module.css';
import { useTaskContext } from '../../../contexts/TaskContext';

export const CountDown = () => {
  const taskContext = useTaskContext();

  console.log(taskContext);

  return <div className={styles.container}>00:00</div>;
};
