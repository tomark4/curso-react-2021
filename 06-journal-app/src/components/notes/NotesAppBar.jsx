import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { startSaveNote, startUploading } from "../../actions/notes"

const NotesAppBar = () => {
    const dispatch = useDispatch()
    const { active:note } = useSelector(state => state.notes);
    const inputRef = useRef();

    const handleSave = () => {
        dispatch(startSaveNote(note))
    }

    const handleUploadFile = () => {
        console.log("picture")
        inputRef.current.click()
    }

    const handleFileChange = (evt) => {
        const file = evt.target.files[0];

        if(file){
            dispatch( startUploading(file) )
        }
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <div>
                <input type="file"
                style={{display:'none'}}
                ref={inputRef}
                onChange={(evt) => handleFileChange(evt) }/>

                <button className="btn"
                onClick={handleUploadFile}>
                    Picture
                </button>

                <button className="btn"
                onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar
