import { useState } from 'react';
import Modal from 'react-modal';
import MomentUtils from "@date-io/moment";
import moment from "moment";
import {
    DateTimePicker,
    MuiPickersUtilsProvider
  } from '@material-ui/pickers';


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const end = now.clone().add(1, 'hour');

const CalendarModal = () => {
    const [startDate, setStartDate] = useState(now.toDate());
    const [endDate, setEndDate] = useState(end.toDate());

    const closeModal = () => {
        //setIsOpen(false);
    }

    const handleStartDateChange = (e) => {
        setStartDate(e);
    }

    const handleEndDateChange = (e) => {
        setEndDate(e)
    }

    return (
        <Modal
          isOpen={true}
        //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          closeTimeoutMS={200}
          className="modal"
          overlayClassName="modal-fondo"
        >

            <h3 className="center-align"> Nuevo evento </h3>
            <form className="container">
                <div className="row">
                    <div className="input-field">
                        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                            <DateTimePicker value={startDate} onChange={handleStartDateChange}
                            style={{width:"100%"}}/>
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                            <DateTimePicker value={endDate} onChange={handleEndDateChange}
                            style={{width:"100%"}}/>
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <textarea
                            type="text"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                            className="materialize-textarea"
                        ></textarea>
                    </div>
                </div>
                <div className="row">
                    <button
                        type="submit"
                        className="btn indigo darken-3
                        btn-large
                        waves-effect waves-light"
                        style={{ width: "100%"}}
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>
                </div>

            </form>
        </Modal>
    )
}

export default CalendarModal
