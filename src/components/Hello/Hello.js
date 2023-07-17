import React from 'react';

const Hello = () => {
  const [hello, setHello] = React.useState("");

  React.useEffect(() => {
    fetch('/contractor/hello-world')
      .then(res => res.json())
      .then((result) => setHello(result.message));
  }, []);

  return (
    <div>{hello}</div>
  )
}

export default Hello;
