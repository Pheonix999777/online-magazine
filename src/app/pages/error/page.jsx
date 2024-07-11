import Container from "@/app/Components/Container/Container";
import "./styles.scss";

export default function Error() {
  return (
    <Container>
      <h1 className="error">
        404 | <span className="error__text">Not Found</span>
      </h1>
    </Container>
  );
}
