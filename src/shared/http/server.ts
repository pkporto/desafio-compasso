import { app } from "./app";


const PORT = 8181;

app.listen(process.env.APP_PORT || PORT, () => {
    console.log(`APP RODANDO NA PORTA ${PORT}`);
  })
  