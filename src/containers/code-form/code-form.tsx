import React from 'react';
import { Form } from 'react-bootstrap';

import { LANGUAGES, THEMES } from '../../models/constants';

interface ICodeFormProps {
  setLang: (lang: string) => void;
  setTheme: (theme: string) => void;
  setTitle: (title: string) => void;
  setDesc: (desc: string) => void;
}
const AceCodeForm: React.FC<ICodeFormProps> = ({
  setLang,
  setTheme,
  setTitle,
  setDesc
}) => {
  return (
    <Form>
      <Form.Group controlId="formBasicMode">
        <Form.Label>Title</Form.Label>
        <Form.Control
          as="input"
          placeholder="name of your code-snippet's"
          onChange={e => setTitle(e.currentTarget.value)}
        />
        {/* <Form.Text className="text-muted">keep short,to the point !</Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formBasicMode">
        <Form.Label>Mode</Form.Label>
        <Form.Control
          as="select"
          placeholder="Enter Mode"
          onChange={e => setLang(e.currentTarget.value)}
        >
          {LANGUAGES.map(lang => (
            <option>{lang}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicTheme">
        <Form.Label>Theme</Form.Label>
        <Form.Control
          as="select"
          placeholder="Enter Mode"
          onChange={e => setTheme(e.currentTarget.value)}
        >
          {THEMES.map(theme => (
            <option value={theme}>{theme}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicMode">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="describe how to use it"
          onChange={e => setDesc(e.currentTarget.value)}
        />
        {/* <Form.Text className="text-muted">keep short,to the point !</Form.Text> */}
      </Form.Group>
      {/* future  */}
      {/* <Button variant="light" disabled className="p-2 cursor-not-allowed">
        <Codesandbox key="play" />
        Code-Sandbox
      </Button> */}
    </Form>
  );
};

export default AceCodeForm;
