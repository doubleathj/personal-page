import Layout from "@components/layout/Layout";
import MetaHead from "@components/shared/metaHead";
import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import { ReactElement } from "react";

const Home: NextPage = (): ReactElement => {
  return (
    <>
      <MetaHead />
      <Layout>
        <Typography
          variant={"h6"}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          아직 뭘 만들지 고민 중..
        </Typography>
      </Layout>
    </>
  );
};

export default Home;
