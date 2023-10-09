/* eslint-disable react/prop-types */
import styles from './skills.module.css'
export default function SkillItem({skills}) {
    // console.log({skills})
    const{name,bg}=skills
  return (
    <>
            <div className={styles.skillBGfill} style={{backgroundColor:bg}}>
                {name}
            </div>
    </>
  )
}
