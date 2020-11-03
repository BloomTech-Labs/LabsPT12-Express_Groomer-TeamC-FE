import React, { useContext } from 'react';
import UpdateFormContainer from './UpdateFormContainer';
import UserContext from '../../../state/user/userContext';

const RenderUpdateForm = () => {
  const userContext = useContext(UserContext);

  const { userProfile, accountType, updateProfile } = userContext;

  return (
    <div>
      <UpdateFormContainer
        user={userProfile}
        type={accountType}
        updateProfile={updateProfile}
      />
    </div>
  );
};

export default RenderUpdateForm;
