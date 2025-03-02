import * as React from 'react';
import './App.css';
import Result from './Result';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
const Secreatnum=Math.floor(Math.random()*50+1)/*I use to take one to 9 value we need 10 also put +1 it will take 10 */

function Numberguessing()
{
    const [data,setData]=useState('')
    // console.log(Secreatnum)
    const handle=(e)=>{
        setData(e.target.value)
    }
    return(
        <div className="color col-12 col-lg-12 col-md-12 col-sm-12">
           <div className="container col-12 col-lg-7 col-md-12 col-sm-8">
            <div className="font col-12 col-lg-9 col-md-9 col-sm-10">
                <label htmlFor='term' className='col-12 col-lg-10 col-md-10 col-sm-12  lead'>Guess the Number between 1 to 50</label>{/* htmlfor is use to identify which label input is this  */}
     
            </div>
            <input type='text' id='term' name='term' onChange={handle} className='col-12 col-lg-12 col-md-12 col-sm-12 lead'/>{/*by usid the id value it take value for specific label*/}
            <Result number={Secreatnum} term={data}/>
           </div>
           
           <p className="align1 "><span className="color1">©</span> All Copyrights are reserved by Meera 2025</p>

          
        </div>

    )
}
export default Numberguessing