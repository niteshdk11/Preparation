import React from 'react'
import styles from '../css/abc.module.css'
import Image from 'next/image'
import Myimg from '../../public/images/11.png'
const LearnCss = () => {
  return (
   <>
   <div className='my-text-60 bg-white'>



    </div>
{/* <h3 className={styles.bg_11}>Try us ing css modules</h3> */}
{/* ? ? Image */}
<Image src={Myimg}width={200}></Image>
<img src="/images/11.png" alt="" />


</>
  )
}

export default LearnCss