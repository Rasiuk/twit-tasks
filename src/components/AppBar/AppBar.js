import { Header, Link, ListItem, ListNavigation } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <ListNavigation>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/tweets">Tweets</Link>
          </ListItem>
        </ListNavigation>
      </nav>
    </Header>
  );
};
