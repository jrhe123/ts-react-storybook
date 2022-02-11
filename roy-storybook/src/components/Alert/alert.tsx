import React from "react";
import classNames from "classnames";

export enum AlertType {
  Success = "success",
  Default = "default",
  Danger = "danger",
  Warning = "warning",
}

interface BaseAlertProps {
  className?: string;
  title?: string;
  message?: string;
  alertType?: AlertType;
  children?: React.ReactNode;
}

type NativeAlertProps = BaseAlertProps &
  React.ButtonHTMLAttributes<HTMLElement>;

const Alert: React.FC<NativeAlertProps> = (props) => {
  const { alertType, children, className, title, message, ...restProps } =
    props;
  const classes = classNames("alert", className, {
    [`alert-${alertType}`]: alertType,
  });
  return (
    <div className={classes}>
      <p>{title}</p>
      <p>{message}</p>
      <button {...restProps}>X</button>
      {children}
    </div>
  );
};

Alert.defaultProps = {
  message: "this is alert!",
  alertType: AlertType.Default,
};

export default Alert;
