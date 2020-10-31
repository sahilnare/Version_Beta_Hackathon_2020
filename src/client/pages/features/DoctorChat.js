import React, {useState}  from 'react'
import { log } from '../../components/doctorchat/utils'
import "./doctorchat.css";
import {startBasicCall, leaveCall} from '../../components/doctorchat/Agora_RTC';

export default function Home() {

  const [appid, setAppid] = useState('1f8602c1ee6b4b2aae034969f8b1e16c')
  const [channel, setChannel] = useState('piedpiper')
  const [token, setToken] = useState('0061f8602c1ee6b4b2aae034969f8b1e16cIACnBvx6Fe8jYFIfDAbEYdAObozI/or3IHhgoKdbLjBAhwH9ad4AAAAAEABO10qJr9KeXwEAAQCv0p5f')
  const [isjoin, setIsJoin] = useState(false)


  const bindInputAppid = (event) => {
    setAppid(event.target.value)
  }

  const bindInputToken = (event) => {
    setToken(event.target.value)
  }

  const bindInputChannel = (event) => {
    setChannel(event.target.value)
  }

  const handleClickJoin = () => {
    // if(!appid || !channel || !token) {
    //   if(!appid) {
    //     openNotification('appid')
    //   }
    //   if(!channel) {
    //     openNotification('channel')
    //   }
    //   if(!token) {
    //     openNotification('token')
    //   }
    //   return
    // }

    let options = {
      appId: appid,
      channel: channel,
      token: token,
    }
    startBasicCall(options)
    log('join channel success')
    setIsJoin(true)
  }

  const handleClickLeave = () => {
    leaveCall()
    log('client leaves channel success')
    setIsJoin(false)
  }

  // const openNotification = (placement) => {
  //   notification.open({
  //     message: 'Please enter complete information',
  //     description:
  //     `The ${placement} is empty`
  //   });
  // };

  return (
    <div className='home-box'>
      <div className='title-box'>
        <span id='title-agora'>Video Chat with Doctor</span>
      </div>
      <div className='message-box'>

        <div className='click-box'>
          <div className='joinButton'>
            <button type="primary" onClick={handleClickJoin} disabled={isjoin}>Join</button>
          </div>
          <div className='leaveButton'>
            <button onClick={handleClickLeave} disabled={!isjoin}>Leave</button>
          </div>
        </div>
      </div>
      <div className='video-agora-box'>
        <div id='video-agora-local'></div>
      </div>
    </div>
  )
}
