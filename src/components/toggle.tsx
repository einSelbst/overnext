import { useCallback, useEffect, useState } from 'react'

/**
 * A toggle checkbox with A11y in mind.
 *
 * This is based on the following resources:
 * - @see {@link https://kittygiraudel.com/2021/04/05/an-accessible-toggle/}
 * - @see {@link https://webomnizz.com/how-to-create-a-toggle-switch-button-in-react/}
 * - @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md}
 */
// eslint-disable-next-line max-lines-per-function
const Toggle = ({
  checked = false,
  disabled = false,
  direction = 'ltr',
  toggleId,
  onChange,
  label = 'Toggle',
}: {
  readonly checked?: boolean
  readonly disabled?: boolean
  readonly direction?: string
  readonly label: string
  readonly toggleId: string
  readonly onChange?: ((state: boolean) => void) | null
}): ComponentReturnType => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  // optional logging
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('checkedItems:', checkedItems)
  }, [checkedItems])

  const triggerToggle = useCallback(
    (event: React.FormEvent) => {
      if (disabled) return

      // due to the ts compiler not getting it
      const target = event.target as HTMLInputElement
      const isChecked: boolean = target.checked
      const { id } = target

      // I don't really understand what I'm doing here
      /* https://stackoverflow.com/questions/56273038/how-to-implement-multiple-checkbox-using-react-hook */
      setCheckedItems(previousState => ({
        ...previousState,
        [id]: isChecked,
        /* ...checkedItems, */
        /* [event.target.id]: event.target.checked, */
      }))

      if (typeof onChange === 'function') {
        onChange(isChecked)
        /* onChange(checkedItems[event.target.id]) */
      }
    },
    [onChange, disabled]
  )

  return (
    <>
      <label className='Toggle' dir={direction} htmlFor={toggleId}>
        <input
          className='Toggle__input'
          defaultChecked={checked}
          disabled={disabled}
          id={toggleId}
          name='toggle'
          type='checkbox'
          onChange={triggerToggle}
        />
        <span hidden className='Toggle__display'>
          <svg
            aria-hidden='true'
            className='Toggle__icon Toggle__icon--checkmark'
            fill='none'
            focusable='false'
            height='14'
            viewBox='0 0 18 14'
            width='18'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M6.08471 10.6237L2.29164 6.83059L1 8.11313L6.08471 13.1978L17 2.28255L15.7175 1L6.08471 10.6237Z'
              fill='currentcolor'
              stroke='currentcolor'
            />
          </svg>
          <svg
            aria-hidden='true'
            className='Toggle__icon Toggle__icon--cross'
            fill='none'
            focusable='false'
            height='13'
            viewBox='0 0 13 13'
            width='13'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M11.167 0L6.5 4.667L1.833 0L0 1.833L4.667 6.5L0 11.167L1.833 13L6.5 8.333L11.167 13L13 11.167L8.333 6.5L13 1.833L11.167 0Z'
              fill='currentcolor'
            />
          </svg>
        </span>
        {label}
      </label>
      <style jsx>{`
        .Toggle {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          position: relative;
          margin: 1em 2em 0;
          cursor: pointer;
          gap: 1ch;
        }

        button.Toggle {
          border: 0;
          padding: 0;
          background-color: transparent;
          font: inherit;
        }

        .Toggle__input {
          position: absolute;
          opacity: 0;
          width: 100%;
          height: 100%;
        }

        .Toggle__display {
          --offset: 0.25em;
          --diameter: 1.5em;

          display: inline-flex;
          align-items: center;
          justify-content: space-around;
          box-sizing: content-box;
          width: calc(var(--diameter) * 2 + var(--offset) * 2);
          height: calc(var(--diameter) + var(--offset) * 2);
          border: 0.1em solid rgb(0 0 0 / 0.2);
          position: relative;
          border-radius: 100vw;
          background-color: #fbe4e2;
          transition: 250ms;
        }

        .Toggle__display::before {
          content: '';
          z-index: 2;
          position: absolute;
          top: 50%;
          left: var(--offset);
          box-sizing: border-box;
          width: var(--diameter);
          height: var(--diameter);
          border: 0.1em solid rgb(0 0 0 / 0.2);
          border-radius: 50%;
          background-color: white;
          transform: translate(0, -50%);
          will-change: transform;
          transition: inherit;
        }

        .Toggle:focus .Toggle__display,
        .Toggle__input:focus + .Toggle__display {
          outline: 1px dotted #212121;
          outline: 1px auto -webkit-focus-ring-color;
          outline-offset: 2px;
        }

        .Toggle:focus,
        .Toggle:focus:not(:focus-visible) .Toggle__display,
        .Toggle__input:focus:not(:focus-visible) + .Toggle__display {
          outline: 0;
        }

        .Toggle[aria-pressed='true'] .Toggle__display,
        .Toggle__input:checked + .Toggle__display {
          background-color: #e3f5eb;
        }

        .Toggle[aria-pressed='true'] .Toggle__display::before,
        .Toggle__input:checked + .Toggle__display::before {
          transform: translate(100%, -50%);
        }

        .Toggle[disabled] .Toggle__display,
        .Toggle__input:disabled + .Toggle__display {
          opacity: 0.6;
          filter: grayscale(40%);
          cursor: not-allowed;
        }

        [dir='rtl'] .Toggle__display::before {
          left: auto;
          right: var(--offset);
        }

        [dir='rtl'] .Toggle[aria-pressed='true'] + .Toggle__display::before,
        [dir='rtl'] .Toggle__input:checked + .Toggle__display::before {
          transform: translate(-100%, -50%);
        }

        .Toggle__icon {
          display: inline-block;
          width: 1em;
          height: 1em;
          color: inherit;
          fill: currentcolor;
          vertical-align: middle;
          overflow: hidden;
        }

        .Toggle__icon--cross {
          color: #e74c3c;
          font-size: 85%;
        }

        .Toggle__icon--checkmark {
          color: #1fb978;
        }

        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}

export default Toggle

/*
 * <label class='Toggle' for='toggle-rtl' dir="rtl">
 * <input type='checkbox' name='toggle-rtl' id='toggle-rtl' class="Toggle__input" />
 * <span class="Toggle__display" hidden>
 * <svg width='18' height='14' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden="true" focusable="false" class="Toggle__icon Toggle__icon--checkmark">
 * <path d='M6.08471 10.6237L2.29164 6.83059L1 8.11313L6.08471 13.1978L17 2.28255L15.7175 1L6.08471 10.6237Z' fill='currentcolor' stroke='currentcolor' />
 * </svg>
 * <svg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden="true" focusable="false" class="Toggle__icon Toggle__icon--cross">
 * <path d='M11.167 0L6.5 4.667L1.833 0L0 1.833L4.667 6.5L0 11.167L1.833 13L6.5 8.333L11.167 13L13 11.167L8.333 6.5L13 1.833L11.167 0Z' fill='currentcolor' />
 * </svg>
 * </span>
 * Receive notifications (RTL)
 * </label>
 *
 * <label class='Toggle' for='disabled-toggle'>
 * <input type='checkbox' name='disabled-toggle' id='disabled-toggle' class="Toggle__input" disabled />
 * <span class="Toggle__display" hidden>
 * <svg width='18' height='14' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden="true" focusable="false" class="Toggle__icon Toggle__icon--checkmark">
 * <path d='M6.08471 10.6237L2.29164 6.83059L1 8.11313L6.08471 13.1978L17 2.28255L15.7175 1L6.08471 10.6237Z' fill='currentcolor' stroke='currentcolor' />
 * </svg>
 * <svg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden="true" focusable="false" class="Toggle__icon Toggle__icon--cross">
 * <path d='M11.167 0L6.5 4.667L1.833 0L0 1.833L4.667 6.5L0 11.167L1.833 13L6.5 8.333L11.167 13L13 11.167L8.333 6.5L13 1.833L11.167 0Z' fill='currentcolor' />
 * </svg>
 * </span>
 * Receive notifications (disabled)
 * </label>
 *
 * <button class='Toggle' type="button">
 * <span class="Toggle__display" hidden>
 * <svg width='18' height='14' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden="true" focusable="false" class="Toggle__icon Toggle__icon--checkmark">
 * <path d='M6.08471 10.6237L2.29164 6.83059L1 8.11313L6.08471 13.1978L17 2.28255L15.7175 1L6.08471 10.6237Z' fill='currentcolor' stroke='currentcolor' />
 * </svg>
 * <svg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden="true" focusable="false" class="Toggle__icon Toggle__icon--cross">
 * <path d='M11.167 0L6.5 4.667L1.833 0L0 1.833L4.667 6.5L0 11.167L1.833 13L6.5 8.333L11.167 13L13 11.167L8.333 6.5L13 1.833L11.167 0Z' fill='currentcolor' />
 * </svg>
 * </span>
 * Receive notifications (button)
 * </button>
 *
 * <label for='no-css-toggle'>
 * <input type='checkbox' name='no-css-toggle' id='no-css-toggle' />
 * <span hidden>
 * <svg width='18' height='14' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden="true" focusable="false">
 * <path d='M6.08471 10.6237L2.29164 6.83059L1 8.11313L6.08471 13.1978L17 2.28255L15.7175 1L6.08471 10.6237Z' fill='currentcolor' stroke='currentcolor' />
 * </svg>
 * <svg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden="true" focusable="false">
 * <path d='M11.167 0L6.5 4.667L1.833 0L0 1.833L4.667 6.5L0 11.167L1.833 13L6.5 8.333L11.167 13L13 11.167L8.333 6.5L13 1.833L11.167 0Z' fill='currentcolor' />
 * </svg>
 * </span>
 * Receive notifications (without CSS)
 * </label>
 */
