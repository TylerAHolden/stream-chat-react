import React, { useContext } from 'react';
import {
  useMessageInput,
  ChatAutoComplete,
  EmojiPicker,
  TranslationContext,
} from 'stream-chat-react';
import './MessagingInput.css';

const MessagingInput = (props) => {
  const messageInput = useMessageInput(props);
  const { t } = useContext(TranslationContext);

  return (
    <div className="str-chat__messaging-input">
      <div
        className="messaging-input__button"
        role="button"
        aria-roledescription="button"
        onClick={messageInput.openEmojiPicker}
        ref={messageInput.emojiPickerRef}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 7.5C9 8.32843 8.32843 9 7.5 9C6.67157 9 6 8.32843 6 7.5C6 6.67157 6.67157 6 7.5 6C8.32843 6 9 6.67157 9 7.5Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 7.5C14 8.32843 13.3284 9 12.5 9C11.6716 9 11 8.32843 11 7.5C11 6.67157 11.6716 6 12.5 6C13.3284 6 14 6.67157 14 7.5Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.42662 11.1808C5.87907 10.8641 6.5026 10.9741 6.81932 11.4266C7.30834 12.1252 8.21252 12.9219 9.29096 13.1459C10.275 13.3503 11.6411 13.1262 13.2568 11.3311C13.6263 10.9206 14.2585 10.8873 14.6691 11.2567C15.0796 11.6262 15.1128 12.2585 14.7434 12.669C12.759 14.8738 10.7085 15.4831 8.88421 15.1041C7.15432 14.7448 5.8585 13.5415 5.18085 12.5735C4.86414 12.121 4.97417 11.4975 5.42662 11.1808Z"
            />
          </g>
        </svg>
      </div>
      <div
        className="messaging-input__button"
        role="button"
        aria-roledescription="button"
      >
        <svg
          width="8"
          height="16"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.63636 0H8L5.09091 5.81818H8L2.54545 16L3.63636 8.72727H0L3.63636 0Z"
            fill="white"
          />
        </svg>
      </div>
      <ChatAutoComplete
        commands={messageInput.getCommands()}
        innerRef={messageInput.textareaRef}
        handleSubmit={messageInput.handleSubmit}
        onSelectItem={messageInput.onSelectItem}
        onChange={messageInput.handleChange}
        value={messageInput.text}
        rows={1}
        maxRows={props.maxRows}
        placeholder={t('Type your message')}
        onPaste={messageInput.onPaste}
        triggers={props.autocompleteTriggers}
        grow={props.grow}
        disabled={props.disabled}
        additionalTextareaProps={props.additionalTextareaProps}
      />
      <div
        className="messaging-input__button"
        role="button"
        aria-roledescription="button"
        onClick={messageInput.handleSubmit}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10ZM6 9H10V6L14 10L10 14V11H6V9Z"
            fill="white"
          />
        </svg>
      </div>
      <EmojiPicker {...messageInput} />
    </div>
  );
};

export default React.memo(MessagingInput);
