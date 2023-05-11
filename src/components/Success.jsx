import React from 'react';

const Success = ({ count }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>
        {count === 1
          ? 'Одному пользователю отправлено приглашение'
          : `Всем ${count} пользователям отправлено приглашение`}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Назад
      </button>
    </div>
  );
};

export default Success;
