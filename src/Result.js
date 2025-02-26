import * as React from 'react'
import style from './Header.module.css'

function Result({number,term})
{
    let Result;
    if(term)
    {
        if(term>number)
        {
            Result='Lower'
        }
        else if(term<number)
        {
           Result='Higher'
        }
        else if(term==number)
        {
            Result="Good!! That's Right Answer"
        }
        else{
            Result="Please!! Enter a valid input"
        }

    }
   return(
    <div className={style.file}>
         <p>You Gussed:{Result}</p>
    </div>
   )
}

export default Result