import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Slide,
  Typography,
  Stack,
  CircularProgress,
  Card,
  CardContent,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { useAppSelector } from "./redux/Hooks";
import { selectTodo } from "./redux/slices/toDoSlice";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TipsDialog({ open, handleClose, tipId }) {
  const [tips, setTips] = useState<any>([]);
  const toDos = useAppSelector(selectTodo);
  // console.log(tipId);

  useEffect(() => {
    fetchAITips(tipId);
  }, [tipId]);

  const fetchAITips = (id: string) => {
    const tips = toDos.filter((todo) => todo.id === id);
    // console.log(tips);
    setTips(tips[0].tipData);
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={"md"}
        fullWidth={true}
      >
        <DialogTitle color={"green"}>{"Tips For You"}</DialogTitle>
        <DialogContent sx={{ backgroundColor: "#F5F5DC" }}>
          {tips.length !== 0 ? (
            tips.map((suggestion) => (
              <Card key={suggestion.tip} sx={{ minWidth: 275, margin: "1em" }}>
                <CardContent sx={{ backgroundColor: "#FFB6C1" }}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {suggestion.tip}
                  </Typography>

                  <Typography variant="body2">
                    {suggestion.suggestion}
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Stack
              spacing={2}
              direction={"row"}
              sx={{
                marginTop: "1em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress color="success" />
              <Typography color={"green"}>Getting Tips For You (:)</Typography>
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="success">
            Like It?
          </Button>
          <Button
            disabled
            onClick={handleClose}
            variant="outlined"
            color="warning"
          >
            Generate
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

// [
//     { suggestion: 'Create a party planning checklist', tip: 'tip 1' },
//     { suggestion: 'Make a guest list and send out invitations', tip: 'tip 2' },
//     { suggestion: 'Order a cake and other party supplies', tip: 'tip 3' },
//     { suggestion: 'Plan some fun activities and decorations', tip: 'tip 4' }
// ]
