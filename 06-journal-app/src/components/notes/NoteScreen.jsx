import NotesAppBar from './NotesAppBar';
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState, useEffect } from 'react'
import { activeNote, noteLogout, startDeleting } from '../../actions/notes';

const NoteScreen = () => {
    const { active:note } = useSelector(state => state.notes)
    const dispatch = useDispatch();
    const [title, setTitle] = useState(note.title);
    const [body, setBody] = useState(note.body);
    const { url } = note
    const activeId = useRef(note.id);

    useEffect(() => {
       if(note.id !== activeId.current){
           setTitle(note.title);
           setBody(note.body);
           activeId.current = note.id
       }
    },[note]);

    useEffect(() => {
        dispatch( activeNote(
            activeId.current,
            {title, body, url}
        ));
    },[title, body, url, dispatch]);

    const handleDelete = () => {
        dispatch( startDeleting(activeId.current) );
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <h5>Id: {note.id}</h5>
            <hr/>
            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                { note.url &&
                    <div className="notes__image">
                        <img
                            src={note.url}
                            alt="imagen"
                        />
                    </div>
                }
            </div>
            <button className="btn btn-danger"
            onClick={handleDelete}>delete</button>
        </div>
    )
}

export default NoteScreen
