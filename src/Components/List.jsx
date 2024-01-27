import React from 'react'

function List({yazdir, setYazdir}) {

    function checkItem(i){
        let newList =[...yazdir]
        if(newList[i].isCompleted){
            newList[i].isCompleted = false
        }else{
            newList[i].isCompleted = true
        }
        setYazdir(newList)
    }


    function deleteItem(i){
        let newList =[...yazdir]
        newList.splice(i,1)
        setYazdir(newList)
    }

    let dogru = 'd-flex justify-content-between p-1 align-items-center bg-success text-white mt-3 '
    let yanlis = 'd-flex justify-content-between p-1 align-items-center bg-white mt-3'
  return (
    <>


            <div className="container mt-5">
            {
                yazdir.map((e,i)=>(
                    <div key={i} className={e.isCompleted ? dogru : yanlis}>
                    <h1 className={e.isCompleted ? 'text-decoration-line-through' : ''} >{e.text}</h1>
                    <div className='d-flex gap-3'>
                        <p  className='text-decoration-none fs-2' onClick={()=> checkItem(i)}>
                            <i class="fa-solid fa-check"></i>
                        </p>

                        <p className='text-decoration-none fs-2 ' onClick={()=> deleteItem(i)}>
                        <i class="fa-solid fa-xmark"></i>
                        </p>
                        
                    </div>
                    </div>
                ))
            }
            </div>

    </>
  )
}

export default List