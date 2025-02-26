import * as React from 'react';
import style from './Header.module.css'
import Result from './Result';
import { useState } from 'react';
const Secreatnum=Math.floor(Math.random()*50+1)/*I use to take one to 9 value we need 10 also put +1 it will take 10 */

function Numberguessing()
{
    const [data,setData]=useState('')
    // console.log(Secreatnum)
    const handle=(e)=>{
        setData(e.target.value)
    }
    return(
        <div className={style.color}>
           <div className={style.container}>
            <div className={style.font}>
                <label htmlFor='term'>Guess the Number between 1 to 50</label>{/* htmlfor is use to identify which label input is this  */}
     
            </div>
            <input type='text' id='term' name='term' onChange={handle}/>{/*by usid the id value it take value for specific label*/}
            <Result number={Secreatnum} term={data}/>
           </div>
           <p className={style.align1}><span className={style.color1}>©</span> All Copyrights are reserved by Meera 2025</p>
        </div>


    )
}
export default Numberguessing