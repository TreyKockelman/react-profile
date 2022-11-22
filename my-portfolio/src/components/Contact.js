import { useState } from "react"

const Contact = () => {

  const [ userData, setUserData ] = useState({
    name: "",
    email: "",
    message:"",
  })

  const handleInputChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value })

  return (
    <>
      <h2> Contact Me </h2>
      <div>
        <label>Name</label>
        <input type="text" name="name" placeholder="Your Name" value={userData.name} onChange={handleInputChange}/>
      </div>
      <div>
        <label>Email</label>
        <input type="text" name="email" placeholder="Your Email" value={userData.email} onChange={handleInputChange}/>
      </div>
      <div>
        <label>Message</label>
        <input type="text" name="message" placeholder="Your message" value={userData.message} onChange={handleInputChange}/>
      </div>
      <button type="submit">Submit</button>
    </>
  )

}

export default Contact;