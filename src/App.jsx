import { useState } from 'react'

export default function App() {

  const [Header, setHeader] = useState("يستفتيكم المهندس عبدالرحمن سامح")
  const [name, setName] = useState("")


function changeName() {

  setHeader( `كسمك غلط يا ${name}`)
  
}



  return (
    <div className='bg-slate-600 flex flex-col items-center justify-center h-screen w-screen   '>
      <h1> {Header} </h1>
      <p className="text-white">بص يصحبي انا بشتغل علي مشروع وعايز اخد رايك في حاجه اعمل تسجيل وهيظهرلك اسئله جاوب ع حسب زوقك</p>
       <br></br>
        <form action="sign in">
          <label htmlFor="sign-in"></label>
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="username"id="sign-in" type="text"  className="bg-amber-50 py-1 px-2 rounded gap-5" />
    <br></br>
    <br></br>
     
      <label htmlFor="password" className='gap-5'></label>
      <input type="password"className='bg-amber-50 py-1 px-2 rounded'placeholder="Password"/>
      <br></br>
     <button onClick={changeName} className='bg-amber-50 rounded  pl-3' type="button" >Change name</button>
        </form>
    </div>

  )

  
  
}
