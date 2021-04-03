import { useSelector } from 'react-redux';
import NoteScreen from '../notes/NoteScreen';
import NothingSelected from './NothingSelected'
import Sidebar from './Sidebar'

const JournalScreen = () => {
    const notes = useSelector(state => state.notes)
    return (
        <div className="journal__main-content">
            <Sidebar />
            <main>
                { notes.active ? (
                    <NoteScreen />
                ):(
                    <NothingSelected />
                )}
            </main>
        </div>
    )
}

export default JournalScreen
