import { NoteDescription } from 'common/components/NoteCard/NoteDescription';
import { NoteHeader } from 'common/components/NoteCard/NoteHeader';
import { NoteName } from 'common/components/NoteCard/NoteName';

import './NoteCard.scss';

export const NoteCard = () => (
  <main className="note-card">
    <NoteHeader />
    <div className="note-card__content">
      <NoteName />
      <NoteDescription />
    </div>
  </main>
);
