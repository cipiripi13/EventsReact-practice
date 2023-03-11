import { useEffect, useState } from 'react';
import './NameInput.css'


// export const NameInput = () => {

//   //isto kao u js zadajemo parametre funkcije, u ovom slucaju registruje svaki event
//   // i stampamo taj event u consoli
//   const onChangehandler = (event) =>{
//     //value -- znaci da prima vrednost iz inputa, da se taj dogadjaj belezi
//     console.log(event.target.value);
//   }
//   return (
//     <div className='name-input-wrapper'>
//       {/* I ovde mozemo stavljati stilove, gde je key css property */}
//     <label style={{fontSize: '20px'}}>First Name</label>


//     {/*  onChange atribut koji osluskuje promene u inputu*/}
//     {/* Event handler --- onClick, onDrag, onHover or the onKeyPress event */}
//     <input type="text" onChange={onChangehandler} value={'cao'}/>
//   </div>
//   )

// }

export const NameInput = () => {
  // two-way binding -- nacin kako stizemo do kontrolisane komponente u reactu
  //gde u svakom trenutku imamo kontrolu nad stanjem u input-u tj.citamo njen value
  //zasto two-way?
  //
  const [name, setName] = useState('');
  const [isChecked, issetChecked] = useState(false);

  const onChangehandler = (event) => {
    setName(event.target.value);
  }
  const onSubmitHandler = () => {
    console.log(name);
  }


  return (
    <div className='name-input-wrapper'>
      <label style={{ fontSize: '20px' }}>First Name</label>

      <input type="text" onChange={onChangehandler} value={name} />
      <div>
        <input type={"checkbox"} checked={isChecked} />
        <span>Conditions ACCEPTED</span>
      </div>

      <button onClick={onSubmitHandler}>SEND</button>
      <p>{name}</p>
    </div>
  )

}