const client = require("./client");

const init = async () => {
    await client.set("name:6", "hay from nodejs")
  const result = await client.get("name:4");
  console.log(result);
};

init();
