import { Card, TextField, Typography, Box, Alert } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Container, Grid, CardHeader } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { openAIMeetingFunction } from "../common/openAI/openai";
import useGenerateTips from "../common/TransformAIResponseObject";
import { addToDo } from "./redux/slices/toDoSlice";
import { generateUuid } from "../common/GenerateId";
import { getCurrentDateFormatted } from "../common/GetDate";
import { TodoStatus } from "../common/enums/enums";
import { ToDo } from "../common/interfaces/Interfaces";
import { useEffect, useState } from "react";

let initialValues = {
  id: "",
  title: "",
  description: "",
  dateCreated: "",
  status: TodoStatus.Active,
  tipData: [],
};

const url = "https://api.openai.com/v1/chat/completions";

const convertObjectToArray = (todoList) => {
  return Object.entries(todoList).map(([key, value]) => ({
    task: key,
    description: value,
  }));
};

function iterateObjectFunc(arrayOfObjects) {
  let arrayOfNewTodos = [];

  for (const obj of arrayOfObjects) {
    let newObject = {
      ...initialValues,
      id: generateUuid(),
      dateCreated: getCurrentDateFormatted(),
      title: obj.description,
    };

    arrayOfNewTodos.push(newObject);
  }

  return arrayOfNewTodos;
}

export default function ExtractMeetings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [generatedTipsByAI] = useGenerateTips();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowAlert(false);
      navigate("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [showAlert]);

  const formik = useFormik({
    initialValues: {
      description: "",
    },
    onSubmit: (values, { resetForm }) => {
      setShowAlert(true);
      generatedMeetingsByAI(values.description);

      resetForm();
      // navigate("/");
    },
  });
  const generatedMeetingsByAI = (todo: string) => {
    const params = {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(openAIMeetingFunction(todo)),
    };

    axios
      .post(url, params.body, { headers: params.headers })
      .then((response) => {
        const res = JSON.parse(
          response.data.choices[0].message.function_call.arguments
        );
        const todos = iterateObjectFunc(convertObjectToArray(res));
        addMeetingTodosTips(todos);
        // setShowAlert(true);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  async function addMeetingTodosTips(meetingTodos: ToDo[]) {
    if (meetingTodos.length > 0) {
      for (const meetingTodo of meetingTodos) {
        dispatch(addToDo(meetingTodo));
        await generatedTipsByAI(meetingTodo.id, meetingTodo.title);
      }
    }
  }

  return (
    <Container sx={{ marginTop: "2em" }}>
      {showAlert && (
        <Alert
          severity="warning"
          variant="filled"
          sx={{ marginBottom: "1.5em" }}
        >
          You Will Be Redirected To Home Page! Give It Time To Extract ToDo's
          Plus Tips{" "}
        </Alert>
      )}

      <Card sx={{ minWidth: 300, backgroundColor: "#ACE1AF" }}>
        <CardHeader
          title={
            <Typography variant="h5" color={"#ff5f00"}>
              Lets Extract
            </Typography>
          }
        ></CardHeader>
        <CardContent>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sm={12} md={12}>
                <TextField
                  id="description"
                  name="description"
                  label="Paste Your Meetings, And We Extract To-Do Items For You"
                  variant="outlined"
                  fullWidth
                  multiline
                  minRows={5}
                  maxRows={8}
                  color="error"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item sm={12} md={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<AddIcon />}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
