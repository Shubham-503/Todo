import React from 'react'
import Modal from 'react-modal';



const ModalComponent = ({ modalData,setModalData,modalSubmit }) => {
  console.log(modalData);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleModalSubmit = (e)=>{
    modalSubmit(e,modalData.text,modalData.id,modalData.idx)
    setModalData({...modalData,isOpen:false})
  }

  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={modalData.isOpen}

      onRequestClose={() => { setModalData({...modalData,isOpen:false}) }}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>{modalData.title}</h2>
      <div className="">
        <input type="text" value={modalData.text} onChange={(e)=>{setModalData({...modalData,text:e.target.value}) }} />
        <button onClick={(e)=>handleModalSubmit(e)}>Update</button>
      </div>
    </Modal>
  )
}

export default ModalComponent