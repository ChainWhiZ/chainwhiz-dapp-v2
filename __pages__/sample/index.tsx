import styles from './sample.module.scss'
import Segment1 from './segments/segment1'
import Segment2 from './segments/segment2'

export default function Sample() {
  const name = 'alex'
  return (
    <div className={styles.sample}>
      Sample
      <Segment1 />
      <Segment2 />
    </div>
  )
}
