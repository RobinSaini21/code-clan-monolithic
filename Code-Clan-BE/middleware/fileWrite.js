import fs from "node:fs";;



export const writeFile =  (req, res, next) => {
    const authHeader = req.headers.authorization;

    fs.writeFile("./code-files/js-file.js", req.body.code, (err) => {
        if (err) {
            console.error(`Error writing file: ${err}`);
            return res.status(500).send(`Error writing file: ${err}`);
        } else {
           setTimeout(() => {
            next()
           }, 2000)
        }
    })
    // if (!authHeader) {
    //   return res.status(401).json({ message: 'Missing Authorization header' });
    // }
  
    // const [bearer, token] = authHeader.split(' ');
    // if (bearer !== 'Bearer' || !token) {
    //   return res.status(401).json({ message: 'Invalid Authorization header' });
    // }
  
    // jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
    //   if (err) {
    //     return res.status(401).json({ message: 'Invalid token' });
    //   }
    //   req.user = decoded;
    //   next();
    // });
  };