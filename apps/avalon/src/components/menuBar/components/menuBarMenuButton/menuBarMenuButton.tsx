import * as React from 'react';
import { capitaliseFirstLetter, classes } from '@mono/shared/utils.ts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/button/button.tsx';
import { Modal } from 'components/modal/modal.tsx';
import { characters } from 'constants/characters.ts';
import { useSessionStore } from 'stores/useSessionStore/useSessionStore.tsx';
import { leaveSession } from 'services/session/leaveSession.ts';

import styles from './styles.module.scss';

export const MenuBarMenuButton = () => {
  const { myPlayer, step } = useSessionStore();

  const [showMenu, setShowMenu] = React.useState(false);
  const [showCharacter, setShowCharacter] = React.useState(false);

  const isLobby = step === 'lobby';

  return (
    <>
      <Button
        icon="ellipsis-v"
        onClick={() => setShowMenu(true)}
        iconClassName={styles.leaveButtonIcon}
        className={styles.leaveButton}
      />

      <Modal show={showMenu} setShow={setShowMenu} className={styles.menu}>
        <div
          onMouseDown={() => !isLobby && setShowCharacter(true)}
          onMouseUp={() => !isLobby && setShowCharacter(false)}
          onTouchStart={() => !isLobby && setShowCharacter(true)}
          onTouchEnd={() => !isLobby && setShowCharacter(false)}
          className={styles.menuItem}
        >
          <FontAwesomeIcon icon="hat-wizard" className={styles.menuItemIcon} />

          <div
            className={classes(styles.menuItemText, step === 'lobby' && styles.menuItemDisabled)}
          >
            <div className={styles.menuItemTextTitle}>
              {showCharacter
                ? capitaliseFirstLetter(characters[myPlayer.characterId].id)
                : 'Your Character'}
            </div>
            <div className={styles.menuItemTextDescription}>
              Hold down to see your character. Do not let anyone see!
            </div>
          </div>
        </div>

        <div onClick={leaveSession} className={styles.menuItem}>
          <FontAwesomeIcon icon="right-from-bracket" className={styles.menuItemIcon} />

          <div className={styles.menuItemText}>
            <div className={styles.menuItemTextTitle}>Quit</div>
            <div className={styles.menuItemTextDescription}>
              This will end the game for everyone
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
