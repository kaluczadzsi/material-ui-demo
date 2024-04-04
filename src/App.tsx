import {
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  Container,
  Button,
  Grid,
  useTheme,
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const App = () => {
  const theme = useTheme();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container
            maxWidth="sm"
            sx={{ bgcolor: 'white', p: theme.spacing(8, 0, 6) }}
          >
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              className="test"
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone This is a photo album and I'm trying to make this
              sentence as long as possible so we can see how it does look like
              on my screen.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
