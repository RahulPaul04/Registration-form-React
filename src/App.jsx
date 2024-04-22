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



import './App.css'

function App() {
  const [name,setName] = useState("")
  const [mobile,setMobile] = useState("")
  const [address,setAddress] = useState("")
  const [email,setEmail] = useState("")
  const [dob,setdob] = useState("")
  const [gender,setGender] = useState("")
  const [course,setCourse] = useState("")

  const validateInput = (tag,fun)=>{

  }


  return (
    
    <div className='bg-dark full-container' style={{height:'100vh',width:"100%"}}>
        <div className="form col-lg-6 col-md-8 col-10 mx-auto">
          <h2  className="heading p-4">REGISTRATION FORM</h2>
          <form action="" className='mb-5'>
            <div className="d-md-flex ms-3 me-3 gap-3">
              <div className='w-100'>
                <div>
                  <TextField name='name' onChange={e =>validateInput(e.target,setName) }  className='w-100' id="name" label="Full Name" variant="outlined"  />
                </div>
                <div className="warning">
                  <p className='ms-1 mb-3 text-danger fw-bolder'>Invalid Name</p>
                </div>
               

              </div>
              <div className='w-100'>
                <div>
                  <TextField  inputProps={{
                          inputMode: 'numeric',
                          pattern: '[0-9]*',
                        }} className='w-100' id="mobile" label="Mobile Number" variant="outlined" />
                </div>
                <div className="warning">
                  <p className='ms-1 mb-3 text-danger fw-bolder'>Invalid Phone Number</p>
                </div>

              </div>
            </div>
            <div className='ms-3 me-3'>
              <div>
                <TextField className='w-100' id="address" label="Address" variant="outlined" />
  
              </div>
              <div className="warning">
                  <p className='ms-1 mb-3 text-danger fw-bolder'>Invalid Address Number</p>
              </div>

            </div>

            <div className="d-md-flex ms-3 me-3 gap-3">
              <div className='w-100'>
                <div>
                  <TextField className='w-100' id="Email" label="E-Mail" variant="outlined" />
                </div>
                <div className="warning">
                  <p className='ms-1 mb-3 text-danger fw-bolder'>Invalid E-Mail</p>
                </div>
               

              </div>
              <div className='w-100'>
                <div>
                <LocalizationProvider dateAdapter={AdapterDayjs} className="w-100" adapterLocale="en-gb">
                    <DatePicker label="Date of Birth" className='w-100' />
                  </LocalizationProvider>

                </div>
                <div className="warning">
                  <p className='ms-1 mb-3 text-danger fw-bolder'>Invalid Phone Number</p>
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
                  >
                    
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
              </FormControl>
              <div className="warning">
                  <p className='ms-1 mb-3 text-danger fw-bolder'>Invalid Value</p>
                </div>
            </div>
            <div className='w-100'> 
              <FormControl className='w-100'>
                <InputLabel id="course-select">Course</InputLabel>
    
                  <Select
                    labelId="course-select"
                    id="course-select"
                    label="course"
                  >
                    
                    <MenuItem value="biology">Biology</MenuItem>
                    <MenuItem value="computer">Computer Science</MenuItem>
                    <MenuItem value="commerce">Commerce</MenuItem>
                    <MenuItem value="humanities">Humanities</MenuItem>
  
                  </Select>
              </FormControl>
              <div className="warning">
                  <p className='ms-1 mb-3 text-danger fw-bolder'>Invalid Value</p>
                </div>
            </div>
            </div>
            <div className="d-md-flex ms-3 me-3 gap-3 mt-3">
              <Button type='submit' style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">Submit</Button>
              <Button  style={{width:'50%',height:'70px'}} variant="outlined">CANCEL</Button>
          
            </div>
          </form>

        </div>
    </div>
      
   
  )
}

export default App
