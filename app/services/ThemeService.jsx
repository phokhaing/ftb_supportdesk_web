import axios from "axios";

const fetchTheme = async () => {
  let themes = await axios.get("/theme");
  return themes.json();
};
