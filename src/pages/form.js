import React, { useState } from "react"

const Form = () => {
  const [name , setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      let payload = {
        name: name,
        email: email,
        subject: subject,
        message: message
      }

      const response = await fetch('/api/send-email/', {
        method: "POST",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "omit", // include, *same-origin, omit
        headers: { "Content-Type": "application/json" },
        redirect: "follow", // manual, *folslow, error
        referrer: "client", // no-referrer, *client
        body: JSON.stringify(payload),
      })

      const answer = await response.json()

      if (answer.success) {
        alert(answer.message)
      }
      else {
        alert(answer.errors[0].msg)
      }
    }
    catch (err) {
      console.log('Error connecting to backend:', err)
    }
  }

  const handleNameChange = e => {
    setName(e.currentTarget.value)
  }

  const handleEmailChange = e => {
    setEmail(e.currentTarget.value)
  }

  const handleSubjectChange = e => {
    setSubject(e.currentTarget.value)
  }

  const handleMessageChange = e => {
    setMessage(e.currentTarget.value)
  }

  return (
    <div className='backend'>
      <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" id="name" name="name" placeholder="Name" onChange={handleNameChange} />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text"id="email" name="email" placeholder="Email"onChange={handleEmailChange} />
              </div>
              <div className="col-12 row-2">
                <input type="text" id="subject" name="subject" placeholder="Subject"onChange={handleSubjectChange}/>
              </div>
              <div className="col-12">
                <textarea name="message" id="message" placeholder="Message" onChange={handleMessageChange}/>
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
      </form>
    </div>
  )
}

export default Form