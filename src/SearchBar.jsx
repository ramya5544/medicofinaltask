import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SearchBar() {
  return (
    <Container>
      <Row>
        <Col><input type='text' name='search' placeholder='search'/></Col>
      </Row>
    </Container>
  );
}

export default SearchBar;