import { component$, Slot, useSignal, useStyles$, $, createContextId, useContextProvider, useContext, type QRL, type Signal } from '@builder.io/qwik';

export interface ModalProps {
  triggerText: string;
  triggerClass?: string;
  title: string;
  description?: string;
  panelClass?: string;
  closeOnBackdropClick?: boolean;
  closeButtonText?: string;
  hideDefaultCloseButton?: boolean;
}

export interface ModalControl {
  showSig: Signal<boolean>;
  open$: QRL<() => void>;
  close$: QRL<() => void>;
}

export const ModalControlContext = createContextId<ModalControl>('app-modal-control');

export const useModalControl = () => useContext(ModalControlContext);

const styles = `
.custom-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(17, 24, 39, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}
.custom-modal-content {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 32rem; /* max-w-lg */
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  transform: scale(1) translateY(0);
  opacity: 1;
  transition: opacity .3s ease, transform .3s ease;
}
.custom-modal-content.closing {
  opacity: 0;
  transform: scale(0.98) translateY(20px);
}
@media (min-width: 768px) {
  .custom-modal-content {
    max-width: 36rem; /* max-w-xl */
  }
}
@media (min-width: 1024px) {
  .custom-modal-content {
    max-width: 42rem; /* max-w-2xl */
  }
}
@media (max-width: 640px) {
  .custom-modal-overlay {
    padding: 0.5rem;
  }
  .custom-modal-content {
    max-width: calc(100vw - 1rem);
    max-height: calc(100vh - 1rem);
    border-radius: 1rem;
  }
}
`;

export default component$<ModalProps>((props) => {
  useStyles$(styles);

  const {
    triggerText,
    triggerClass = '',
    title,
    description,
    panelClass = '',
    closeOnBackdropClick = true,
    closeButtonText = 'Cerrar',
    hideDefaultCloseButton = false
  } = props;

  const showSig = useSignal(false);

  const open$ = $(() => {
    showSig.value = true;
  });

  const close$ = $(() => {
    showSig.value = false;
  });

  useContextProvider(ModalControlContext, { showSig, open$, close$ });

  const triggerBase =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl';

  return (
    <>
      <button
        class={[triggerBase, triggerClass].filter(Boolean).join(' ')}
        aria-label={title}
        type="button"
        onClick$={open$}
      >
        {triggerText}
      </button>

      {showSig.value && (
        <div
          class="custom-modal-overlay"
          onClick$={(event) => {
            if (closeOnBackdropClick && event.target === event.currentTarget) {
              close$();
            }
          }}
        >
          <div
            class={['custom-modal-content', panelClass].filter(Boolean).join(' ')}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick$={(event) => event.stopPropagation()}
          >
            <div class="w-full p-6 sm:p-8">
              <div class="mb-6">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {title}
                </h2>
                {description && (
                  <p class="text-gray-600 text-base md:text-lg">
                    {description}
                  </p>
                )}
              </div>

              <div class="mb-6">
                <Slot />
              </div>

              {!hideDefaultCloseButton && (
                <div class="mt-6 flex justify-end">
                  <button
                    type="button"
                    class="px-6 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 transition-colors duration-200"
                    onClick$={close$}
                  >
                    {closeButtonText}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
});