/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './FormUpdate.scss';
import TemplateUpdate from '../TemplateUpdate';
import DashboardTitle from '../DashboardTableTitle';

const FormUpdate = () => {
  const handleClick = (e) => {
    handleClick(e);
  };
  return (

    <div className="section__update">
      <DashboardTitle
        title="Change Email"
      />
      <TemplateUpdate
        title="Current Email"
        placeholder="Current Email Address"
      />
      <TemplateUpdate
        title="New Email"
        placeholder="New Email Address"
      />
      <TemplateUpdate
        title="New Email Again"
        placeholder="New Again Email Address"
        textbutton="Change Email"
        showButton={true}
      />
      <DashboardTitle
        title="Change Password"
      />
      <TemplateUpdate
        title="Current Password"
        placeholder="Current Password"
      />
      <TemplateUpdate
        title="New Password"
        placeholder="New Password"
      />
      <TemplateUpdate
        title="New Password Again"
        placeholder="New PasswordAgain"
        textbutton="Change Password"
        showButton={true}
      />
    </div>
  );
};

export default FormUpdate;
