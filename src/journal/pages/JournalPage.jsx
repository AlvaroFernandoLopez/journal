
import { NothingSelectedView , NoteView , NoteSelected} from '../../views'
import { NotesModal, JournalLayout} from '../'
import { useJournalStore } from '../../hooks'


export const JournalPage = () => {
  
  const {notes, isOpenNote}= useJournalStore();

  return (
    <JournalLayout>

        { 
           (notes.length<=0 )  ? <NothingSelectedView/> //no hay notas
           :(!isOpenNote) ? <NoteView/>
           : <NoteSelected/>  
        }
        
      <NotesModal/>
    </JournalLayout>
  )
}

