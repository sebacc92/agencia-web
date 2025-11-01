import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { Modal } from '@qwik-ui/headless';
import styles from './modal.css?inline';

interface ModalProps {
  triggerText: string;
  triggerClass?: string;
  title: string;
  description?: string;
}

export default component$<ModalProps>((props) => {
  useStyles$(styles);

  return (
    <Modal.Root>
      <Modal.Trigger class={`${props.triggerClass || "modal-trigger" }`}>
        {props.triggerText}
      </Modal.Trigger>
      <Modal.Panel class="modal-panel">
        <Modal.Title>{props.title}</Modal.Title>
        <Modal.Description>
          {props.description}
        </Modal.Description>
        <Slot/>
        <footer class="mt-4">
          <Modal.Close class="modal-close">Cancel</Modal.Close>
          <Modal.Close class="modal-close">Save Changes</Modal.Close>
        </footer>
      </Modal.Panel>
    </Modal.Root>
  );
});
