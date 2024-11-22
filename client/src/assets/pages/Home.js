import React, { useEffect } from "react";

function Home() {
  const fetchTestMessage = async () => {
    const response = await fetch("http://localhost:5000/test/testMessage");
    const result = await response.json();
    console.log("result :>> ", result);
  };

  useEffect(() => {
    fetchTestMessage();
  }, []);

  return (
    <div>
      <h1>You-Can-Do-It-Charity</h1>
    </div>
  );
}

export default Home;
