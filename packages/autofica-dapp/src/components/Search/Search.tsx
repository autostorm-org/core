/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { BoundedRow } from "@autofica/common";
import { createUseStyles } from "@autofica/common";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import InputAdornment from "@material-ui/core/InputAdornment";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

import {
  RegularRegionFragment,
  RegularCarMakeFragment,
  RegularCarModelFragment,
} from "@autofica/common";
const useStyles = createUseStyles((theme: any) => ({
  root: {
    position: "relative",
    top: -20,
    zIndex: 100,
    "@media (max-width: 768px)": {
      top: 0,
    },
  },
  bottomArea: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 15px 0px 15px",

    "@media (max-width: 768px)": {
      flexWrap: "wrap",
    },
  },
  topArea: {
    padding: "0px 15px 0px 15px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  divider: {
    width: "100%",
    marginTop: 5,
    marginBottom: 10,
    // height: "0.1px",
    // backgroundColor: "#616060",
    border: "0.5px solid #dedee1",
  },
  card: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  makeModel: {
    width: 300,

    "@media (max-width: 768px)": {
      width: "100%",
      marginBottom: 10,
    },
  },
  region: {
    width: 210,
    "@media (max-width: 768px)": {
      width: "48%",
      marginBottom: 10,
    },
    "@media (max-width: 425px)": {
      width: "100%",
      marginBottom: 10,
    },
  },
  priceRange: {
    width: 200,
    "@media (max-width: 768px)": {
      width: "48%",
    },
    "@media (max-width: 425px)": {
      width: "100%",
      marginBottom: 10,
    },
  },
  inputFontSize: {
    fontSize: "14px !important",
  },
  input: {
    "& label.Mui-focused": {
      color: theme.palette.primary.main,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
    fontSize: "12px !important",
  },

  button: {
    backgroundColor: `#FC3863 !important`,
    height: "100%",
    color: "white !important",
    fontSize: "14px !important",
  },
  buttonContainer: {
    // width: 200,

    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  typography: {
    textAlign: "left",
    fontSize: 18,
    fontFamily: "Raleway",
    fontWeight: "bold",
    letterSpacing: "0px",
    color: "#000000",
    opacity: "1",
    // marginBottom: 10,
    // marginTop: 10,
    display: "block",
  },

  link: {
    textAlign: "left",
    cursor: "pointer",
    // textDecoration: "underline",
    // font: "normal normal normal 16px/22px Roboto",
    fontSize: 14,
    fontFamily: "Roboto",
    fonstWeight: "normal",
    letterSpacing: "0px",
    color: "#0085C9",
    opacity: "1",
    backgroundColor: "white",
    border: "none",
  },
}));

type Props = {
  carModels: Array<RegularCarModelFragment>;
  carMakes: Array<RegularCarMakeFragment>;
  regions: Array<RegularRegionFragment>;
};

const makeArrayToMap = (carMakes: Array<RegularCarMakeFragment>) => {
  const res: { [key: string]: string } = {};
  for (const make of carMakes) {
    res[make.id] = make.makeName;
  }

  return res;
};

export default function Grouped(props: Props) {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });
  const styles = useStyles();
  // console.log(props);

  const makeMap = makeArrayToMap(props.carMakes);

  return (
    <BoundedRow>
      <div className={styles.root}>
        <Card elevation={3} className={styles.card}>
          <div className={styles.topArea}>
            <span className={styles.typography}>Encuentra tu Auto</span>

            <button className={styles.link}>Busqueda avanzada</button>
          </div>
          <div className={styles.divider} />
          <div className={styles.bottomArea}>
            <div className={styles.makeModel}>
              <Autocomplete
                options={props.carModels}
                groupBy={(option) => makeMap[option.carMakeId]}
                getOptionLabel={(option) => option.modelName}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Marca y modelo"
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <DirectionsCarIcon />
                        </InputAdornment>
                      ),
                      classes: { input: styles.inputFontSize },
                    }}
                    classes={{
                      root: styles.input,
                    }}
                  />
                )}
              />
            </div>
            <div className={styles.region}>
              <Autocomplete
                id="regions"
                options={props.regions}
                getOptionLabel={(option) => option.regionName}
                style={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Departamento"
                    classes={{
                      root: styles.input,
                    }}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon />
                        </InputAdornment>
                      ),
                      classes: { input: styles.inputFontSize },
                    }}
                  />
                )}
              />
            </div>

            <div className={styles.priceRange}>
              <Autocomplete
                id="grouped-demo"
                options={options.sort(
                  (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                )}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.title}
                style={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    classes={{
                      root: styles.input,
                    }}
                    placeholder="precio"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <MonetizationOnIcon />
                        </InputAdornment>
                      ),
                      classes: { input: styles.inputFontSize },
                    }}
                  />
                )}
              />
            </div>

            <div className={styles.buttonContainer}>
              <Button classes={{ root: styles.button }} fullWidth>
                Buscar
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </BoundedRow>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
