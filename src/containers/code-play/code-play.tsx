import React from 'react';
import CodeSandboxer from 'react-codesandboxer';

const CodePlay: React.FC = () => {
  return (
    <CodeSandboxer
      examplePath="src/components/header-bar/header-bar.tsx"
      gitInfo={{
        account: "ramHruday",
        repository: "rh-dev",
        host: "github"
      }}
      afterDeploy={(sandboxUrl: string, sandboxId: string) =>
        console.log(sandboxId, sandboxUrl)
      }
    >
      {() => <button type="submit">Upload to CodeSandbox</button>}
    </CodeSandboxer>
  );
};

export default CodePlay;
