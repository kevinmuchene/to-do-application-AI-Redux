import { Card, TextField } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Container, Grid, CardHeader } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddToDo() {
  return (
    <Container sx={{ marginTop: "2em" }}>
      <Card sx={{ minWidth: 300 }}>
        <CardHeader
          title="Add that To-Do!!"
          subheader="Get It Done :)"
        ></CardHeader>
        <CardContent>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item sm={12} md={12}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item sm={12} md={12}>
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                minRows={3}
                maxRows={6}
              />
            </Grid>
            <Grid item sm={12} md={12}>
              <Button
                fullWidth
                variant="contained"
                color="success"
                startIcon={<AddIcon />}
              >
                Add Post
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
