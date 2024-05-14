import React,{useState} from 'react'; 
import { useSignup } from '../../hooks/useSignup';
import './Signup.css';


export default function Signup() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [displayName,setDisplayName]=useState('');
  const [thumbnail,setThumbnail]=useState(null);
  const [thumbnailError,setThumbnailError]=useState(null);
  const {signup, isPending, error} =useSignup()

  const handleSubmit=(e)=>{
    e.preventDefault();
    signup(email, password, displayName, thumbnail)
  }

  const handleFileChange=(e)=>{
    setThumbnail(null);
    let selected =e.target.files[0];
    console.log(selected);

    if(!selected){
      setThumbnailError('Please select a file');
      return
    }
    if(!selected.type.includes('image')){
      setThumbnailError("Selected file must be an image");
      return
    }
    if(selected.size > 1000000){
      setThumbnailError('Image file size must be less than 100kb');
      return
    }
    setThumbnail(null);
    setThumbnail(selected);
    console.log("thumbnail updated");
  }


  return (
      <form className='auth-form' onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label>
          <span>Email:</span>
          <input type='email' required onChange={(e)=>setEmail(e.target.value)} value={email} />
        </label>
        <label>
          <span>Password:</span>
          <input type='password' required onChange={(e)=>setPassword(e.target.value)} value={password} />
        </label>
        <label>
          <span>displayName:</span>
          <input type='text' required onChange={(e)=>setDisplayName(e.target.value)} value={displayName} />
        </label>
        <label>
          <span>Profile thumbnail:</span>
          <input type='file' required onChange={handleFileChange} />
          {thumbnailError && <div className='error'>{thumbnailError}</div>}
        </label>
        { !isPending && <button className='btn'>Signup</button>}
        { isPending && <button className='btn' disabled>loading</button>}
        {error && <div className='error'>{error}</div>}
      </form>
  )
}
