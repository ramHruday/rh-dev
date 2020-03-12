import React, { useState } from 'react';
import AceEditor from 'react-ace';
import { Col, Container, Form, Row } from 'react-bootstrap';

import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-elixir';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-sass';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/snippets/csharp';
import 'ace-builds/src-noconflict/snippets/css';
import 'ace-builds/src-noconflict/snippets/elixir';
import 'ace-builds/src-noconflict/snippets/golang';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/snippets/java';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/snippets/json';
import 'ace-builds/src-noconflict/snippets/markdown';
import 'ace-builds/src-noconflict/snippets/mysql';
import 'ace-builds/src-noconflict/snippets/python';
import 'ace-builds/src-noconflict/snippets/ruby';
import 'ace-builds/src-noconflict/snippets/sass';
import 'ace-builds/src-noconflict/snippets/typescript';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-kuroir';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-solarized_light';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-xcode';

import { LANGUAGES, THEMES } from '../../models/constants';

const CodePlay: React.FC = () => {
  const [lang, setLang] = useState(LANGUAGES[0]);
  const [theme, setTheme] = useState(THEMES[0]);
  const [code, setCode] = useState("");

  return (
    <Container fluid>
      <Row>
        <Col sm="12" md="3">
          <Form>
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
          </Form>
        </Col>
        <Col sm="12" md="8" className="bg-light shadow p-3">
          <h2>Code heere!!</h2>
          <AceEditor
            placeholder="Start Code"
            mode={lang}
            theme={theme}
            onChange={setCode}
            name="blah2"
            fontSize={14}
            className="w-100 "
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={code}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CodePlay;
