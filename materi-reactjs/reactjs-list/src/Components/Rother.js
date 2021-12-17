import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import RecipeCard from "./RecipeCard";
import useStyles from "./Style";

const cards = [
  {
    id: 1,
    tittle: "Soto",
    content:
      "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda",
  },
  {
    id: 2,
    tittle: "Bakso",
    content:
      "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda",
  },
  {
    id: 3,
    tittle: "Sate",
    content:
      "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda",
  },
  {
    id: 4,
    tittle: "Rendang",
    content:
      "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda",
  },
  {
    id: 5,
    tittle: "Sop Ayam",
    content:
      "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda",
  },
  {
    id: 6,
    tittle: "Sayur Bayam",
    content:
      "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda",
  },
];

export default function Recipes() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Test Page
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ad et eu qui quis aliquip eiusmod eiusmod enim reprehenderit
              adipisicing aliquip aliqua. Excepteur consectetur duis irure
              consectetur nisi quis. Deserunt qui eiusmod culpa deserunt sit
              proident officia non. Ad id quis excepteur Lorem. Exercitation
              dolore dolore et officia voluptate enim laborum Lorem veniam quis
              ad dolore laborum et. Tempor velit id et laborum.
            </Typography>
            <div className={classes.heroButtons}></div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <RecipeCard key={card.id} card={card} />
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
