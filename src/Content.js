import React from 'react'
import C from './C.mp3';
import Cs from './Cs.mp3';
import D from './D.mp3';
import Ds from './Ds.mp3';
import E from './E.mp3';
import F from './F.mp3';
import Fs from './Fs.mp3';
import G from './G.mp3';
import Gs from './Gs.mp3';
import A from './A.mp3';
import As from './As.mp3';
import B from './B.mp3';
import C2 from './C2.mp3';
import Cs2 from './Cs2.mp3';
import D2 from './D2.mp3';
import Ds2 from './Ds2.mp3';
import E2 from './E2.mp3';





const Content = ({playSound}) => {
  return (
    <div className='piano-ui'>
        <ul className='piano-keys'>
            <li className="white keys" onClick={()=>playSound(C)}><span>C4</span></li>
            <li className="black keys" onClick={()=>playSound(Cs)}><span></span></li>
            <li className="white keys" onClick={()=>playSound(D)}><span>D4</span></li>
            <li className="black keys" onClick={()=>playSound(Ds)}><span></span></li>
            <li className="white keys" onClick={()=>playSound(E)}><span>E4</span></li>
            <li className="black keys" onClick={()=>playSound()}><span></span></li>
            <li className="white keys" onClick={()=>playSound(F)}><span>F4</span></li>
            <li className="black keys" onClick={()=>playSound(Fs)}><span></span></li>
            <li className="white keys" onClick={()=>playSound(G)}><span>G4</span></li>
            <li className="black keys" onClick={()=>playSound(Gs)}><span></span></li>
            <li className="white keys" onClick={()=>playSound(A)}><span>A4</span></li>
            <li className="black keys" onClick={()=>playSound(As)}><span></span></li>
            <li className="white keys" onClick={()=>playSound(B)}><span>B4</span></li>
            <li className="black keys" onClick={()=>playSound()}><span></span></li>
            <li className="white keys" onClick={()=>playSound(C2)}><span>C5</span></li>
            <li className="black keys" onClick={()=>playSound(Cs2)}><span></span></li>
            <li className="white keys" onClick={()=>playSound(D2)}><span>D5</span></li>
            <li className="black keys" onClick={()=>playSound(Ds2)}><span></span></li>
            <li className="white keys" onClick={()=>playSound(E2)}><span>E5</span></li>
          
        </ul>
        
       
    </div>
  )
}

export default Content