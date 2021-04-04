import JournalEntry from './JournalEntry';
import { useSelector } from 'react-redux';

const JournalEntries = () => {
    const { notes } = useSelector(state => state.notes)

    return (
        <div className="journal__entries">

            {
                notes.map( note => (
                    <JournalEntry key={ note.id }
                    note={note}
                    />
                ))
            }

        </div>
    )
}

export default JournalEntries
