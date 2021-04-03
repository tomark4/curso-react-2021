import JournalEntries from './JournalEntries';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';

const Sidebar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth );

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    const handleAddNote = () => {
        dispatch( startNewNote() )
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> {user.name}</span>
                </h3>

                <button className="btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div className="journal__new-entry"
            onClick={handleAddNote}>
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries />
        </aside>

    )
}

export default Sidebar
