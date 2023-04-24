import { SkewLoader } from "react-spinners";
import { Container, ListItem, SubTitle, Title } from "./HomePage.styled";

export const HomePage = () => {
  return (
    <Container>
      <Title>Тестове завдання</Title>
      <SubTitle>
        Мета: створити картки твітів та додати інтерактивності при клікові на
        кнопку.
      </SubTitle>
      <ul>
        <SubTitle>Критерії виконання: </SubTitle>
        <ListItem>
          <SkewLoader
            color="#471CA9"
            speedMultiplier={0.25}
            cssOverride={{ marginRight: "16px" }}
          />{" "}
          Верстка фіксована в рх, семантична та валідна.
        </ListItem>
        <ListItem>
          <SkewLoader
            color="#471CA9"
            speedMultiplier={0.25}
            cssOverride={{ marginRight: "16px" }}
          />{" "}
          Немає помилок в консолі браузера
        </ListItem>
        <ListItem>
          <SkewLoader
            color="#471CA9"
            speedMultiplier={0.25}
            cssOverride={{ marginRight: "16px" }}
          />{" "}
          Робота виконана на нативному JS з використанням зборщиків або на
          React.
        </ListItem>
        <ListItem>
          <SkewLoader
            color="#471CA9"
            speedMultiplier={0.25}
            cssOverride={{ marginRight: "16px" }}
          />{" "}
          Інтерактивність працює відповідно до технічного завдання.
        </ListItem>
        <ListItem>
          <SkewLoader
            color="#471CA9"
            speedMultiplier={0.25}
            cssOverride={{ marginRight: "16px" }}
          />
          Код відформатований та без коментарів.
        </ListItem>
      </ul>
    </Container>
  );
};
