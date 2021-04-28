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
    const [formValues, setFormValues] = useState({
        title:'Evento',
        notes:'',
        start: now.toDate(),
        end: end.toDate()
    })

    const closeModal = () => {
        //setIsOpen(false);
    }

    const handleStartDateChange = (value) => {
        setStartDate(value._d);
        setFormValues({
            ...formValues,
            start: value._d
        })
    }

    const handleEndDateChange = (value) => {
        setEndDate(value._d)
        setFormValues({
            ...formValues,
            end: value._d
        })
    }

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    const { notes, title } = formValues;


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
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field">
                        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                            <DateTimePicker name="startDate" value={startDate} onChange={handleStartDateChange}
                            style={{width:"100%"}}/>
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                            <DateTimePicker name="endDate" value={endDate} onChange={handleEndDateChange}
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
                            value={title}
                            onChange={handleInputChange}
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
                            value={notes}
                            onChange={handleInputChange}
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
