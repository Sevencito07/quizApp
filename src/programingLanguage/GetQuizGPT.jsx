
import { useState,useEffect, cloneElement } from 'react'
import  python from "../icons/python.png"
import  user from "../icons/user.png"
import  ruby from "../icons/ruby.png"
import  rust from "../icons/rust.png"
import cSharp from "../icons/c-sharp.png"
import cPlus from "../icons/c-.png"
import  go from "../icons/go.png"
import  kotlin from "../icons/kotlin.png"
import  swift from "../icons/swift.png"
import  typescript from "../icons/typescript.png"
import { getIDdata } from "../db/firebase";
import javascript from "../icons/javascript.png"
import { dataCode} from './data.js'



function GetQuizGPT() {
const [isLoading, setIsLoading] = useState(false);
const [lenguage, setLenguage] = useState("python")
const [Data, setData] = useState([])
const [hiddenCount, setHiddenCount] = useState(0);
const [isVisible, setIsVisible] = useState(false);
const [announcement, setAnnouncement] = useState(false)
const [isColorChanged, setIsColorChanged] = useState(false);
const [isColorChanged2, setIsColorChanged2] = useState(false);
const [countKD, setCountKD] = useState(0)
const [idlist, setIDlist] = useState("list1");


async function getLinks() {
  /*
  const docs = []; 
  const docSnapshot = await getIDdata(idlist, lenguage);
  if (docSnapshot.exists) {
    const docData = docSnapshot.data();
    docs.push(docData);

  } */
///setData(docs)
 setData(dataCode);

}



const toggleVisibility = (ProgramingLenguage) => {
  setIsVisible(!isVisible);
  setLenguage(ProgramingLenguage)
 
};
///get individual idlist////////
const handleModuleNumber = (a) => {
  console.log(a)
  const listName = `list${a}`;
  setIDlist(listName)
    getLinks();
};

//////modules 
const modules1 = Array.from({ length: 18 }, (_, index) => ({value: (index + 1) }));
const modules2 = Array.from({ length: 18 }, (_, index) => ({value: (index + 19) ,}));
const modules3 = Array.from({ length: 18 }, (_, index) => ({value: (index + 37) ,}));
const modules4 = Array.from({ length: 18 }, (_, index) => ({value: (index + 55) ,}));
const modules5 = Array.from({ length: 18 }, (_, index) => ({value: (index + 73) ,}));

    

const handelSetTicket=(test)=>{
  if(test == "pass07"){
  
  setCountKD(countKD + 1)
    if (hiddenCount < Data.length * 10) { // We multiply by 10 because there are 10 divs for each element in Data
    setHiddenCount(hiddenCount + 1);

    setIsColorChanged(true);
    const timer = setTimeout(() => {
      setIsColorChanged(false);
    }, 500);
    return () => clearTimeout(timer);

     }else if(hiddenCount  >  9){
  
      setAnnouncement(true);
       setTimeout(() => {
        setAnnouncement(false);
        setCountKD(0)
      }, 3000);
      
     }
 

  }else{
    console.log("bad choise")
    if (hiddenCount < Data.length * 10) { 
      setHiddenCount(hiddenCount + 1);

      setIsColorChanged2(true);
      const timer = setTimeout(() => {
        setIsColorChanged2(false);
      }, 500);

    return () => clearTimeout(timer);

    }else if(hiddenCount  >  9){
      setAnnouncement(true);
       setTimeout(() => {
        setAnnouncement(false);
      }, 3000);
   
     }
}
if (countKD == 10){
  const curretKDTotal = localStorage.setItem('countKDTotal')
  let newKD = curretKDTotal + countKD;
  localStorage.setItem('countKDTotal',newKD )
}

}




  useEffect(() => {
  getLinks();
}, []);

return (
    <>
  <div className="main">
  <div  className="lists">
    <div className="container">
      <div className="pythonSecction"   style={{ display: isVisible ? 'flex' : 'none'}}>
      
        
      <div className="divModules">
  <h2 className="h1Modules">Module Section</h2>
  <div className="conteinerModules">
    <div className="modulesLines"> 
      {modules1.map((module) => (
        <span key={module.value} className="moduleNumber" onClick={() => handleModuleNumber(module.value)}>
          {module.value}
        </span>
      ))}
    </div>
    <div className="modulesLines"> 
      {modules2.map((module) => (
        <span key={module.value} className="moduleNumber" onClick={() => handleModuleNumber(module.value)}>
          {module.value}
        </span>
      ))}
    </div>
    <div className="modulesLines"> 
      {modules3.map((module) => (
        <span key={module.value} className="moduleNumber" onClick={() => handleModuleNumber(module.value)}>
          {module.value}
        </span>
      ))}
    </div>
    <div className="modulesLines"> 
      {modules4.map((module) => (
        <span key={module.value} className="moduleNumber" onClick={() => handleModuleNumber(module.value)}>
          {module.value}
        </span>
      ))}
    </div>
    <div className="modulesLines"> 
      {modules5.map((module) => (
        <span key={module.value} className="moduleNumber" onClick={() => handleModuleNumber(module.value)}>
          {module.value}
        </span>
      ))}
    </div>
  </div>
</div>  
     
       </div>
 
      <nav>
     <div className="separateDiv1">
     <div className="navDiv"  /*onClick={()=>toggleVisibility(ruby)}*/><img src={ruby} alt="" /></div>
<div className="navDiv"  /*onClick={()=>toggleVisibility(python)}*/><img src={python} alt="" /></div>
<div className="navDiv"  /*onClick={()=>toggleVisibility("c++")}*/><img src={cPlus} alt="" /></div>
<div className="navDiv"  /*onClick={()=>toggleVisibility("c#")}*/><img src={cSharp} alt="" /></div>
<div className="navDiv" /* onClick={()=>toggleVisibility("Javascript")}*/><img src={javascript} alt="" /></div>
<div className="navDiv"  /*onClick={()=>toggleVisibility("Go")}*/><img src={go} alt="" /></div>
<div className="navDiv"  /*onClick={()=>toggleVisibility("kotlin")}*/><img src={kotlin} alt="" /></div>
<div className="navDiv"  /*onClick={()=>toggleVisibility("swift")}*/><img src={swift} alt="" /></div>
<div className="navDiv"  /*onClick={()=>toggleVisibility("rust")}*/><img src={rust} alt="" /></div>
<div className="navDiv"  /*onClick={()=>toggleVisibility("typescript")}*/><img src={typescript} alt="" /></div>
     </div>
     <div className="separateDiv2">
      <div className="navDiv"><img src={user} alt="" /></div>
     </div>
      </nav>
      <div className="question">
        <p><strong>Language:</strong> <span className="correct">{lenguage}</span></p>
        <p><strong>code:</strong></p>
      </div>
      <div className="options">
      <div className="announcement"     style={{ display: announcement ? 'flex' : 'none'}}>
      <div className="score-container">
      <div className="score-container2">
        <div className="spanDiv">
          <span className="spanNum1">{countKD}</span>
        </div>
        <div className="spanDiv">
          <span className="spanNum2">/</span>
        </div>
        <div className="spanDiv">
          <span className="spanNum3">10</span>
        </div>
      </div>
    </div>
    </div>
      <div className="divContent"></div>
        {Data.map((link, idlist) => (
          <div className="optionIndex" key={idlist}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, idx) => (
              <ul className="individualoption"
           
              style={{
                backgroundColor: isColorChanged ? "green": isColorChanged2? "red": "white",
                transition: "background-color 0.5s ease",
                display: hiddenCount < idlist * 10 + idx ? 'none' : 'flex'
              }}
          
              key={idx}
            >

               <li>
                  <div className="divLetter" onClick={()=>handelSetTicket(link[`A_pass${num}`])}>
                  <pre>
                    <span>{link[`A${num}`].line1}</span>
                    <span>{link[`A${num}`].line2}</span>
                    <span>{link[`A${num}`].line3}</span>
                    <span>{link[`A${num}`].line4}</span>
                    <span>{link[`A${num}`].line5}</span>
                    <span>{link[`A${num}`].line6}</span>
                    <span>{link[`A${num}`].line7}</span>
                    <span>{link[`A${num}`].line8}</span>
                    <span>{link[`A${num}`].line9}</span>
                    <span >{link[`A${num}`].line10 || ''}</span>
                    <span>{link[`A${num}`].line11 || ''}</span>
                    <span>{link[`A${num}`].line12|| ''}</span>
                    <div className={link.defaultClassnameConsole}>
                    <span className={link.defaultClassname}>{link.defaultLine}</span>
                    <span className="consoleStyle" >{link[`A${num}`].line13}</span>
                    <span className="consoleStyle" >{link[`A${num}`].line14}</span>
                    <span  className="consoleStyle" >{link[`A${num}`].line15}</span>
                    <span className="consoleStyle" >{link[`A${num}`].line16}</span>
                    <span  className="consoleStyle" >{link[`A${num}`].line17}</span>
                    </div>
                  </pre>
                  </div>
                </li>
                <li>
                  <div className="divLetter" onClick={()=>handelSetTicket(link[`B_pass${num}`])}>
                  <pre>
                    <span>{link[`B${num}`].line1}</span>
                    <span>{link[`B${num}`].line2}</span>
                    <span>{link[`B${num}`].line3}</span>
                    <span>{link[`B${num}`].line4}</span>
                    <span>{link[`B${num}`].line5}</span>
                    <span>{link[`B${num}`].line6}</span>
                    <span>{link[`B${num}`].line7}</span>
                    <span>{link[`B${num}`].line8}</span>
                    <span>{link[`B${num}`].line9}</span>
                    <span>{link[`B${num}`].line10}</span>
                    <span>{link[`B${num}`].line11}</span>
                    <span>{link[`B${num}`].line12}</span>
                    <div className={link.defaultClassnameConsole}>
                    <span className={link.defaultClassname}>{link.defaultLine}</span>
                    <span className="consoleStyle" >{link[`B${num}`].line13}</span>
                    <span className="consoleStyle" >{link[`B${num}`].line14}</span>
                    <span  className="consoleStyle" >{link[`B${num}`].line15}</span>
                    <span className="consoleStyle" >{link[`B${num}`].line16}</span>
                    <span  className="consoleStyle" >{link[`B${num}`].line17}</span>
                    </div>
                  </pre>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        ))}
    
      </div>
    
    </div>
  </div>

  </div>
    </>
  )
}
export default GetQuizGPT