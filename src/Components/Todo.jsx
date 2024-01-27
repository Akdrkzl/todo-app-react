import React, { useEffect, useRef, useState } from 'react'
import List from './List'

function Todo(){

    const [value,setValue] = useState({})
    const [yazdir,setYazdir] = useState([])
    const inp = useRef()


    useEffect(()=>{
        let todos = JSON.parse(localStorage.getItem('array'))
        if(!todos){
            localStorage.setItem('array',JSON.stringify([]))
        }else{
            setYazdir(todos)
        }
    },[])


    useEffect(()=>{
        let todos = JSON.parse(localStorage.getItem('array'))
        if(!todos){
            todos = localStorage.setItem('array',[])
        }else{
            let str =JSON.stringify(yazdir)
            todos = localStorage.setItem('array',str)
        }

    },[yazdir])

    function valueYakala(e){
        setValue({
            text:inp.current.value,
            isCompleted:false
        })
        if(e.key == 'Enter'){
            ekranaYaz()
        }
    }

    function ekranaYaz(){
        setYazdir(prev=>[...prev,value])
        inp.current.value = ''
    }

  return (
    <>
        <div className="container mt-5">
            <h1 className='text-center'>Todo App</h1>
            <div className='input-group'>
            <input type="text" className='form-control' onKeyUp={valueYakala} ref={inp} />
            <button className='btn btn-dark' onClick={ekranaYaz}>Kaydet</button>
            </div>
            
            <List yazdir={yazdir} setYazdir={setYazdir}/>

        </div>
    </>
  )
}

export default Todo