import { Col, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <FormGroup className="mb-3" controlId="wd-assignment-name">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl value="A1" />
        </FormGroup>
        <FormGroup className="mb-3" controlId="wd-assignment-desc">
          <FormControl as="textarea" rows={10} value="The assignment is available online Submit a link to the landing page of 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales justo dui, nec pretium lacus consequat iaculis. Pellentesque commodo eros malesuada rutrum semper. Vestibulum imperdiet arcu non neque sodales gravida. Morbi a efficitur erat. Curabitur auctor dolor sit amet egestas commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean sit amet venenatis nisl. Morbi tempor convallis nisl, at pulvinar nulla ultrices sit amet. Fusce pharetra sodales est. Vestibulum commodo vel est tempor finibus.

Pellentesque et hendrerit mauris. In non orci sed elit porttitor sagittis. Nullam ornare posuere enim vel porttitor. Nulla facilisi. Cras consectetur maximus tellus, nec porttitor sem eleifend nec. Sed nec purus ut tortor viverra vestibulum ut ac neque. Donec vitae scelerisque dolor. Donec rhoncus feugiat bibendum. Curabitur nec felis ut risus lacinia interdum vitae ut augue. Suspendisse pellentesque diam a odio sollicitudin vestibulum. In ullamcorper nibh odio, non euismod sem accumsan at. Vestibulum ultricies ullamcorper sagittis. Proin cursus ligula a arcu volutpat, eget fringilla ligula vehicula. Pellentesque suscipit nulla a ornare suscipit. Duis sollicitudin mi in lacinia accumsan. Nullam elementum tortor ut egestas accumsan.

Nullam tempus quis arcu porttitor hendrerit. Phasellus dignissim lorem est, in ornare massa ullamcorper a. Praesent sed consequat sapien, at convallis ipsum. In felis neque, sodales dignissim maximus vitae, feugiat in elit. Suspendisse convallis sed elit eu mollis. In nibh risus, congue mattis malesuada sed, sollicitudin id ipsum. Aenean vulputate cursus eros, a mollis leo euismod at. Proin et nisi libero. Nunc sollicitudin tristique arcu, at blandit risus maximus ut. Aliquam erat volutpat. Curabitur scelerisque elementum tempus. Donec placerat, metus non suscipit commodo, nisi risus interdum nisi, nec congue arcu sem ac nibh. Fusce nec lorem elementum, hendrerit ligula non, efficitur est. Aenean sollicitudin odio nisl, nec tincidunt libero rhoncus vitae.

Sed aliquet tortor nec ligula consequat placerat. Ut velit mauris, varius vel tellus ornare, pretium tincidunt nisi. Aenean pharetra varius metus eget ullamcorper. Nulla vitae nibh erat. Nunc posuere turpis risus, sed ornare risus malesuada blandit. Morbi laoreet lobortis fringilla. In sed bibendum urna. Sed porttitor vitae felis id vehicula. Morbi lobortis ultrices nulla, ut consequat nibh egestas placerat. Duis sed euismod ex. Morbi iaculis risus et ante rhoncus, at efficitur tellus euismod. Nullam in sem ultrices, luctus mauris nec, finibus dolor. Mauris eu nibh sapien. Cras massa diam, tincidunt quis sem vitae, hendrerit ornare dolor. Curabitur eget sem sit amet nunc egestas laoreet ornare quis justo. Sed in eros vitae nulla sagittis vestibulum.

Aenean eget velit et nulla varius accumsan sed quis elit. Proin euismod ornare risus vitae efficitur. Fusce auctor ut quam a sollicitudin. Sed vitae purus ipsum. Sed vitae elementum massa. Etiam pretium efficitur ultricies. Quisque nec orci sapien. Integer ac rutrum lectus. Suspendisse lectus ex, maximus quis accumsan at, vulputate sit amet velit. Ut dignissim gravida tincidunt. Curabitur lobortis mi ut facilisis mattis. Proin lobortis tempor leo, eget ultricies mi consectetur a. " />
        </FormGroup>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}> Points </Form.Label>
          <Col sm={10}>
            <Form.Control value="100" />
          </Col>
        </Form.Group>
        
        <Row>
          <Col sm={2}>
            <FormLabel> Assignment Group </FormLabel>
          </Col>
          <Col sm={10}>
            <FormSelect>
              <option selected>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
            </FormSelect>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={2}>
            <FormLabel> Display Grade as </FormLabel>
          </Col>
          <Col sm={10}>
            <FormSelect>
              <option selected>Percentage</option>
              <option>Points</option>
              <option>Letter</option>
            </FormSelect>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={2}>
            <FormLabel> Submission Type </FormLabel>
          </Col>
          <Col sm={10}>
            <FormSelect>
              <option selected>Online</option>
              <option>In Person</option>
            </FormSelect>
            <br/>
            <h6>Online Entry Options</h6>
            <FormCheck id="wd-check" label="Text Entry"/>
            <FormCheck id="wd-check" label="Website URL"/>
            <FormCheck id="wd-check" label="Media Recording"/>
            <FormCheck id="wd-check" label="Student Annotations"/>
            <FormCheck id="wd-check" label="File Uploads"/>
          </Col>
        </Row>

        <br/>
        <Row>
          <Col sm={2}>
            <FormLabel> Assign </FormLabel>
          </Col>
          <Col sm={10}>
            <FormGroup className="mb-3" controlId="wd-assign-to">
              <FormLabel>Assign To</FormLabel>
              <FormControl value="Everyone" />
            </FormGroup>
            <FormGroup className="mb-3" controlId="wd-due-date">
              <FormLabel> Due Date </FormLabel>
              <FormControl value="05 / 13 / 2024" />
            </FormGroup>
            <FormGroup className="mb-3" controlId="wd-available-from">
              <FormLabel> Available from </FormLabel>
              <FormControl value="05 / 06 / 2024" />
            </FormGroup>
            <FormGroup className="mb-3" controlId="wd-available-until">
              <FormLabel> until </FormLabel>
              <FormControl value="05 / 20 / 2024" />
            </FormGroup>
          </Col>
        </Row>
      </div>
  );}