import { Box, InputAdornment, InputBase, Paper } from "@mui/material";
import Layout from "../../layout";
import { SetStateAction, useState } from "react";
import SearchIcon from "../../assets/icons/icon-search.svg";

const Home = () => {
  const [search, setSearch] = useState();
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) =>
    setSearch(e.target.value);
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={SearchIcon}
                  alt="search icon"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
    </Layout>
  );
};

export default Home;
