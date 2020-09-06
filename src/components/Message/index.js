import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { ru } from 'date-fns/locale'
import classNames from 'classnames';
import readedSvg from '../../assets/img/readed.svg';
import nonReadedSvg from '../../assets/img/nonreaded.svg';

const Message = ({ avatar, text, date, user, isMe, isReaded, attachments }) => {
  return (
    <div className={classNames('message', {'message--isme': isMe})}>
      <div className="message__content">
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        {isMe && isReaded ? (
          <img src={readedSvg} alt="прочитано" className="message__check"/>
        ) : (
          <img src={nonReadedSvg} alt="доставлено" className="message__check"/>
        )}
      </div>
      {attachments && (
        <div className="message__attachments">
          {attachments.map((item, index) => (
            <div className="message__attachment" key={index}>
              <img src={item.url} alt={item.filename}/>
            </div>
          ))}
        </div>
      )}
      <div className="message__date">
        {formatDistanceToNow(date, {addSuffix: true, locale: ru} )}
      </div>
    </div>
  )
}

Message.defaultProps = {
  user: {}
}

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  user: PropTypes.object,
  isMe: PropTypes.bool,
  attachments: PropTypes.array
}

export default Message;
