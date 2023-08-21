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

      <div className="container_update">
        <div className="change_email">
          <DashboardTitle
            title="Change Email"
          />
          <div className="change_inputs">
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
          </div>
        </div>
        <div className="change_password">
          <DashboardTitle
            title="Change Password"
          />
          <div className="change_inputs">
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
        </div>
      </div>

    </div>
  );
};

export default FormUpdate;
