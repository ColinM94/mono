import * as React from 'react';

import { mergeReducer } from '@mono/shared/utils';
import { addDocument, deleteDocument, updateDocument } from '@mono/firebase/firestore';

import { InputText } from 'components/inputText/inputText';
import { Modal } from 'components/modal/modal';
import { Button } from 'components/button/button';
import { defaultPerson } from 'constants/defaults';
import type { Person } from 'types/person';

import styles from './styles.module.scss';

interface Props {
  person?: Person | undefined;
  show: boolean;
  setShow: (show: boolean) => void;
  onClose: () => void;
}

export const PersonEditor = (props: Props) => {
  const { person, show, setShow, onClose } = props;

  const [state, updateState] = React.useReducer(mergeReducer<Person>, person || defaultPerson());

  React.useEffect(() => {
    updateState(person || defaultPerson());
  }, [show, person]);

  const handleDelete = async () => {
    if (!person) return;

    const response = await deleteDocument({
      collection: 'people',
      id: person.id,
    });

    if (!response.ok) {
      alert('Failed to delete record');
    }

    setShow(false);
  };

  const handleUpdate = async () => {
    if (person) {
      await updateDocument({
        id: person?.id,
        collection: 'people',
        data: state,
      });
    } else {
      await addDocument({
        collection: 'people',
        data: state,
      });
    }

    setShow(false);
  };

  return (
    <Modal
      show={show}
      setShow={setShow}
      label={person?.name || 'New Person'}
      onClose={onClose}
      className={styles.container}
    >
      <InputText
        value={state.name}
        setValue={(name) => updateState({ name })}
        label="Search"
        layer={1}
        className={styles.inputText}
      />

      <div className={styles.buttons}>
        {person && (
          <Button
            label="Delete"
            onClick={() => void handleDelete()}
            type="secondary"
            layer={1}
            className={styles.deleteButton}
          />
        )}

        <Button
          label={person ? 'Update' : 'Add'}
          onClick={handleUpdate}
          type="primary"
          className={styles.createButton}
        />
      </div>
    </Modal>
  );
};
