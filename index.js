//Express app
const express = require("express");
const { resolveUserRoles } = require("./utils");
const { User, Role, Permission } = require("./models");
const app = express();

app.use(express.json());

const hasPermission = (action) => {
  return (req, res, next) => {
    const { user } = req.body;
    const { asset } = req.params;
    const userRoles = resolveUserRoles(1);


    const permissions = userRoles.reduce((perms, role) => {
      perms =
        roles[role] && roles[role][action]
          ? perms.concat(roles[role][action])
          : perms.concat([]);
      return perms;
    }, []);

    const allowed = permissions.includes(asset);

    allowed ? next() : res.status(403).send("Forbidden").end();
  };
};

app.get("/api/test", async (req, res) => {
  
});

app.put("/api/:asset", hasPermission("consume"), (req, res) => {
  res.send("Got Permission");
});

app.delete("/api/:asset", hasPermission("destroy"), (req, res) => {
  res.send("Got Permission");
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
