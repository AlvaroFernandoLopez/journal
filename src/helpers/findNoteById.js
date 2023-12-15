import { useJournalStore } from "../hooks/useJournalStore"


export const findNoteById = (id)=> {

    const {notes}=useJournalStore();

  return notes.find(note=>note.id===id);
}
