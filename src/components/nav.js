import { Component } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
} from "@chakra-ui/react";

import { AddIcon, StarIcon } from '@chakra-ui/icons'

const styles = {
  hoverStyle: {
    '*::hover': { textDecoration: 'none !important' },
  },
  logo: {
    fontSize: "1.8em",
    textDecoration: 'none',
    fontWeight: "800",
    letterSpacing: "-0.025em"
  },
  button: {
    backgroundColor: "brand.blue"
  },
  logoLink: {
    margin: '12px 0px',
    height: 48,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
};

class Nav extends Component {

  render() {

    const { login, signup, logout, onLogout, newApp, showNewAppDialog, user } = this.props;

    // const classes = useStyles()

    return (
      <Box boxShadow="sm">
        <Flex w="calc(1024px + 24px * 2)" h="70px" align="center" justify="space-between" style={{ marginInline: 'auto' }}>
          <Link href="/" _hover={{ textDecoration: 'none !important' }}>
            <Flex flexDir="row" alignItems="center">
              {/* <StarIcon fontSize="1.5em" color="#FF9000" m="0px 10px" /> */}
              <Heading as="h1" style={styles.logo}>  <img className={styles.logo} src='/static/img/favicon.png' sx={{ boxShadow: 3 }}></img></Heading>
            </Flex>
          </Link>

          <div>
            <nav>
              {!user && <Link href="/login">
                <Button variant="link" m="0px 20px">
                  Login
                </Button>
              </Link>}
              {!user && <Link href="/signup">
                <Button variant="solid" backgroundColor="brand.blue" color="white">
                  Sign up
                </Button>
              </Link>}
              {user && <Link>
                <Button variant="link" onClick={() => onLogout()}>
                  Logout
                </Button>
              </Link>}
              {newApp &&
                <Button
                  backgroundColor="gray.100"
                  color="black"
                  borderRadius="200px"
                  padding="0px"
                  m="0px 20px"
                  onClick={showNewAppDialog}
                >
                  <AddIcon />
                </Button>
              }
            </nav>
          </div>
        </Flex >
      </Box >

    );
  }
}

// @ts-ignore
export default (Nav);