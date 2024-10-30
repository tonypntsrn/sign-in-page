import { Typography } from "@mui/material";
import { MessageStatus } from "../types";

type ValidationMessageProps = {
  massage: string;
  status: MessageStatus;
};

export const ValidationMessage = ({
  massage,
  status,
}: ValidationMessageProps) => (
  <Typography variant="caption" color={status}>
    {massage}
  </Typography>
);
