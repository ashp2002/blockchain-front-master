import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import { Link as RouterLink, useHistory } from "react-router-dom";

import {
  Link,
  Typography,
  withWidth,
  Divider,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",

    width: "100%",
    color: "white",
    paddingLeft: "20px",
    backgroundColor: "#ECF0F4",
  },
  button: {
    fontFamily: "Spoqa Han Sans Neo Light",
  },
  fontBold: {
    fontWeight: "700",
  },
  linkText: {
    textDecoration: "none",
  },
}));

export default function Footer(props) {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box className={classes.container}>
        <Container maxWidth="lg">
          <Box
            pt={5}
            display="flex"
            justifyContent="flex-start"
            flexWrap="wrap"
          >
            <Box mr={[1, 3, 7]}>
              <a
                href="http://www.ksmartvoting.com/"
                className={classes.linkText}
                target="_blank"
              >
                <Button className={classes.button}>
                  (주)한국스마트선거 소개
                </Button>
              </a>
            </Box>
            <Box mr={[1, 3, 7]}>
              <Button className={classes.button}>전자투표란</Button>
            </Box>
            <Box mr={[1, 3, 7]}>
              <Button className={classes.button}>투표 개설 메뉴얼</Button>
            </Box>
            <Box mr={[1, 3, 7]}>
              <Button className={classes.button}>시스템 개요</Button>
            </Box>
            <Box sx={{ mr: [1, 3, 7] }}>
              <Button className={classes.button}>고객센터</Button>
            </Box>
          </Box>

          <Box pl={1} mt={5}>
            <Typography
              align="left"
              variant="body1"
              color="textPrimary"
              className={classes.fontBold}
            >
              (주)한국스마트선거
            </Typography>
          </Box>
          <Box>
            <Box pl={1} mt={2} display="flex" flexWrap="wrap">
              <Typography align="left" variant="body2" color="textPrimary">
                서울특별시 중구 서애로5길 12-20, 성운빌딩 405호
              </Typography>
            </Box>
            <Box pl={1} display="flex" flexWrap="wrap">
              <Typography align="left" variant="body2" color="textPrimary">
                대표 전화 번호 : 02-2135-3905 |
              </Typography>
              <Typography align="left" variant="body2" color="textPrimary">
                선거 컨설팅 : 02-2135-3057 |
              </Typography>
              <Typography align="left" variant="body2" color="textPrimary">
                이메일 : contact@d-sop.co.kr |
              </Typography>
              <Typography align="left" variant="body2" color="textPrimary">
                홈페이지 : www.ksmartvoting.com
              </Typography>
            </Box>
            <Box pl={1} display="flex" flexWrap="wrap">
              <Typography align="left" variant="body2" color="textPrimary">
                사업자 등록번호 : 161-81-02563 |
              </Typography>
              <Typography align="left" variant="body2" color="textPrimary">
                대표자 : 오명숙
              </Typography>
            </Box>
          </Box>
          <Box pb={7}>
            <Box pl={1} mt={4} display="flex">
              <Box mr={4}>
                <Link component={RouterLink} to={"/TermUse"}>
                  <Typography align="left" variant="body2" color="textPrimary">
                    이용약관
                  </Typography>
                </Link>
              </Box>
              <Box>
                <Link component={RouterLink} to={"/TermPrivacy"}>
                  <Typography align="left" variant="body2" color="textPrimary">
                    개인정보처리방침
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
