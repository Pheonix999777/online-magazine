import Container from "@/app/Components/Container/Container";
import "./styles.scss";

export default function NotFound() {
  return (
    <Container>
      <h1 className="error">
        404 | <span className="error__text">Page Not Found</span>
      </h1>
    </Container>
  );
}
