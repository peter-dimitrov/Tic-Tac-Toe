import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { VscChromeClose, } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";
import Timers from './Timers.js'
import HistItem from "./HistItem.js"
import HistItems from "./HistItems.js"
import CurrentItems from "./CurrentItems.js"
import Settings from "./Settings.js"
import emailjs from 'emailjs-com';
import LoginButton from "./LoginButton.js"
import LogoutButton from "./LogoutButton.js"
import Profile from "./Profile.js"
import Notifications from "./Notifications.js"
import { useAuth0 } from "@auth0/auth0-react";
import { FiAlertCircle, FiSettings } from "react-icons/fi";
import { IoAddOutline, IoAddSharp, IoAdd, IoMenuOutline, IoTimerOutline} from "react-icons/io5";


function App() {

  const [durationsAvg, setDurationsAvg] = useState({})
  const [datesDeleted, setDatesDeleted] = useState({})
  const [durations, setDurations] = useState({})
  const [histItems, setHistItems] = useState([])
  const [currItems, setCurrItems] = useState([])
  const [item, setItem] = useState('')
  const [notifications, setNotifications] = useState(false)
  const [addItemsAutomatically, setAddItemsAutomatically] = useState(true)
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [yourList, setYourList] = useState(true)
  const [activeTimers, setActiveTimers] = useState(false)
  const [running, setRunning] = useState({})
  const [date, setDate] = useState(new Date().getTime());
  const [objTimeLefts, setObjTimeLefts] = useState({})
  const [intervalHandles, setIntervalHandles] = useState({})
  const [timeoutHandles, setTimeoutHandles] = useState({})
  const [settingsScreen, setSettingsScreen] = useState(false)
  const [notifFrequency, setNotifFrequency] = useState('')
  const [editItemsData, setEditItemsData] = useState(false)
  const [redHistItems, setRedHistItems] = useState({})

  const addItemInput = (e) => {
    e.preventDefault()
    setItem(e.target.value)
  }

  const submitItemInput = (e, tempItem) => {
    e.preventDefault()
    if(tempItem != undefined){
    let noSpaces = tempItem.trim()
    if(Object.keys(objTimeLefts).includes(item)){
      StopTimer(item)
      clearInterval(intervalHandles[item])
      clearTimeout(timeoutHandles[item])
    }
    if(noSpaces != '' && !currItems.includes(item)){
    setCurrItems([...currItems, item])}
    if(noSpaces != '' && !histItems.includes(noSpaces)){
      setHistItems([...histItems, item])
    }
    helper(noSpaces)
  }
    setItem('')
  }

  const addHistItem = (e) => {
    e.preventDefault()
    if(Object.keys(objTimeLefts).includes(e.target.title)){
      StopTimer(e.target.title)
      clearInterval(intervalHandles[e.target.title])
      clearTimeout(timeoutHandles[e.target.title])
    }
    if(Object.keys(redHistItems).includes(e.target.title)){
      setRedHistItems({...redHistItems, [e.target.title] : false})
    }
    // if(redHistItems.includes(e.target.title)){
    //   var filtered = redHistItems.filter(function(value, index, arr){ 
    //       return value != e.target.title;
    //   });
    //   console.log('redHistBefore', redHistItems)
    //   setRedHistItems(filtered)
    //   console.log('redHistAfter', redHistItems)
    // }
    let value = e.target.title
    if(e.target.title != '' && e.target.title != undefined && !currItems.includes(e.target.title)){
      let temp1 = [...currItems]
      temp1.push(e.target.title)
      setCurrItems(temp1)
    }
    helper(e.target.title)
    setItem('')
  }

  const deleteHistItem = (title, id) => {
    let newArr = [...histItems]
    newArr.splice(id, 1)
    setHistItems(newArr)
  }

  const deleteItem = (title, id) => {
    if(durationsAvg[title]){
      StartTimer(title)
      console.log('started', title)
    }
    // let newArr = currItems
    let newArr = [...currItems]
    newArr.splice(id, 1)
    setCurrItems(newArr)
    let temp = {...datesDeleted}
    temp = {...temp, [title]: new Date()}
    setDatesDeleted(temp)
    console.log('durationsAvg123123', durationsAvg)
  }

  function sendEmail(template_params) {
    if(notifications){
    emailjs.send('service_qlyyrqd','template_kph3xk9', template_params, 'user_hO2cXwbtMut9FL35Gk9Pe')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });
  }
  }

  function addToCurrItems(value){
    console.log('before', currItems)
    let tem = [...currItems]
    tem.push(value)
    setCurrItems(tem)
    console.log('before', currItems)
  }

  function StopTimer(value){
    let temp = {...objTimeLefts}
    delete temp[value]
    setObjTimeLefts(temp)
    var temp123 = {...running}
    delete temp123[value]
    setRunning(temp123)
    console.log('stopped', value)
  }

  function StartTimer(value){
    let lengthOfTime;
    if(notifFrequency >= durationsAvg[value]){
      lengthOfTime = durationsAvg[value]
    }
    else{
      lengthOfTime = durationsAvg[value] - notifFrequency
    }

    // let temp = {...objTimeLefts}
    // temp[value] = durationsAvg[value]
    // setObjTimeLefts(temp)

    objTimeLefts[value] = durationsAvg[value]

    const endDate = new Date().getTime() + durationsAvg[value]
    if(!isLoading){
      var template_params = {
        'username': 'James','message': String(value),'from_name': 'Smart Grocery List','to_name': 'Halle','email': String(user.email),}}

    let tempTimeoutHandles = {...timeoutHandles}
    tempTimeoutHandles[value] = setTimeout(() => {
      var temp321 = {...running}
      delete temp321[value]
      setRunning(temp321)
      if(notifications){
        sendEmail(template_params)
        console.log('SENT EMAIL', value, 'TO', String(user.email), 'lengthOfTime', lengthOfTime,'durationsAvg[value]', durationsAvg[value])
      }
      else{
        console.log('EMAIL NOT SENT', value, 'TO', String(user.email), 'lengthOfTime', lengthOfTime,'durationsAvg[value]', durationsAvg[value])
      }
    }, lengthOfTime)

    setTimeoutHandles(tempTimeoutHandles)
    let tempIntervalHandles = {...intervalHandles}
    tempIntervalHandles[value] = setInterval(() => {
      console.log('abc', objTimeLefts)
      if(objTimeLefts[value] > 0){
        var newDate = new Date()
        objTimeLefts[value] = endDate - newDate
      }
      else{
        let temp2 = running
        // let temp2 = {...running}
        delete temp2[value]
        setRunning(temp2)
        // StopTimer(value)
        console.log('stopped', value)
        clearInterval(tempIntervalHandles[value])
     }
    }, 100);
    setIntervalHandles(tempIntervalHandles)
  }

  const helper = (term) => {
    let temp = {...datesDeleted}
    let temp2 = {...durations}
    if(temp[term] && Object.keys(temp2).includes(term)){
      temp2[term].push(Math.abs(temp[term] - new Date()))
    }
    else if (temp[term]){
      temp2[term] = [Math.abs(temp[term] - new Date())]
    }
    setDurations(temp2)
    delete temp[term]
    setDatesDeleted(temp)
    var total = 0
    var n = 0
    var span;
    let blah = durations[term]
    let temp3 = {...durationsAvg}
    if(!blah){
      return
    }
    else if(blah.length == 1){
      temp3[term] = blah[0]
    }
    else{
      for(span of blah)
      {
        total += span
        n += 1 
      }
      temp3[term] = total/n
    }
    setDurationsAvg(temp3)
  }

  function secondsToDhms(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
    }

    const Description = () => {
      return(
        <div>
        <div className = "header">How it Works</div>
        <div className = "description">
          The Smart Shopping List calculates how long your groceries will last you and sends you a notification when you're about to run out of something.
          Use the shopping list as you normally would - putting items on when you need them and taking them off after you've bought them.
        </div>
        </div>
      )
    }

    const handleCheckboxChange = (e) => {
      e.preventDefault();
      let temp = notifications
      setNotifications(!temp)
    }

    const handleAddItemsAutomatically = (e) => {
      e.preventDefault();
      let temp = addItemsAutomatically
      setAddItemsAutomatically(!temp)
    }

    const refreshPage = (e) => {
      e.preventDefault()
      window. location. reload()
    }

    const yourListClicked = (e) => {
      setActiveTimers(false)
      setYourList(true)
    }

    const activeTimersClicked = (e) => {
      setYourList(false)
      setActiveTimers(true)
    }

    const navigateToSettingsScreen = (e) => {
      setSettingsScreen(!settingsScreen)
    }

    const selectNotifFrequency = (e) => {
      setNotifFrequency(e.target.value)
    }

  return (
    <div className="App">
    <div className = "shadowContainer">
    {!isAuthenticated && <LoginButton/>}
    {isAuthenticated &&
    <div className = "rightBannerDiv">
    <div className = "ProfileLogOut">
    <Profile/>
    <LogoutButton/>
    </div>
    {/* <Notifications handleCheckboxChange = {handleCheckboxChange} notifications = {notifications}/> */}
    </div>}
    <button className = "refreshPageButton" onClick = {(e) => refreshPage(e)}><div className = "title">Smart Grocery List</div></button>
    </div>
    <div className = "bigBg">
    {settingsScreen &&
    <Settings datesDeleted = {datesDeleted} setDatesDeleted = {setDatesDeleted} addItemsAutomatically = {addItemsAutomatically} handleAddItemsAutomatically = {handleAddItemsAutomatically} VscChromeClose = {VscChromeClose} navigateToSettingsScreen = {navigateToSettingsScreen} settingsScreen = {settingsScreen} setSettingsScreen = {setSettingsScreen} durations = {durations} setDurations = {setDurations} durationsAvg = {durationsAvg} setDurationsAvg = {setDurationsAvg} running = {running} setRunning = {setRunning} objTimeLefts = {objTimeLefts} setObjTimeLefts = {setObjTimeLefts} editItemsData = {editItemsData} setEditItemsData = {setEditItemsData} histItems = {histItems} setHistItems = {setHistItems} currItems = {currItems} setCurrItems = {setCurrItems} selectNotifFrequency = {selectNotifFrequency} notifications = {notifications} handleCheckboxChange = {handleCheckboxChange} />}
    {!settingsScreen && <div><button className = {yourList ? "yourListButtonClicked" : "yourListButtonUnclicked"} onClick = {(e) => yourListClicked(e)}>Your List</button><button className = {activeTimers ? "activeTimersButtonClicked" : "activeTimersButtonUnclicked"} onClick = {(e) => activeTimersClicked(e)}>Active Timers</button></div>}
    {!settingsScreen && yourList && !activeTimers && 
    <div className = "yourListPage">
    <div className = "forInputPadding">
    <div>
    <form>
      <button className = "addItemInputButton" onClick = {(e) => submitItemInput(e, item)}><div className = "VscAddDiv"><IoAddOutline size={22}/></div></button>
        <input
          className = "itemInput"
          maxLength = "30"
          value = {item}
          placeholder = "Add Item"
          onChange = {(e) => addItemInput(e)}>
        </input>
      <button className = "settingsButton" onClick = {(e) => navigateToSettingsScreen(e)}><div><IoMenuOutline size = {22} /></div></button>
      <div className = "inputCombo"/>
        {/* <button className = "addItemInputButton" onClick = {(e) => submitItemInput(e, item)}><div className = "VscAddDiv"><VscAdd size={20}/></div></button> */}
    </form>
    </div>
    </div>
    {currItems.length != histItems.length && <HistItems addItemsAutomatically = {addItemsAutomatically} running = {running} objTimeLefts = {objTimeLefts} setRedHistItems = {setRedHistItems} redHistItems = {redHistItems} deleteHistItem = {deleteHistItem} VscChromeClose = {VscChromeClose} addHistItem = {addHistItem} histItems = {histItems} currItems = {currItems} deleteItem = {deleteItem}/>}
    {/* <Header numItems = {currItems.length}/> */}
    <CurrentItems secondsToDhms = {secondsToDhms} durationsAvg = {durationsAvg} setCurrItems = {setCurrItems} currItems = {currItems} deleteItem = {deleteItem}/>
      </div>}
    {!settingsScreen && !yourList && activeTimers && <Timers StopTimer = {StopTimer} objTimeLefts = {objTimeLefts} setObjTimeLefts = {setObjTimeLefts} running = {running} setRunning = {setRunning} date = {date} notifications = {notifications} durationsAvg = {durationsAvg} secondsToDhms = {secondsToDhms} ProgressBar = {ProgressBar} histItems = {histItems}/>}
    </div>
    </div>
  );
}

export default App;