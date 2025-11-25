import f1Api from "f1-api-node";

const f1 async = () => {
  const driver = await f1Api.getDriverLineup(); 
  console.log(driver);
}

f1();
