import { Button } from 'components/button/button.tsx';
import type { ButtonProps } from 'components/button/types';
import { Modal } from 'components/modal/modal.tsx';

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  buttons: ButtonProps[];
}

export const ContextMenu = (props: Props) => {
  const { show, setShow, buttons } = props;

  return (
    <Modal show={show} setShow={setShow}>
      {buttons.map((button, index) => (
        <Button key={index} {...button} />
      ))}
    </Modal>
  );
};
