import { useState } from 'react'

function normalizeName(value) {
  return value
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[أإآ]/g, 'ا')
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
    .replace(/\s+/g, '')
}

const namesToMask = new Set(
  [
    'عبده الابيض',
    'abdoelabyad',
    'abdo elabyad',
    'عبدالرحمن سامح',
    'abdelrhman sameh',
    'عبدالرحمن',
  ].map(normalizeName),
)

export default function App() {

  const [Header, setHeader] = useState("يستفتيكم المهندس عبدالرحمن سامح")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [hasChanged, setHasChanged] = useState(false)
  const [validationMessage, setValidationMessage] = useState("")


function changeName(event) {
  event.preventDefault()
  const trimmedName = name.trim()
  const trimmedPhone = phone.trim()

  if (!trimmedName || !trimmedPhone) {
    setValidationMessage("من فضلك اكتب الاسم ورقم التليفون.")
    return
  }

  setValidationMessage("")
  const displayName = namesToMask.has(normalizeName(trimmedName))
    ? '*'.repeat(trimmedName.length)
    : trimmedName

  if (displayName !== trimmedName) setName(displayName)
  setHeader(`كسمك غلط يا ${displayName}`)
  setHasChanged(true)
}



  return (
    <div className='bg-sky-950 flex flex-col items-center justify-center h-screen w-screen   '>
      <h1>
        {Header}
        {hasChanged && (
          <svg
            className="ml-2 inline h-5 w-5 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            role="img"
            aria-label="تحذير"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 2.8 20h18.4L12 3Z M12 9v4m0 3h.01" />
          </svg>
        )}
      </h1>
      {!hasChanged && (
        <p className="text-white">بص يصحبي انا بشتغل علي مشروع وعايز اخد رايك في حاجه اعمل تسجيل وهيظهرلك اسئله جاوب ع حسب زوقك</p>
      )}
       <br></br>
        <form onSubmit={changeName} noValidate>
          <label htmlFor="sign-in"></label>
      <input
        value={name}
        onChange={(event) => {
          setName(event.target.value)
          if (event.target.value.trim() && phone.trim()) setValidationMessage("")
        }}
        placeholder="username"
        id="sign-in"
        type="text"
        required
        className="bg-amber-50 py-1 px-2 rounded gap-5"
      />
    <br></br>
    <br></br>
     
      <label htmlFor="phone" className='gap-5'></label>
      <input
        id="phone"
        value={phone}
        onChange={(event) => {
          setPhone(event.target.value)
          if (name.trim() && event.target.value.trim()) setValidationMessage("")
        }}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required
        className='bg-amber-50 py-1 px-2 rounded'
        placeholder="phone number"
      />
      {validationMessage && <p className="validation-message" role="alert">{validationMessage}</p>}
      <br></br>
      <br></br>
     <button
       className='bg-amber-50 rounded pl-3 pb-3'
       type="submit"
       disabled={!name.trim() || !phone.trim()}
     >
       Change name
     </button>
        </form>
    </div>

  )

  
  
}
