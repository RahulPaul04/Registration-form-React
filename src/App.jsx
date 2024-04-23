import { useState } from 'react'
import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from '@mui/material/Select';
import {MenuItem} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import {FormControl} from '@mui/material';
import {Button} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/en-gb';
import dayjs from 'dayjs';
import {Modal} from '@mui/material';




import './App.css'

function App() {
  const [Name,setName] = useState("")
  const [mobile,setMobile] = useState("")
  const [address,setAddress] = useState("")
  const [email,setEmail] = useState("")
  const [dob,setdob] = useState(null)
  const [gender,setGender] = useState("")
  const [course,setCourse] = useState("")

  const [open,setOpen] = useState(false)

  const[nameinvalid,setnameinvalid] = useState(false)
  const [mobileinvalid,setmobileinvalid] = useState(false)
  const [addressinvalid,setAddressinvalid] = useState(false)
  const [emailinvalid,setemailinvalid]= useState(false)
  const [dobinvalid,setdobinvalid] = useState(false)

  let dtb = null

  if(dob){
    dtb = `${dob.$D}/${dob.$M+1}/${dob.$y}`
  }

  const validateInput = (tag,fun)=>{
    let {name,value} = tag
    value = value
    fun(value)
    if(name == "name"){
      if(value.match(/^[a-zA-Z\s]+$/
      ) || value ==""){

       setnameinvalid(false)
      }
      else{
        setnameinvalid(true)
      }
    }
    else if(name == "mobile"){
      if(value.match(/^[6-9]\d{9}$/
      ) || value == ""){
        setmobileinvalid(false)
      }
      else{
        console.log("inhere name");

        setmobileinvalid(true)
      }
    }
    else if(name == "address"){
      if(value.match(/^[a-zA-Z0-9\s.,/()]*[^.,/()]$/



      ) || value == ""){
        setAddressinvalid(false)
      }
      else{
        setAddressinvalid(true)
      }
    }
    else if(name == "email"){
      if(value.match(/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      ) || value == ""){
        setemailinvalid(false)
      }
      else{
        setemailinvalid(true)
      }
    }


  }

  const validateDate = (tag)=>{
    console.log(tag)

    if(tag){
      setdobinvalid(true)
    }
    else{
      setdobinvalid(false)
    }
    // let date = `${tag.$D}/${tag.$M+1}/${tag.$y}`
    
  }

  const setdate = (tag) =>{
    setdob(tag)
    

  }

  const submit = (e) =>{
    e.preventDefault()
    console.log(!nameinvalid,!mobileinvalid,!emailinvalid,!addressinvalid,!dobinvalid)
    console.log("values",Name ,mobile, email, dtb , gender , course);
    if(Name && mobile && email && address && dtb && gender && course && !nameinvalid && !mobileinvalid && !emailinvalid && !addressinvalid  && !dobinvalid){
      console.log("Submit successful");
      setOpen(true)
    }
    else{
      alert("Fill all fields")
    }
  }

  const reset = ()=>{
    setName("")
    setMobile("")
    setEmail("")
    setAddress("")
    setdob(null)
    setGender("")
    setCourse("")
    setnameinvalid(false)
    setmobileinvalid(false)
    setAddressinvalid(false)
    setemailinvalid(false)
    setdobinvalid(false)
  }


  return (
    
    <div className='bg-dark full-container' style={{minHeight:'100vh',width:"100%"}}>

        <Modal
          open={open}
          // onClose={}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='d-flex justify-content-center align-items-center'
        >
          <div className='mx-auto rounded shadow p-5 w-md-60 w-95' style={{backgroundColor:"white",color:"black"}}>
            <p className="modal-text">Name : {Name}</p>
            <p className="modal-text">Mobile Number : {mobile}</p>
            <p className="modal-text">Date of Birth : {dtb}</p>
            <p className="modal-text">Address : {address}</p>
            <p className="modal-text">E-Mail : {email}</p>
            <p className="modal-text">Course : {course}</p>
            <p className="modal-text"> Gender : {gender}</p>
            <div className="modal-buttons d-flex justify-content-center gap-3">
              <button className="btn btn-warning" onClick={e => setOpen(false)}>EDIT</button>
              <button className="btn btn-primary" onClick={e => {alert("Submitted Successfully")
            setOpen(false)
            reset()}}>SUBMIT</button>
            </div>
          </div>
          
        </Modal>


        <div className="form col-lg-6 col-md-8 col-10 mx-auto mt-3 mb-3">
          <h2  className="heading p-4">REGISTRATION FORM</h2>
          <form action="" className='mb-5'>
            <div className="d-md-flex ms-3 me-3 gap-3">
              <div className='w-100'>
                <div>
                  <TextField name='name' value={Name} onChange={e =>validateInput(e.target,setName) }  className='w-100' id="name" label="Full Name" variant="outlined"  />
                </div>
                <div className="warning">
                  <p className='ms-1 mb-3 text-danger fw-bolder' style={{opacity:`${nameinvalid?1:0}`}}>Invalid Name </p>
                  {/* <p className='fill-filed text-danger fw-bolder' style={{opacity:`${Name?0:1}`}} >Plese fill this field</p> */}
                </div>
               

              </div>
              <div className='w-100'>
                <div>
                  <TextField name='mobile' value={mobile} onChange={e =>validateInput(e.target,setMobile) }    inputProps={{
                          inputMode: 'numeric',
                          pattern: '[0-9]*',
                        }} className='w-100' id="mobile" label="Mobile Number" variant="outlined" />
                </div>
                <div className="warning">
                  <p className='ms-1 mb-3 text-danger fw-bolder' style={{opacity:`${mobileinvalid?1:0}`}}>Invalid Phone Number</p>
                </div>

              </div>
            </div>
            <div className='ms-3 me-3'>
              <div>
                <TextField multiline minRows={2} name='address' value={address} onChange={e =>validateInput(e.target,setAddress) }  className='w-100' id="address" label="Address" variant="outlined" />
  
              </div>
              <div className="warning">
                  <p className='ms-1 mb-3 text-danger fw-bolder' style={{opacity:`${addressinvalid?1:0}`}}>Invalid Address</p>
              </div>

            </div>

            <div className="d-md-flex ms-3 me-3 gap-3">
              <div className='w-100'>
                <div>
                  <TextField name='email' value={email} onChange={e =>validateInput(e.target,setEmail) } className='w-100' id="Email" label="E-Mail" variant="outlined" />
                </div>
                <div className="warning">
                  <p className='ms-1 mb-3 text-danger fw-bolder' style={{opacity:`${emailinvalid?1:0}`}}>Invalid E-Mail</p>
                </div>
               

              </div>
              <div className='w-100'>
                <div>
                <LocalizationProvider dateAdapter={AdapterDayjs} className="w-100" adapterLocale="en-gb">
                    <DatePicker onError={e => validateDate(e)} disableFuture  name='dob' value={dob} onChange={e =>setdate(e)}  label="Date of Birth" className='w-100'  />
                  </LocalizationProvider>

                </div>
                <div className="warning">
                  <p className='ms-1 mb-3 text-danger fw-bolder' style={{opacity:`${dobinvalid?1:0}`}}>Invalid Date</p>
                </div>

              </div>
            </div>
            <div className="d-md-flex ms-3 me-3 gap-3">
            <div className='w-100'>
              <FormControl className='w-100'>
                <InputLabel id="gender-select">Gender</InputLabel>
    
                  <Select
                    labelId="gender-select"
                    id="gender-select"
                    label="gender"
                    name='gender' value={gender} 
                    onChange={e =>validateInput(e.target,setGender) }
                  >
                    
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
              </FormControl>
              <div className="warning">
                  <p className='ms-1 mb-3 text-danger fw-bolder' style={{opacity:`0`}}>Invalid Value</p>
                </div>
            </div>
            <div className='w-100'> 
              <FormControl className='w-100'>
                <InputLabel id="course-select">Course</InputLabel>
    
                  <Select
                    labelId="course-select"
                    id="course-select"
                    label="course"
                    name='course' value={course} onChange={e =>validateInput(e.target,setCourse) }
                  >
                    
                    <MenuItem value="Biology">Biology</MenuItem>
                    <MenuItem value="Computer Science">Computer Science</MenuItem>
                    <MenuItem value="Commerce">Commerce</MenuItem>
                    <MenuItem value="Humanities">Humanities</MenuItem>
  
                  </Select>
              </FormControl>
              <div className="warning">
                  <p className='ms-1 mb-3 text-danger fw-bolder' style={{opacity:`0`}}>Invalid Value</p>
                </div>
            </div>
            </div>
            <div className="d-md-flex ms-3 me-3 gap-3 mt-3">
              <div className='mt-3 w-100 text-center'><Button onClick={submit} type='submit' style={{width:'100%',height:'70px'}} className='bg-dark' variant="contained">Submit</Button></div>
              <div className='mt-3 w-100 text-center'><Button onClick={reset}  style={{width:'100%',height:'70px'}} variant="outlined">CANCEL</Button></div>
          
            </div>
          </form>

        </div>
    </div>
      
   
  )
}

export default App
