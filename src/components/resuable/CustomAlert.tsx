import { Alert } from "@mui/material";
import React from "react";
import { AlertProps } from "../../common/interfaces/Interfaces";

export const CustomAlert: React.FC<AlertProps> = ({
  severity,
  variant,
  message,
}) => {
  return (
    <Alert severity={severity} variant={variant}>
      {message}
    </Alert>
  );
};
